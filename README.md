# About This

用於 node.js 或瀏覽器之中：簡轉繁，或繁轉簡。

# Install

> shell (node.js)

```shell
npm install chinese-conv
```

> shell (jspm for browser)

```shell
jspm install npm:chinese-conv
```

# Usage

> ES2015 (browser/node.js)

```js
import {tify, sify} from 'chinese-conv';

// 轉成正體中文
let text = tify('所谓知己知彼百战不殆，作为星际2职业选手，他们在平时练习中不仅要练好自己的本族，还会经常选择其他两个族进行练习，这样可以更加了解本族之外两个种族的运营流程、弱点、真空期等。因此不只有Flash，全世界许多职业选手都会在练习时偶尔使用下别的种族，这也是他们众多练习手段的一种。');

console.log(text);
```

> node.js

```js
var chineseConv = require('chinese-conv');

var text = chineseConv.tify('所谓知己知彼百战不殆，作为星际2职业选手，他们在平时练习中不仅要练好自己的本族，还会经常选择其他两个族进行练习，这样可以更加了解本族之外两个种族的运营流程、弱点、真空期等。因此不只有Flash，全世界许多职业选手都会在练习时偶尔使用下别的种族，这也是他们众多练习手段的一种。');

console.log(text);
```

## Output

所謂知己知彼百戰不殆，作為星際2職業選手，他們在平時練習中不僅要練好自己的本族，還會經常選擇其他兩個族進行練習，這樣可以更加了解本族之外兩個種族的運營流程、弱點、真空期等。因此不只有Flash，全世界許多職業選手都會在練習時偶爾使用下別的種族，這也是他們眾多練習手段的一種。

## Methods

#### sify(text)

轉譯成簡體中文 (to Simplified Chinese)

- @param {string} text 正體中文
- @return {string} 簡體中文

#### tify(text)

轉譯成正體中文 (to Traditional Chinese)

- @param {string} text 簡體中文
- @return {string} 繁體中文
