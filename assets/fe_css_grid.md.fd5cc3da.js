import{_ as s,o as a,c as n,O as l}from"./chunks/framework.ed8d50c3.js";const p="/assets/grid_compatibility.01da788d.png",u=JSON.parse('{"title":"grid 布局","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"fe/css/grid.md","lastUpdated":1700829094000}'),e={name:"fe/css/grid.md"},o=l(`<h1 id="grid-布局" tabindex="-1">grid 布局 <a class="header-anchor" href="#grid-布局" aria-label="Permalink to &quot;grid 布局&quot;">​</a></h1><h2 id="grid-布局概述" tabindex="-1">grid 布局概述 <a class="header-anchor" href="#grid-布局概述" aria-label="Permalink to &quot;grid 布局概述&quot;">​</a></h2><p><code>flex</code> 弹性布局是一维布局，<code>grid</code> 网格布局是二维布局。</p><p>开启方式：元素添加 <code>display: grid</code> 或 <code>display: inline-grid</code> 。</p><p>开启 <code>grid</code> 布局的元素，称为容器，其子元素变成容器成员，称为 <code>grid</code> 项目。</p><p><code>grid</code> 布局原理：通过设置容器和项目的属性，来控制子盒子的位置和排列方式。</p><h2 id="grid-布局容器盒子常见属性" tabindex="-1">grid 布局容器盒子常见属性 <a class="header-anchor" href="#grid-布局容器盒子常见属性" aria-label="Permalink to &quot;grid 布局容器盒子常见属性&quot;">​</a></h2><h3 id="display" tabindex="-1">display <a class="header-anchor" href="#display" aria-label="Permalink to &quot;display&quot;">​</a></h3><p>创建 <code>grid</code> 布局容器。</p><table><thead><tr><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>grid</td><td>容器元素为块级元素</td></tr><tr><td>inline-grid</td><td>容器元素为行内元素</td></tr></tbody></table><h3 id="grid-template-columns-grid-template-rows" tabindex="-1">grid-template-columns &amp; grid-template-rows <a class="header-anchor" href="#grid-template-columns-grid-template-rows" aria-label="Permalink to &quot;grid-template-columns &amp; grid-template-rows&quot;">​</a></h3><p><code>grid-template-columns</code> 设置列宽，<code>grid-template-rows</code> 设置行高。用法类似，以前者为例进行说明。</p><h4 id="设置固定列宽行高" tabindex="-1">设置固定列宽行高 <a class="header-anchor" href="#设置固定列宽行高" aria-label="Permalink to &quot;设置固定列宽行高&quot;">​</a></h4><p><code>grid-template-columns: 30px 40px 50px</code> 表示一共三列，列宽分别为 30px 40px 50px。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/*  一共三列，列宽分别为 30px 40px 50px */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/*  一共两行，行高分别为 30px 40px 50px  */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="repeat" tabindex="-1">repeat() <a class="header-anchor" href="#repeat" aria-label="Permalink to &quot;repeat()&quot;">​</a></h4><p>见名知义，重复声明。</p><p>第一个参数为重复个数，第二个参数为宽度或高度。</p><p><code>grid-template-columns: repeat(3, 50px)</code> 表示一共三列，列宽为 50px。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* grid-template-columns: 50px 50px 50px; */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 一共三列，列宽为 50px */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="auto-fill" tabindex="-1">auto-fill <a class="header-anchor" href="#auto-fill" aria-label="Permalink to &quot;auto-fill&quot;">​</a></h4><p>尽可能填满每一行或每一列。只要网格容器够大，尽可能容纳更多单元格。</p><p><code>grid-template-columns: repeat(auto-fill, 50px)</code> 表示每列宽度为 50px，数量不固定，每一行尽量容纳更多列。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 每列宽度为 50px，数量不固定，每一行尽量容纳更多列 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">auto-fill</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 每行高度为 30px，数量不固定，每一列尽量容纳更多行 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">auto-fill</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="fr" tabindex="-1">fr <a class="header-anchor" href="#fr" aria-label="Permalink to &quot;fr&quot;">​</a></h4><p><code>fr</code> 指明占容器剩余空间的份数，类似于 <code>flex</code> 布局的 <code>flex-grow</code> 属性。</p><p><code>grid-template-columns: 30px 1fr 2fr</code> 表示第一列宽度为 30px，第二列和第三列分别占剩余宽度的 1/3、2/3</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 第一列宽度为 30px，第二列和第三列分别占剩余宽度的 1/3、2/3 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2fr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="minmax" tabindex="-1">minmax() <a class="header-anchor" href="#minmax" aria-label="Permalink to &quot;minmax()&quot;">​</a></h4><p>设置单元格最小和最大的宽度或高度。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 最小 40px，但不能大于第二列宽度的 2 倍 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minmax</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2fr</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 至少 120px，还有空余则一起等分 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">repeat</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">auto-fill</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">minmax</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">120px</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1fr</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="auto" tabindex="-1">auto <a class="header-anchor" href="#auto" aria-label="Permalink to &quot;auto&quot;">​</a></h4><p>由浏览器决定具体的宽度或高度。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 第二列的宽度由浏览器决定 */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> auto </span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="row-gap" tabindex="-1">row-gap <a class="header-anchor" href="#row-gap" aria-label="Permalink to &quot;row-gap&quot;">​</a></h3><p>设置行间距。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">row-gap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="column-gap" tabindex="-1">column-gap <a class="header-anchor" href="#column-gap" aria-label="Permalink to &quot;column-gap&quot;">​</a></h3><p>设置列间距。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">column-gap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="gap" tabindex="-1">gap <a class="header-anchor" href="#gap" aria-label="Permalink to &quot;gap&quot;">​</a></h3><p><code>row-gap</code> 和 <code>column-gap</code> 的简写形式。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 行间距 10px，列间距 20px */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">gap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="justify-content" tabindex="-1">justify-content <a class="header-anchor" href="#justify-content" aria-label="Permalink to &quot;justify-content&quot;">​</a></h3><p>设置单元格项目在网格容器里的水平排列方式，类似 <code>flex</code> 布局的 <code>justify-content</code> 属性。</p><table><thead><tr><th>属性值</th><th>含义</th></tr></thead><tbody><tr><td>start</td><td>从头开始</td></tr><tr><td>end</td><td>从尾部开始</td></tr><tr><td>center</td><td>水平居中</td></tr><tr><td>space-around</td><td>平分剩余空间</td></tr><tr><td>space-between</td><td>两侧单元格贴边，再平分剩余空间</td></tr><tr><td>space-evenly</td><td>单元格之间等间距，且两侧单元格和容器也是相同的距离</td></tr><tr><td>stretch</td><td>单元格没指定列宽，拉伸占满整行</td></tr></tbody></table><p><code>space-around</code>、<code>space-between</code>、<code>space-evenly</code> 演示案例<a href="https://juejin.cn/post/6854573220306255880" target="_blank" rel="noreferrer">图片</a>： <img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/7/26/173895927ba770c4~tplv-t2oaga2asx-zoom-in-crop-mark:3024:0:0:0.awebp" alt="justify-content"></p><h3 id="align-content" tabindex="-1">align-content <a class="header-anchor" href="#align-content" aria-label="Permalink to &quot;align-content&quot;">​</a></h3><p>设置单元格项目在网格容器里的竖直方向的排列方式，类似 <code>flex</code> 布局的 <code>align-items</code> 属性。</p><p>属性值和 <code>justify-content</code> 相同。</p><h3 id="grid-auto-rows" tabindex="-1">grid-auto-rows <a class="header-anchor" href="#grid-auto-rows" aria-label="Permalink to &quot;grid-auto-rows&quot;">​</a></h3><p>设置除了 <code>grid-template-row</code> 定义的行以外的行的高度。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 第一和第二行高度为 30px、40px */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 其他行的高度都为 60px */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-auto-rows</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="grid-auto-columns" tabindex="-1">grid-auto-columns <a class="header-anchor" href="#grid-auto-columns" aria-label="Permalink to &quot;grid-auto-columns&quot;">​</a></h3><p>设置除了 <code>grid-template-columns</code> 定义的列以外的列的宽度。</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">father</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> grid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 第一和第二列宽度为 30px、40px */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-template-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">30px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">/* 其他列的宽度都为 60px */</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#B2CCD6;">grid-auto-columns</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">60px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="grid-布局兼容性" tabindex="-1">grid 布局兼容性 <a class="header-anchor" href="#grid-布局兼容性" aria-label="Permalink to &quot;grid 布局兼容性&quot;">​</a></h2><p><img src="`+p+'" alt="grid 布局兼容性"></p>',58),t=[o];function r(c,i,d,y,C,D){return a(),n("div",null,t)}const m=s(e,[["render",r]]);export{u as __pageData,m as default};