import{_ as a,o as t,c as n,a as s}from"./app-EAzsM2kq.js";const e={},l=s(`<h1 id="html-簡介" tabindex="-1"><a class="header-anchor" href="#html-簡介"><span>HTML 簡介</span></a></h1><h3 id="什麼是-html" tabindex="-1"><a class="header-anchor" href="#什麼是-html"><span>什麼是 HTML</span></a></h3><p>HTML (HyperText Markup Language) 是一種標記式語言，用來建立網頁的結構。HTML 由一系列的標籤 (tag) 組成，每個標籤代表網頁上的一個元素。</p><div class="custom-container tip"><p class="custom-container-title">重點提示</p><p>網頁設計中三大元素：HTML、CSS、JavaScript 分別負責網頁結構、樣式、行為。 結構可以想像為人體的骨架，樣式為外觀，行為則為動作。</p></div><h3 id="標籤、元素與屬性" tabindex="-1"><a class="header-anchor" href="#標籤、元素與屬性"><span>標籤、元素與屬性</span></a></h3><p>標籤 (tag)：如 <code>&lt;html&gt;、&lt;head&gt;、&lt;body&gt;、&lt;div&gt;、&lt;hn&gt;、&lt;p&gt;</code>…等等。</p><p>元素 (element)：以「<code>起始標籤 + 內容 + 結束標籤</code>」組成。例：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>這是內容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>空元素 (empty element)：如 <code>&lt;img&gt;</code>、<code>&lt;br&gt;</code>…只需單獨出現或沒有元素內容的情況。</p><p>屬性 (attribute)：屬性是附加於元素的額外資訊，只能寫在起始標籤中，格式為 <code>name=&quot;value&quot;</code></p><div class="custom-container warning"><p class="custom-container-title">觀念題</p><p><code>&lt;div style=&quot;background:red;&quot;&gt;</code>中的 style 是屬性嗎？</p><details class="custom-container details"><summary>點我看答案</summary><p>是的，是元素的樣式屬性！</p></details></div><h3 id="網頁的基本構成" tabindex="-1"><a class="header-anchor" href="#網頁的基本構成"><span>網頁的基本構成</span></a></h3><p>需有 <code>html, head, title, body</code> 四個元素 (可省略瀏覽器會自動產生，但建議養成習慣)。例：</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>網頁標題<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>內容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用的元素介紹" tabindex="-1"><a class="header-anchor" href="#常用的元素介紹"><span>常用的元素介紹</span></a></h3><p>HTML 有上百種元素，但常用的元素大致如下：</p><ul><li>h1..h6(hn)：標題元素(header)</li><li>p：段落元素</li><li>div (division)：區塊分隔元素</li><li>span：行內分隔元素</li><li>table、tr、th、td：表格</li><li>a (anchor)：錨點元素</li><li>form、input、option…：表單</li><li>img：影像元素</li><li>br (line-break)：換行</li><li>script：腳本元素</li><li>style：樣式元素</li><li>ol、ul、li：清單元素</li><li>nav, header, footer, article, section: HTML5 新定義的區塊分隔元素</li></ul><div class="custom-container tip"><p class="custom-container-title">重點提示</p><p>基本上可以使用 <code>&lt;div&gt;</code> 和 <code>&lt;span&gt;</code> 來組合出各種網頁的版面。 但使用語意化的標籤可以讓網頁更有結構，也更有利於 SEO。</p><p>例如：</p><ul><li>標題使用 <code>&lt;h1&gt;</code> 而不要使用 <code>&lt;div style=&quot;font-size: 36px;&gt;</code></li><li>選單使用 <code>&lt;nav&gt;</code> 而不要使用 <code>&lt;div class=&quot;nav&quot;&gt;</code></li></ul></div>`,18),p=[l];function c(i,o){return t(),n("div",null,p)}const u=a(e,[["render",c],["__file","html.html.vue"]]);export{u as default};