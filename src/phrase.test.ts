import { describe, expect, it, vi } from 'vitest'
import { sify, tify, tifyJson } from './phrase.ts'

describe('詞組優先的簡繁轉換', () => {
  it('簡 -> 繁：依詞組決定一對多字', () => {
    expect(tify('他的头发很干燥')).toBe('他的頭髮很乾燥')
    expect(tify('皇后以后')).toBe('皇后以後')
    expect(tify('干净的钟表')).toBe('乾淨的鐘錶')
    expect(tify('只有一只鸡')).toBe('只有一隻雞')
  })

  it('簡 -> 繁：詞組命中後，其餘文字照常逐字轉換', () => {
    expect(tify('头发发白')).toBe('頭髮發白')
    expect(tify('所谓知己知彼百战不殆')).toBe('所謂知己知彼百戰不殆')
    expect(tify('abc 123')).toBe('abc 123')
  })

  it('簡 -> 繁：轉換地區用詞', () => {
    expect(tify('软件鼠标网络内存')).toBe('軟體滑鼠網路記憶體')
  })

  it('繁 -> 簡：依詞組決定一對多字與地區用詞', () => {
    expect(sify('乾隆皇帝')).toBe('乾隆皇帝')
    expect(sify('著作')).toBe('著作')
    expect(sify('軟體')).toBe('软件')
    expect(sify('所謂知己知彼百戰不殆')).toBe('所谓知己知彼百战不殆')
  })

  it('tifyJson 使用詞組優先的 tify', () => {
    expect(tifyJson({ text: '他的头发', list: ['干净的钟表'] })).toEqual({
      text: '他的頭髮',
      list: ['乾淨的鐘錶'],
    })
  })

  it('錯誤處理與主入口一致', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    // @ts-expect-error - Testing intentional type mismatch
    expect(tify(123)).toBe('')
    // @ts-expect-error - Testing intentional type mismatch
    expect(sify({})).toBe('')
    expect(consoleErrorSpy).toBeCalledTimes(2)

    consoleErrorSpy.mockRestore()

    expect(tify(undefined)).toBe('')
    expect(sify(null)).toBe('')
  })
})
