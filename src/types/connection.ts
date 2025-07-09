import type { Position } from "./base"

export type StrokeType = 
  | 'solid'           // 实线 ——————————
  | 'dashed'          // 虚线 - - - - - -
  | 'dotted'          // 点线 ············
  | 'dash-dot'        // 点划线 -·-·-·-·-
  | 'dash-dot-dot'    // 双点划线 -··-··-··-
  | 'hand-draw-solid' // 手绘实线
  | 'hand-draw-dashed'// 手绘虚线

export type ConnectionShape =
  | 'rounded-elbow'
  | 'elbow'
  | 'straight'
  | 'curve'
  | 'bight'
  | 'fold'
  | 'rounded-fold'

export type ArrowType = 
  | 'none'
  |'dot'
  | 'triangle'
  | 'spearhead'
  | 'square'
  | 'diamond'
  | 'herringbone'
  | 'doublearrow'
  | 'antitriangle'
  | 'attached'
  | 'hook'

export const STROKE_WIDTH = {

  SuperThin: 1,
  Thin: 2,
  Medium: 3,
  Thick: 4,
  SuperThick: 5,
} as const

export type StrokeWidth = typeof STROKE_WIDTH[keyof typeof STROKE_WIDTH]

export interface Connection {
  shape: ConnectionShape
  endArrow: ArrowType
  startPoint: Position
  endPoint: Position
  stroke: string
  strokeWidth: StrokeWidth
  strokeType: StrokeType
}
