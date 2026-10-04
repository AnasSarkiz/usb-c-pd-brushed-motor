import {
  glyphLineAlphabet,
  glyphAdvanceRatio,
  kerningRatio,
  textMetrics,
} from "@tscircuit/alphabet"
export interface Bounds {
  left: number
  right: number
  bottom: number
  top: number
}
export function inkBounds({
  text,
  fontSize,
  x,
  y,
}: {
  text: string
  fontSize: number
  x: number
  y: number
}): Bounds {
  let cursor = 0
  const points: { x: number; y: number }[] = []
  const characters = Array.from(text)
  for (const [index, character] of characters.entries()) {
    for (const line of glyphLineAlphabet[character] ?? [])
      points.push(
        { x: cursor + line.x1 * fontSize, y: line.y1 * fontSize },
        { x: cursor + line.x2 * fontSize, y: line.y2 * fontSize },
      )
    cursor +=
      fontSize *
      ((glyphAdvanceRatio[character] ?? textMetrics.spaceWidthRatio) +
        (kerningRatio[character]?.[characters[index + 1]] ?? 0))
  }
  if (!points.length) throw new Error(`No ink for ${text}`)
  const width =
    Math.max(...points.map((p) => p.x)) -
    Math.min(...points.map((p) => p.x)) +
    fontSize * textMetrics.strokeWidthRatio
  const height =
    Math.max(...points.map((p) => p.y)) -
    Math.min(...points.map((p) => p.y)) +
    fontSize * textMetrics.strokeWidthRatio
  return {
    left: x - width / 2,
    right: x + width / 2,
    bottom: y - height / 2,
    top: y + height / 2,
  }
}
