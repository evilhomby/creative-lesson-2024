import{_ as a,o as n,c as s,a as t}from"./app-EAzsM2kq.js";const A={},p=t(`<h1 id="關於-css-的-box-model-盒子模型" tabindex="-1"><a class="header-anchor" href="#關於-css-的-box-model-盒子模型"><span>關於 CSS 的 Box Model (盒子模型)</span></a></h1><p>在網頁設計中所有元素都是盒子，以下是個簡單的範例，可以看到每個元素都有一個紅色的外框，但外框的大小不一樣。</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">body &gt; *</span> <span class="token punctuation">{</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 1px solid #f00<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>h1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>div<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>span<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span><span class="token punctuation">&gt;</span></span>a<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本上分為 block 和 inline 兩大類。大致分辨的方法為：</p><ul><li>block 區塊元素：會占據一整個水平空間 (即左右不會有其他元素出現)，如 <code>&lt;h1&gt;, &lt;div&gt;, &lt;p&gt;, &lt;ul&gt;</code></li><li>inline 元素：出現在同一行的元素，如 <code>&lt;a&gt;, &lt;span&gt;, &lt;strong&gt;</code></li></ul><h3 id="box-model-的四個重要名詞" tabindex="-1"><a class="header-anchor" href="#box-model-的四個重要名詞"><span>Box Model 的四個重要名詞</span></a></h3><ul><li>margin(邊界)：元素和元素間的距離</li><li>border(邊框)</li><li>padding：元素內容和邊框間的距離</li><li>content：元素內容的寬和高</li></ul><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
    margin: 100px;
    border: 10px solid #000;
    padding: 50px;
    width: 200px;
    height: 200px;
<span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="data:image/png;base64,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" alt=""></p><div class="custom-container warning"><p class="custom-container-title">實作練習</p><p>請任意找到一個網站，嘗試拆解並畫出其盒子模型。</p></div>`,10),l=[p];function c(e,o){return n(),s("div",null,l)}const u=a(A,[["render",c],["__file","css-box-model.html.vue"]]);export{u as default};