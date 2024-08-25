# About This

Simplified to traditional, or traditional to simplified.

簡轉繁，或繁轉簡。

# Install

`bun add chinese-conv -S`

or

`pnpm add chinese-conv -S`

, etc..

# Usage

> ESNext

```ts
import { tify, sify } from 'chinese-conv'

// 正體中文化
const text = tify(
  '所谓知己知彼百战不殆，作为星际2职业选手，他们在平时练习中不仅要练好自己的本族，还会经常选择其他两个族进行练习，这样可以更加了解本族之外两个种族的运营流程、弱点、真空期等。因此不只有Flash，全世界许多职业选手都会在练习时偶尔使用下别的种族，这也是他们众多练习手段的一种。',
)
```

# Methods

## tify 繁體化

![](./static/tify-jsdoc.png)

## sify 簡體化

![](./static/sify-jsdoc.png)
