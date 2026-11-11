<p align="center">
  <img src="assets/logo.webp" alt="chinese-conv logo" align="center" width="144" height="144">
</p>
<p align="center"><h1 align="center">CHINESE-CONV</h1></p>
<p align="center">
  <em><code>$ <b>pnpm add chinese-conv</b> 無依賴的 簡繁轉換工具</code></em>
</p>
<p align="center">
  <img src="https://img.shields.io/github/license/aqzhyi/chinese-conv?style=for-the-badge&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
  <img src="https://img.shields.io/npm/v/chinese-conv?style=for-the-badge&logo=npm&logoColor=white&label=npm&color=brightgreen" alt="npm-version">
  <img src="https://img.shields.io/badge/dependencies-0-4a4a4a?style=for-the-badge&logo=npm&logoColor=f69220&color=brightgreen" alt="repo-dependencies-count">
  <img src="https://img.shields.io/bundlephobia/minzip/chinese-conv?style=for-the-badge&logo=npm&logoColor=f69220&label=Gzipped&color=brightgreen" alt="repo-gzip-size">
</p>

> [!NOTE]
>
> 我就懶，無依賴的，簡繁轉換解決方案。
>
> Zero dependencies, converting simplified to traditional and traditional to simplified

---

> [!IMPORTANT]
>
> 主入口 `chinese-conv` 單純地一對一字符，字典互換，並且字典年代久遠窩都沒有更新
>
> 但這包窩私人偶爾會使用，我需求不多，堪用了
>
> 需要「头发 → 頭髮」這類一字多義、或「软件 → 軟體」這類地區用詞時，改用 [`chinese-conv/phrase`](#chinese-convphrase-詞組優先含地區用詞)
>
> 如果你需要更完整的「異體字轉換、地區習慣用詞轉換」 請參考 OpenCC 官方列出的套件：
>
> - [opencc](https://www.npmjs.com/package/opencc)：Node.js 原生模組，沒有預先編譯版本的平台會在安裝時從原始碼編譯
> - [opencc-js](https://www.npmjs.com/package/opencc-js)：純 JavaScript，可在瀏覽器使用
> - [opencc-wasm](https://www.npmjs.com/package/opencc-wasm)：WebAssembly 版本

> [!IMPORTANT]
>
> the main entry `chinese-conv` is just a simple one-to-one character swap, and the dictionary hasn't been updated for a long time
>
> but this private space is used occasionally, I don't need much, it's enough
>
> for phrase-aware conversion (e.g. `头发 → 頭髮`) and regional terms (e.g. `软件 → 軟體`), use [`chinese-conv/phrase`](#chinese-convphrase-詞組優先含地區用詞)
>
> if you need more complete "variant character conversion and regional term conversion," please refer to the packages listed by OpenCC:
>
> - [opencc](https://www.npmjs.com/package/opencc): Node.js native addon, built from source on install where no prebuilt binary exists
> - [opencc-js](https://www.npmjs.com/package/opencc-js): pure JavaScript, works in browsers
> - [opencc-wasm](https://www.npmjs.com/package/opencc-wasm): WebAssembly build

---

# Demo

- [stackblitz.com / chinese-conv@^3](https://stackblitz.com/edit/nextjs-zvncq15h?file=app%2Fpage.js)

- [stackblitz.com / chinese-conv@^4](https://stackblitz.com/edit/nextjs-lfut4ymf?file=app%2Fpage.js)

- [stackblitz.com / chinese-conv@^4.1.0](https://stackblitz.com/edit/nextjs-rasmfd9y?file=app%2Fpage.js)

# Install

```sh
# pnpm
pnpm add chinese-conv

# or..
deno add npm:chinese-conv
bun add chinese-conv
yarn add chinese-conv
npm add chinese-conv
```

# Usage

```ts
// ESM
import { tify, sify, tifyJson } from 'chinese-conv'

// 詞組優先（含地區用詞），函式名稱與用法相同
import { tify, sify, tifyJson } from 'chinese-conv/phrase'
```

# Methods

## tifyJson 繁體化整個 js#Array 或 js#Object

```ts
import { tifyJson } from 'chinese-conv'

const chsAsObject = {
  text1: '所谓知己知彼百战不殆',
  text2: '作为星际2职业选手',
  text3: '他们在平时练习中不仅要练好自己的本族',
  text4: '还会经常选择其他两个族进行练习',
}
const chtAsObject = {
  text1: '所謂知己知彼百戰不殆',
  text2: '作為星際2職業選手',
  text3: '他們在平時練習中不僅要練好自己的本族',
  text4: '還會經常選擇其他兩個族進行練習',
}

expect(tifyJson(chsAsObject)).toEqual(chtAsObject)
```

## tify 繁體化字串

```ts
import { tify, sify } from 'chinese-conv'

// 正體中文化
const text = tify(
  '所谓知己知彼百战不殆，作为星际2职业选手，他们在平时练习中不仅要练好自己的本族，还会经常选择其他两个族进行练习，这样可以更加了解本族之外两个种族的运营流程、弱点、真空期等。因此不只有Flash，全世界许多职业选手都会在练习时偶尔使用下别的种族，这也是他们众多练习手段的一种。',
)
```

## sify 簡體化字串

```ts
import { tify, sify } from 'chinese-conv'

// 簡體中文化
const text = sify(
  '所謂知己知彼百戰不殆，作為星際2職業選手，他們在平時練習中不僅要練好自己的本族，還會經常選擇其他兩個族進行練習，這樣可以更加了解本族之外兩個種族的運營流程、弱點、真空期等。因此不只有Flash，全世界許多職業選手都會在練習時偶爾使用下別的種族，這也是他們眾多練習手段的一種。',
)
```

## chinese-conv/phrase 詞組優先（含地區用詞）

與主入口相同的 `tify`、`sify`、`tifyJson`，只差在 import 路徑。

從左到右掃描，每個位置優先比對最長的詞組；沒有詞組命中的文字，照主入口的字表逐字轉換。詞組表包含地區用詞，所以輸出會改寫用詞。

```ts
import { tify, sify, tifyJson } from 'chinese-conv/phrase'

tify('他的头发很干燥') // '他的頭髮很乾燥'（主入口：'他的頭發很干燥'）
tify('软件鼠标网络内存') // '軟體滑鼠網路記憶體'
sify('乾隆皇帝的軟體') // '乾隆皇帝的软件'（主入口：'干隆皇帝的软体'）

tifyJson({ text: '他的头发' }) // { text: '他的頭髮' }
```

代價：詞組表只在 import `chinese-conv/phrase` 時載入，約增加 gzip 66 KB（ESM 版）。

## 字典來源

<https://github.com/tongwentang/tongwen-dict>

`chinese-conv/phrase` 的詞組表取自 [tongwen-dict](https://www.npmjs.com/package/tongwen-dict) 1.0.2 的 `s2t-phrase.min.json`、`t2s-phrase.min.json`（MIT，授權全文見 [LICENSE-tongwen-dict](./LICENSE-tongwen-dict)），存放於 `src/libs/tongwen-dict/`。
