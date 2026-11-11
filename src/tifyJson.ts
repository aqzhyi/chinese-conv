import { tify } from './libs/tongwen-st'

/** 把可 JSON 序列化的值（js#Array、js#Object 等）整個交給 `convert` 轉換 */
export const toJsonConvert =
  (convert: (text: string) => string) =>
  <T>(
    /** The text to be converted. */
    text: T,
  ): T => {
    return JSON.parse(convert(JSON.stringify(text)))
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
export const tifyJson = toJsonConvert(tify)
