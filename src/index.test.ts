import { describe, expect, it, vi } from 'vitest'
import * as entry from './index.ts'
import { sify, tify, tifyJson } from './index.ts'

describe('主入口公開面', () => {
  it('只匯出 sify、tify、tifyJson', () => {
    expect(Object.keys(entry).sort()).toEqual(['sify', 'tify', 'tifyJson'])
  })

  it('是逐字版：不做詞組判斷與地區用詞轉換', () => {
    expect(tify('他的头发很干燥')).toBe('他的頭發很干燥')
    expect(tify('软件')).toBe('軟件')
    expect(sify('乾隆皇帝的軟體')).toBe('干隆皇帝的软体')
  })
})

describe('簡繁轉換', () => {
  it('Handling js#array.', () => {
    const chsAsArray = [
      '所谓知己知彼百战不殆',
      '作为星际2职业选手',
      '他们在平时练习中不仅要练好自己的本族',
      '还会经常选择其他两个族进行练习',
    ]
    const chtAsArray = [
      '所謂知己知彼百戰不殆',
      '作為星際2職業選手',
      '他們在平時練習中不僅要練好自己的本族',
      '還會經常選擇其他兩個族進行練習',
    ]

    expect(tifyJson(chsAsArray)).toEqual(chtAsArray)
  })
  it('Handling js#object.', () => {
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
  })

  it('錯誤處理', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})
    let expectedCallTimes = 0

    // @ts-expect-error - Testing intentional type mismatch
    expect(() => tify({})).not.toThrowError()
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('expected text signature'),
      expect.anything(),
    )
    expect(consoleErrorSpy).toBeCalledTimes(++expectedCallTimes)

    // @ts-expect-error - Testing intentional type mismatch
    expect(() => tify([])).not.toThrowError()
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('expected text signature'),
      expect.anything(),
    )
    expect(consoleErrorSpy).toBeCalledTimes(++expectedCallTimes)

    // @ts-expect-error - Testing intentional type mismatch
    expect(() => tify(new Set())).not.toThrowError()
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('expected text signature'),
      expect.anything(),
    )
    expect(consoleErrorSpy).toBeCalledTimes(++expectedCallTimes)

    // @ts-expect-error - Testing intentional type mismatch
    expect(() => tify(new Map())).not.toThrowError()
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('expected text signature'),
      expect.anything(),
    )
    expect(consoleErrorSpy).toBeCalledTimes(++expectedCallTimes)

    // @ts-expect-error - Testing intentional type mismatch
    expect(() => tify(new (class Foo {})())).not.toThrowError()
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('expected text signature'),
      expect.anything(),
    )
    expect(consoleErrorSpy).toBeCalledTimes(++expectedCallTimes)

    // @ts-expect-error - Testing intentional type mismatch
    expect(() => tify(123)).not.toThrowError()
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      expect.stringContaining('expected text signature'),
      expect.anything(),
    )
    expect(consoleErrorSpy).toBeCalledTimes(++expectedCallTimes)

    consoleErrorSpy.mockRestore()

    //
    // 以下這裡遵照 ^1 和 ^2 的行為
    expect(tify(undefined)).toBe('')
    expect(tify(null)).toBe('')
  })

  it('簡 -> 繁', () => {
    let text = ''

    text = tify(
      '所谓知己知彼百战不殆，作为星际2职业选手，他们在平时练习中不仅要练好自己的本族，还会经常选择其他两个族进行练习',
    )
    expect(text).toBe(
      '所謂知己知彼百戰不殆，作為星際2職業選手，他們在平時練習中不僅要練好自己的本族，還會經常選擇其他兩個族進行練習',
    )

    text = tify(
      '所謂知己知彼百戰不殆，作為星際2職業選手，他們在平時練習中不僅要練好自己的本族，還會經常選擇其他兩個族進行練習',
    )
    expect(text).toBe(
      '所謂知己知彼百戰不殆，作為星際2職業選手，他們在平時練習中不僅要練好自己的本族，還會經常選擇其他兩個族進行練習',
    )
  })

  it('繁 -> 簡', () => {
    let text = ''

    text = sify(
      '所謂知己知彼百戰不殆，作為星際2職業選手，他們在平時練習中不僅要練好自己的本族，還會經常選擇其他兩個族進行練習',
    )
    expect(text).toBe(
      '所谓知己知彼百战不殆，作为星际2职业选手，他们在平时练习中不仅要练好自己的本族，还会经常选择其他两个族进行练习',
    )

    text = sify(
      '所谓知己知彼百战不殆，作为星际2职业选手，他们在平时练习中不仅要练好自己的本族，还会经常选择其他两个族进行练习',
    )
    expect(text).toBe(
      '所谓知己知彼百战不殆，作为星际2职业选手，他们在平时练习中不仅要练好自己的本族，还会经常选择其他两个族进行练习',
    )
  })
})
