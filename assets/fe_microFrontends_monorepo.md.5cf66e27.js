import{_ as s,o as n,c as a,O as e}from"./chunks/framework.ed8d50c3.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"fe/microFrontends/monorepo.md","lastUpdated":1700829094000}'),l={name:"fe/microFrontends/monorepo.md"},p=e(`<h2 id="monorepo" tabindex="-1">Monorepo <a class="header-anchor" href="#monorepo" aria-label="Permalink to &quot;Monorepo&quot;">​</a></h2><blockquote><p>Repo 是 repository 的缩写，即 Git 仓库</p></blockquote><p>Monorepo（单一代码仓库）是一种软件开发项目的版本控制管理策略，它将所有相关的代码、组件、模块和项目全部存储在一个统一的代码仓库中，而不是将它们拆分为多个独立的代码仓库</p><h3 id="monorepo-的优缺点" tabindex="-1">Monorepo 的优缺点 <a class="header-anchor" href="#monorepo-的优缺点" aria-label="Permalink to &quot;Monorepo 的优缺点&quot;">​</a></h3><ul><li>优点：</li></ul><ol><li>代码和资源复用 各个子包之间可以轻松地共享代码、工具类、组件等资源，有助于减少代码冗余，提高代码的复用性</li><li>一致的版本管理 可以统一管理所有项目的版本号，确保它们之间的兼容性，而不会出现不同仓库之间的版本冲突</li><li>集中的构建和部署 可以设置统一的构建和部署流程，减少了配置和管理的复杂性，这有助于确保所有项目的构建和部署方式保持一致</li><li>便于协作 促进了跨项目的协作，开发团队可以更容易地查看、修改和协作各个项目</li><li>更好的项目管理 通过单一代码仓库，项目管理变得更加直观。您可以使用版本控制系统的分支和标签来管理不同的项目或版本，从而简化了项目的追踪和管理</li><li>测试和集成更容易 更轻松地进行整体测试和集成测试，不需要跨多个仓库协调测试</li></ol><ul><li>缺点：</li></ul><ol><li>仓库大小增长 随着项目的增多，可能会导致仓库变得庞大且难以管理从而需要额外的存储和维护成本</li><li>构建时间增加 由于存在多个项目，当构建整个项目时可能需要更长的时间，尤其是当只有部分项目发生更改时</li><li>依赖管理复杂性 多个项目依赖于相同的第三方库时可能会导致依赖管理的复杂性，在确保所有项目都使用相同的依赖版本需要额外的努力</li><li>分支管理复杂性 管理多个项目的分支和合并请求可能会变得复杂，需要谨慎的规划和流程</li></ol><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── .git</span></span>
<span class="line"><span style="color:#A6ACCD;">├── packages</span></span>
<span class="line"><span style="color:#A6ACCD;">│   ├── package-1                   # 子包 1</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   ├── src</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   │   └── index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│   │   └── package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">│   └── package-2                   # 子包 2</span></span>
<span class="line"><span style="color:#A6ACCD;">│       ├── src</span></span>
<span class="line"><span style="color:#A6ACCD;">│       │   └── index.js</span></span>
<span class="line"><span style="color:#A6ACCD;">│       └── package.json</span></span>
<span class="line"><span style="color:#A6ACCD;">└── package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>pnpm 支持</p>`,11),o=[p];function r(i,c,t,m,d,b){return n(),a("div",null,o)}const A=s(l,[["render",r]]);export{C as __pageData,A as default};
