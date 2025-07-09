import type { Position } from "./base"
import type { ArrowType, StrokeWidth, StrokeType } from "./connection"
import type { RichText } from "./text"

export type RelationshipShape = 'curved' | 'straight' | 'angled' | 'zigzag'

export interface Relationship {
  id: string
  source: string
  target: string
  startPoint: Position
  endPoint: Position
  startControlPoint?: Position
  endControlPoint?: Position
  startArrow: ArrowType
  endArrow: ArrowType
  text: RichText
  shape: RelationshipShape
  stroke: string
  strokeWidth: StrokeWidth
  strokeType: StrokeType
}
