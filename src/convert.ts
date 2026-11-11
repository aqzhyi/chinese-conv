type ConvertText = (text?: null | string) => string

// Pre-compiled regex for better performance
const CHINESE_CHAR_REGEX = /[^\x00-\xFF]/g

/**
 * 建立「逐字」的轉換函式。
 *
 * 依 `chars` 把每個非 Latin-1 字元換成對應字元；表中沒有的字元保持原樣。 非字串輸入會以 `console.error` 提示，並視為空字串。
 */
export const createCharConvert =
  (chars: Readonly<Record<string, string>>): ConvertText =>
  (text) => {
    const isString = typeof text === 'string'

    if (!isString) {
      console.error(
        'The expected text signature is undefined | null | string, but an unexpected value was passed in:',
        typeof text,
      )
    }

    const $$text = isString ? text : ''

    return $$text.replace(CHINESE_CHAR_REGEX, (char) => chars[char] ?? char)
  }

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

/** 把可 JSON 序列化的值（js#Array、js#Object 等）整個交給 `convert` 轉換 */
export const createJsonConvert =
  (convert: (text: string) => string) =>
  <T>(
    /** The text to be converted. */
    text: T,
  ): T => {
    return JSON.parse(convert(JSON.stringify(text)))
  }
