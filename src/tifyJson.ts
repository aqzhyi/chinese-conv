import { tify } from '~/libs/tongwen-st'

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
export const tifyJson = <T>(
  /** The text to be converted. */
  text: T,
): T => {
  return JSON.parse(tify(JSON.stringify(text)))
}
