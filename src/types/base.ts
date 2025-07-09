export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}

export interface Rectangle {
  position: Position
  size: Size
}

export interface Padding {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export type Direction = 'top' | 'right' | 'bottom' | 'left';

export type HorizontalDirection = 'left' | 'right';

export type VerticalDirection = 'top' | 'bottom';

export type Axis = 'horizontal' | 'vertical';

export type Alignment = 'start' | 'center' | 'end';

export type FillMode = 
  |'none' 
  | 'solid' 
  | 'solid-hand-drawn' // 手绘实线
  | 'diagonal-hand-drawn' // 手绘斜线
  | 'horizontal-hand-drawn' // 手绘水平
  | 'vertical-hand-drawn' // 手绘垂直

export type BorderType = 
  | 'none'
  | 'solid'
  | 'dashed'
  | 'hand-draw-solid'
  | 'hand-draw-dashed';
