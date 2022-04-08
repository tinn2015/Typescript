<!--
 * @Creater: douqiting
 * @Date: 2021-05-28 11:17:23
 * @LastEditTime: 2022-04-07 17:45:32
 * @FilePath: /Typescript/readme.md
-->
[Ts基础](https://juejin.cn/post/6844904182843965453
# 一些区别
## 1. interface VS type
[interface VS type](https://juejin.cn/post/6844903749501059085)
* interface: 只能用于表示function，object，class，还可以合并申明
* type: 除了上述外，还可以声明基本类型别名，联合类型，元组等类型

## implements VS extends
## class protected VS private

## namespace VS module
* 不是ts编写的库， 可以用namespace声明
* 模块除了可以声明类型还可以声明它的依赖，模块会把依赖添加到模块加载器上

# module
* ts模块具有自己的作用域, 模块内只有导出的生命才会在模块外部可见

## 模块的导入
```ts
// 模块的导入规则， 先查找当前目录下的.ts, .tsx, .d.ts, 都找不到时编译器会查找外部模块声明

import x from "..."
// 或
import x = require("...")
```

```ts
// 也可以通过/// 执行外来模快的位置

/// <reference path="myModules.d.ts" />
import * as m from "SomeModule";
```

## export =
改语法是为了兼容commonJS的exports语法
export = 需要用import = require()来导入
```ts
export = CodeValidator

import codeValidator = require('')
```

## 特定条件下才加载某个模块
```js
if (needZipValidation) {
    require(["./ZipCodeValidator"], (ZipCodeValidator: typeof Zip) => {
        let validator = new ZipCodeValidator.ZipCodeValidator();
        if (validator.isAcceptable("...")) { /* ... */ }
    });
}

```

## 外部模块
```ts
declare module "url" {
  export interfece name {
    ...
  }
  export function () {}: void
}
```


## 范型工具类型
1.Partial、Required、Readonly、Record 和 ReturnType 

