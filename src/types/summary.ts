import type { Position } from "./base";
import type { StrokeType, StrokeWidth } from "./connection";

export type SummaryShape = 
  | 'elbow' 
  | 'square'
  | 'curve'
  | 'bight'
  | 'straight'

export interface Summary {
  id: string
  shape: SummaryShape
  start: Position
  end1: Position
  end2: Position
  stroke: string
  strokeWidth: StrokeWidth
  strokeType: StrokeType
  summaryNodeId: string
}