type ConvertText = (text?: null | string) => string

/**
 * 建立「詞組優先」的轉換函式。
 *
 * 從左到右掃描，每個位置優先比對最長的詞組；沒有詞組命中的片段，交給 `convertChar` 逐字轉換。 比對規則與 tongwen-core 的 `convertPhrase`
 * 相同（正向最長比對）。
 *
 * 非字串輸入直接交給 `convertChar`，錯誤處理與逐字轉換一致。
 */
export const createPhraseConvert = (
  phrases: Readonly<Record<string, string>>,
  convertChar: ConvertText,
): ConvertText => {
  const dict = new Map(Object.entries(phrases))
  const lengthsByFirst = groupLengthsByFirst([...dict.keys()])

  const findLongest = (text: string, index: number): string | undefined => {
    const lengths = lengthsByFirst.get(text.charAt(index)) ?? []

    return lengths.map((length) => text.slice(index, index + length)).find((part) => dict.has(part))
  }

  return (text) => {
    if (typeof text !== 'string') {
      return convertChar(text)
    }

    let result = ''
    let pending = 0
    let index = 0

    while (index < text.length) {
      const phrase = findLongest(text, index)

      if (phrase === undefined) {
        index++
        continue
      }

      result += convertChar(text.slice(pending, index)) + dict.get(phrase)
      index += phrase.length
      pending = index
    }

    return result + convertChar(text.slice(pending))
  }
}

/** 以詞組首字分組，列出該首字所有詞組長度（由長到短） */
const groupLengthsByFirst = (keys: readonly string[]): ReadonlyMap<string, readonly number[]> => {
  const grouped = new Map<string, Set<number>>()

  for (const key of keys) {
    const lengths = grouped.get(key.charAt(0)) ?? new Set()
    grouped.set(key.charAt(0), lengths.add(key.length))
  }

  return new Map(
    [...grouped].map(([first, lengths]) => [first, [...lengths].sort((a, b) => b - a)]),
  )
}
