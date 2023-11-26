## Monorepo

> Repo 是 repository 的缩写，即 Git 仓库

Monorepo（单一代码仓库）是一种软件开发项目的版本控制管理策略，它将所有相关的代码、组件、模块和项目全部存储在一个统一的代码仓库中，而不是将它们拆分为多个独立的代码仓库

### Monorepo 的优缺点

- 优点：

1. 代码和资源复用 各个子包之间可以轻松地共享代码、工具类、组件等资源，有助于减少代码冗余，提高代码的复用性
2. 一致的版本管理 可以统一管理所有项目的版本号，确保它们之间的兼容性，而不会出现不同仓库之间的版本冲突
3. 集中的构建和部署 可以设置统一的构建和部署流程，减少了配置和管理的复杂性，这有助于确保所有项目的构建和部署方式保持一致
4. 便于协作 促进了跨项目的协作，开发团队可以更容易地查看、修改和协作各个项目
5. 更好的项目管理 通过单一代码仓库，项目管理变得更加直观。您可以使用版本控制系统的分支和标签来管理不同的项目或版本，从而简化了项目的追踪和管理
6. 测试和集成更容易 更轻松地进行整体测试和集成测试，不需要跨多个仓库协调测试

- 缺点：

1. 仓库大小增长 随着项目的增多，可能会导致仓库变得庞大且难以管理从而需要额外的存储和维护成本
2. 构建时间增加 由于存在多个项目，当构建整个项目时可能需要更长的时间，尤其是当只有部分项目发生更改时
3. 依赖管理复杂性 多个项目依赖于相同的第三方库时可能会导致依赖管理的复杂性，在确保所有项目都使用相同的依赖版本需要额外的努力
4. 分支管理复杂性 管理多个项目的分支和合并请求可能会变得复杂，需要谨慎的规划和流程

### 目录结构

```
.
├── .git
├── packages
│   ├── package-1                   # 子包 1
│   │   ├── src
│   │   │   └── index.js
│   │   └── package.json
│   └── package-2                   # 子包 2
│       ├── src
│       │   └── index.js
│       └── package.json
└── package.json
```

pnpm 支持