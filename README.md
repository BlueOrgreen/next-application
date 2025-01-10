# 3r Next 课程

- frame Next项目框架
- main

## 进度

2025/01/10 - 完成第7章学习

## Micromatch

是一个强大的 JavaScript 库，用于对字符串或路径进行模式匹配（glob 匹配）。它支持复杂的通配符、正则表达式以及多模式匹配，常用于文件匹配、过滤和路径解析等场景。

```tsx
import glob from 'micromatch';

// 示例数据
const files = [
    'src/app.js',
    'src/utils.js',
    'src/index.html',
    'test/app.test.js',
    'node_modules/package.json',
];

// 1. 匹配所有 `.js` 文件
console.log(glob(files, '**/*.js'));
// 输出: ['src/app.js', 'src/utils.js', 'test/app.test.js']

// 2. 匹配 src 文件夹下的所有文件
console.log(glob(files, 'src/**'));
// 输出: ['src/app.js', 'src/utils.js', 'src/index.html']

// 3. 匹配 test 文件夹下以 `.test.js` 结尾的文件
console.log(glob(files, 'test/*.test.js'));
// 输出: ['test/app.test.js']

// 4. 排除 `node_modules` 文件夹中的内容
console.log(glob(files, ['**', '!node_modules/**']));
// 输出: ['src/app.js', 'src/utils.js', 'src/index.html', 'test/app.test.js']

// 5. 匹配以 `app` 开头的所有文件
console.log(glob(files, '**/app*.*'));
// 输出: ['src/app.js', 'test/app.test.js']

glob.isMatch('post-edit/ded0aa66-4665-44b0-aca4-2c70ec14f272', ['post-edit/*']);
// 输出: true
```

## Prisma

```bash
# 安装prisma
pnpm i prisma@latest -D

# 初始化prisma, --datasource-provider sqlite 用于指定数据库驱动
pnpm prisma init --datasource-provider sqlite

# 生成数据库，该命令其实是用来创建并运行迁移的，但是目前我们没有模型。所以加上--skip-generate参数仅用于生成数据库
pnpm prisma migrate dev --name init --skip-generate
```

`package.json` 中设定自定的 `prisma` 模型目录为 `src/database/schema`

```json
// package.json
{
    // ...
    "prisma": {
        "schema": "src/database/schema"
    }
}
```

1. 使用 `migrate` 命令来生成数据迁移文件，这些生成的sql文件可以用来生成以及同步数据表结构

```bash
# 首先生成迁移
pnpm prisma migrate dev --create-only --skip-generate --name update
```

2. 用到push命令把修改的模型推送到表结构以使数据模型和数据表结构同步。但是，如果已经存在一个数据库，那么我们也可以使用pull命令来反向通过表结构生成模型

```bash
pnpm prisma db push
```

3. 使用 `generate` 命令生成ts类型和方法

```bash
pnpm prisma generate
```

将上面的3条命令可以直接整合为一条命令。实现生成迁移、运行迁移、生成TS三个功能

```bash
pnpm prisma migrate dev --name update
```

## Prisma studio

`prisma studio` 是一个配合 `prisma` 的在线数据库预览工具，在 `package.json` 中添加命令就可以使用它了

```json
{
    "scripts": {
        "dbo": "prisma studio"
    }
}
```
