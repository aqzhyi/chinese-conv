import { createCharConvert, createJsonConvert } from './convert.ts'
import { s2tChars } from './dict/s2t-char.ts'
import { t2sChars } from './dict/t2s-char.ts'

const convertS2t = /* @__PURE__ */ createCharConvert(s2tChars)
const convertT2s = /* @__PURE__ */ createCharConvert(t2sChars)

/**
 * Traditional Chinese 繁體化
 *
 * @example
 *   const text = tify('星际2职业选手')
 *
 *   expect(text).toBe('星際2職業選手')
 */
export function tify(text?: null | string): string {
  return convertS2t(text)
}

/**
 * Simplified Chinese 簡體化
 *
 * @example
 *   const text = sify('星際2職業選手')
 *
 *   expect(text).toBe('星际2职业选手')
 */
export function sify(text?: null | string): string {
  return convertT2s(text)
}

/**
 * Traditional Chinese 繁體化
 *
 * @example
 *   const chsAsArray = [
 *     '所谓知己知彼百战不殆',
 *     '作为星际2职业选手',
 *     '他们在平时练习中不仅要练好自己的本族',
 *     '还会经常选择其他两个族进行练习',
 *   ]
 *   const chtAsArray = [
 *     '所謂知己知彼百戰不殆',
 *     '作為星際2職業選手',
 *     '他們在平時練習中不僅要練好自己的本族',
 *     '還會經常選擇其他兩個族進行練習',
 *   ]
 *
 *   expect(tifyJson(chsAsArray)).toEqual(chtAsArray)
 */
export const tifyJson = /* @__PURE__ */ createJsonConvert(tify)
