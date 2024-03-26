// ==UserScript==
// @name         <Stork> 一等一系統專用中英文名查詢功能 (多筆查詢 + Autocomplete 版)
// @namespace    https://www.e-stork.com.tw
// @version      1.0
// @description  一等一系統擴充功能，可於右側開啟選單查詢中英文名，提供「換行、空白、逗號、全形頓號」多組查詢功能與 Autocomplte.js 隨打即找
// @author       Homby
// @match        http://192.168.1.240/UOF/*
// @require      https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/autoComplete.min.js
// @grant        GM_addStyle
// ==/UserScript==

/*global autoComplete*/

(function() {
    'use strict';

    let shadowHost = document.createElement('div');
    document.querySelector('body').append(shadowHost);

    let shadowRoot = shadowHost.attachShadow({mode: 'open'});

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css';
    shadowRoot.appendChild(link);

    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://cdn.jsdelivr.net/npm/@tarekraafat/autocomplete.js@10.2.7/dist/css/autoComplete.02.min.css';
    shadowRoot.appendChild(link2);

    let config = {
        containerWidth: 300,
        btnTogglerWidth: 35,
        btnTogglerHeight: 40,
    }

    let html = document.createElement('div');
    html.innerHTML = `
    <div id="translate-container" class="container py-3 d-flex flex-column" style='position:fixed;top:0;right:-${config.containerWidth}px;bottom:0;width:${config.containerWidth}px;background:#D1E0ED;font-size:16px;transition:0.5s right;filter:drop-shadow(-1px 0px 2px #666);'>
        <div id="btn-toggle" style='position:absolute;top:1rem;left:-${config.btnTogglerWidth}px;background:#D1E0ED;width:${config.btnTogglerWidth}px;height:${config.btnTogglerHeight}px;cursor:pointer;text-align:center;line-height:${config.btnTogglerWidth}px;border-radius: 5px 0px 0px 5px;'>🔍</div>
        <h4 class="text-center m-0 py-3" style="color:#003A8E;text-shadow:0px 1px #fff;">中英文名隨打即找</h4>
        <div class="row mb-3">
            <div class="col">
                <style>
                    .autoComplete_wrapper {
                        display: block;
                    }
                    .autoComplete_wrapper ul {
                        box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important
                    }
                    .autoComplete_wrapper mark {
                        padding: 0;
                    }
                </style>
                <input id="autoComplete" class="form-control" style="width:100%;">
            </div>
        </div>
        <div class="row mb-3 flex-grow-1">
            <div class="col">
                <div id="output-autocomplete" class="p-2 border rounded" style="background:#fff;overflow:auto;height:320px;text-transform: capitalize;line-height:1.5rem;"></div>
            </div>
        </div>
        <h4 class="text-center m-0 py-3" style="color:#003A8E;text-shadow:0px 1px #fff;">多筆查詢</h4>
        <div class="row mb-3">
            <div class="col">
                <select class="form-select">
                    <option value="\n" selected>換行</option>
                    <option value=" ">空格</option>
                    <option value="," >逗號</option>
                    <option value="、">全形頓號</option>
                </select>
            </div>
        </div>
        <div class="row mb-3 flex-grow-1">
            <div class="col-6">
                <textarea class="form-control" style="resize:none;height:320px"></textarea>
            </div>
            <div class="col-6">
                <div id="output" class="p-2 border rounded" style="background:#fff;overflow:auto;height:320px;text-transform: capitalize;line-height:1.5rem;"></div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button id="btn-reset" class="btn btn-danger w-100">全部清除</button>
            </div>
        </div>
    </div>
    `;
    shadowRoot.append(html);

    let container = shadowRoot.querySelector('#translate-container');
    let input = shadowRoot.querySelector('#translate-container #autoComplete');
    let select = shadowRoot.querySelector('#translate-container select');
    let textarea = shadowRoot.querySelector('#translate-container textarea');
    let outputAutocomplete = shadowRoot.querySelector('#translate-container #output-autocomplete');
    let output = shadowRoot.querySelector('#translate-container #output');
    let btnToggle = shadowRoot.querySelector('#btn-toggle');
    let btnReset = shadowRoot.querySelector('#btn-reset');
    let menuOpen = false;

    btnToggle.onclick = function() {
        menuOpen = !menuOpen;
        container.style.right = menuOpen ? '0px' : `-${config.containerWidth}px`;
        if(menuOpen) {
            input.focus();
        }
     }

    let members;
    let separator;

    fetch('http://192.168.1.186:9083/v1.0/employee-name-list')
    .then(res => res.json())
    .then(data => {
        members = data.employeeNameList
        .sort((a, b) => {
            const nameA = a.englishName.toLowerCase();
            const nameB = b.englishName.toLowerCase();
            if(nameA < nameB) {
                return -1;
            }
            if(nameA > nameB) {
                return 1;
            }
            return 0;
        });

        let autoCompleteJS = new autoComplete({
            placeHolder: '隨打即找，輸入中英文名',
            selector() {
                return input;
            },
            data: {
                src: members.map((member) => {
                    return `${member.name}．${member.englishName.charAt(0).toUpperCase() + member.englishName.slice(1).toLowerCase()}`;
                }),
            },
            resultsList: {
                maxResults: 1000
            },
            resultItem: {
                highlight: true
            },
            events: {
                input: {
                    selection: (event) => {
                        const selection = event.detail.selection.value;
                        autoCompleteJS.input.value = '';
                        outputAutocomplete.innerHTML += `${selection}<br>`;
                    }
                }
            }
        });

        separator = select.value;
        select.onchange = changeChar;
        textarea.onkeyup = keyup;
    });

    function changeChar() {
        separator = this.value;
        keyup();
    }

    function keyup() {
        let value = textarea.value;
        let lines = value.split(separator).filter(v => v).map(line => line.trim());
        let result = lines.map(translate);
        output.innerHTML = result.join('<br>');
        console.log('keyup');
    }

    function translate(value) {
        let findMember = members.find(member => member.name == value || member.englishName.toLowerCase() == value.toLowerCase())
        let result = findMember ? (findMember.name == value ? findMember.englishName : findMember.name) : '查無此人'
        return result;
    }

    btnReset.onclick = function() {
        outputAutocomplete.innerHTML = '';
        input.value = '';
        input.focus();

        textarea.value = '';
        keyup();
    }

})();