/**
 * 本JS檔存放位置由 WFU BLOG 提供
 *
 * JS檔主程式出自新同文堂：http://tongwen.openfoundry.org/
 * 消息來源：http://hi.baidu.com/%CE%B5%C7%E5%D4%C2/blog/item/bf6b79d31fc49b289a5027ed.html
 * 欲編輯、修改本程式，記得儲存的格式要選 unicode。
 *
 * WFU Blog : http://wayne-fu.blogspot.com/
 */
/** 此 JS 檔經過修改 (https://github.com/mollykannn/translate-big5-gbk.git) ** */
/**
 * Simplified Chinese 簡體化
 *
 * @example
 *   const text = tify('星際2職業選手')
 *
 *   expect(text).toBe('星际2职业选手')
 */
export declare function sify(text?: null | string): string;

/**
 * 本JS檔存放位置由 WFU BLOG 提供
 *
 * JS檔主程式出自新同文堂：http://tongwen.openfoundry.org/
 * 消息來源：http://hi.baidu.com/%CE%B5%C7%E5%D4%C2/blog/item/bf6b79d31fc49b289a5027ed.html
 * 欲編輯、修改本程式，記得儲存的格式要選 unicode。
 *
 * WFU Blog : http://wayne-fu.blogspot.com/
 */
/** 此 JS 檔經過修改 (https://github.com/mollykannn/translate-big5-gbk.git) ** */
/**
 * Traditional Chinese 繁體化
 *
 * @example
 *   const text = tify('星际2职业选手')
 *
 *   expect(text).toBe('星際2職業選手')
 */
export declare function tify(text?: null | string): string;

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
export declare const tifyJson: <T>(text: T) => T;

export { }
