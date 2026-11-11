import { createPhraseConvert } from './libs/convert-phrase.ts'
import s2tPhrases from './libs/tongwen-dict/s2t-phrase.json' with { type: 'json' }
import t2sPhrases from './libs/tongwen-dict/t2s-phrase.json' with { type: 'json' }
import { tify as tifyChar } from './libs/tongwen-st.ts'
import { sify as sifyChar } from './libs/tongwen-ts.ts'
import { toJsonConvert } from './tifyJson.ts'

/**
 * Traditional Chinese 繁體化（詞組優先，含地區用詞）
 *
 * @example
 *   const text = tify('他的头发很干燥，软件')
 *
 *   expect(text).toBe('他的頭髮很乾燥，軟體')
 */
export const tify = createPhraseConvert(s2tPhrases, tifyChar)

/**
 * Simplified Chinese 簡體化（詞組優先，含地區用詞）
 *
 * @example
 *   const text = sify('乾隆皇帝的軟體')
 *
 *   expect(text).toBe('乾隆皇帝的软件')
 */
export const sify = createPhraseConvert(t2sPhrases, sifyChar)

/**
 * Traditional Chinese 繁體化整個 js#Array 或 js#Object（詞組優先，含地區用詞）
 *
 * @example
 *   expect(tifyJson({ text: '他的头发' })).toEqual({ text: '他的頭髮' })
 */
export const tifyJson = toJsonConvert(tify)
