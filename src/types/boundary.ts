import type { BorderType, Rectangle } from "./base"
import type { StrokeWidth } from "./connection"
import type { RichText } from "./text"

export type BoundaryShape = 
  | 'none' 
  | 'rectangle' 
  | 'rounded-rectangle' 
  | 'arrow' // 箭头
  | 'cloud' // 云朵
  | 'pattern' // 花纹
  | 'sawtooth' // 锯齿
  | 'water' // 水滴
  | 'view-finder' // 取景框
  | 'fence' // 栅栏

export interface Boundary extends Rectangle {
  id: string
  text: RichText

  //形状
  shape: BoundaryShape
  fillMode: FillMode
  fill: string

  // 边框
  border: BorderType
  strokeWidth: StrokeWidth
  borderStroke: string
}