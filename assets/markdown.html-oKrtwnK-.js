import{_ as e,o as n,c as a,a as i}from"./app-EAzsM2kq.js";const d={},s=i(`<h1 id="寫筆記必學的-markdown-語法" tabindex="-1"><a class="header-anchor" href="#寫筆記必學的-markdown-語法"><span>寫筆記必學的 Markdown 語法</span></a></h1><p>Markdown 是一種輕量級標記語言，任何文字編輯器都可以使用，具有易學易用、可讀性高的特色，非常適合用來寫筆記或構思內容。</p><div class="custom-container tip"><p class="custom-container-title">重點提示</p><p>Markdown 不是被設計來取代 HTML 或製作網頁的。</p></div><p>使用 <a href="https://hackmd.io/" target="_blank" rel="noopener noreferrer">HackMD</a> 示範與練習。</p><div class="custom-container tip"><p class="custom-container-title">重點提示</p><p>HackMD 免費版使用時會新增一個隨機網址，知道網址的人都可以編輯，請勿放置敏感資料！</p></div><p>以下是常用的 Markdown 語法：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code># 一級標題
## 二級標題
### 三級標題

1. 有序列表
2. 有序列表
3. 有序列表

* 無序列表
* 無序列表
* 無序列表

- [ ] 待辦事項 (未完成)
- [ ] 待辦事項 (未完成)
- [x] 待辦事項 (已完成)

[超連結文字](https://www.example.com)

![圖片替代文字](example.jpg)

|表格|表格|
|---|---|
|A|AA|
|B|BB|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用-vscode-撰寫-markdown" tabindex="-1"><a class="header-anchor" href="#使用-vscode-撰寫-markdown"><span>使用 VSCode 撰寫 Markdown</span></a></h2><p>VSCode 本身即支援 Markdown 的語法高亮，也有許多 Markdown 相關的擴充套件可以輔助撰寫，例如：<code>Markdown All in One</code>。</p><h2 id="markdown-的應用" tabindex="-1"><a class="header-anchor" href="#markdown-的應用"><span>Markdown 的應用</span></a></h2><h3 id="google-文件支援部分-markdown-語法" tabindex="-1"><a class="header-anchor" href="#google-文件支援部分-markdown-語法"><span>Google 文件支援部分 Markdown 語法</span></a></h3><p>預設情況下是關閉的，在「工具 &gt; 偏好設定」中可開啟「自動偵測 Markdown」 支援部分 Markdown 語法，包含：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>#~###### 標題
*+- 無序項目符號
1. 有序項目符號
[] 待辦事項
[]() 超連結
粗體、斜體
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">重點提示</p><p>善用 Google 文件、Word 的樣式設定，可以快速更新標題、段落、列表…等樣式。避免使用格式複製重覆操作。</p></div><h3 id="使用-markdown-製作簡報" tabindex="-1"><a class="header-anchor" href="#使用-markdown-製作簡報"><span>使用 Markdown 製作簡報</span></a></h3><p>VSCode + VSCode-Reveal 擴充套件可以快速建立簡報，使用一級標題與 <code>---</code> 建立簡報。</p><div class="custom-container tip"><p class="custom-container-title">重點提示</p><p>先將簡報的大綱建立，逐步補充內容，反覆試演並修正內容，最後才使用 Powerpoint 或 Keynote 進行視覺設計。</p></div><h2 id="參考資料" tabindex="-1"><a class="header-anchor" href="#參考資料"><span>參考資料</span></a></h2><ul><li><a href="https://markdown.tw/" target="_blank" rel="noopener noreferrer">Markdown 文件</a></li><li><a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" rel="noopener noreferrer">Markdown Cheat Sheet</a></li></ul><div class="custom-container tip"><p class="custom-container-title">重點提示</p><p>VSCode 會自動偵測目前的文件類型，在下方狀態列右側可以查看與切換文件類型。或使用快速鍵 <code>ctrl/cmd + k</code> 再按 <code>m</code> 並於支援的文件類型列表中選擇。</p></div>`,20),r=[s];function l(c,o){return n(),a("div",null,r)}const v=e(d,[["render",l],["__file","markdown.html.vue"]]);export{v as default};
