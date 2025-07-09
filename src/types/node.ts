import type { Direction, Rectangle, Size } from "./base";
import type { ConnectionShape, StrokeType, StrokeWidth } from "./connection";
import type { RichText } from "./text";

// 节点类型
export type NodeType = 'root' | 'main' | 'sub' | 'floating';

export type NodeShape = 
  | 'none'
  | 'rounded-rect'
  | 'rectangle'
  | 'ellipse'
  | 'ellipse-rect'
  | 'underline'
  | 'diamond'
  | 'circle'
  | 'parallelogram'
  | 'hexagon'
  | 'rounded-hexagon'
  | 'elliptic-rect'
  | 'single-breakangle'
  | 'double-underline'
  | 'stack'
  | 'bookmark'
  | 'cloud'
  | 'cut-diamond'
  | 'drop'
  | 'heart'
  | 'label'
  | 'left-arrow'
  | 'right-arrow'
  | 'shield'
  | 'star'
  | 'punctuation-angle-brackets'
  | 'punctuation-brace'
  | 'punctuation-double-duotes'
  | 'punctuation-french-quotes'
  | 'punctuation-parentheses'
  | 'punctuation-square-brackets'
  | 'punctuation-square-quotes';

export interface NodeIcon extends Rectangle {
  value: string;
}

export interface Tag extends Rectangle {
  size: Size
  text: string
}

// 代办
export interface NodeTodo extends Rectangle {
  checked: boolean
}

export type NodeNumberType = 
  | 'number'
  | 'parenthesized-number'
  | 'circled-number'
  | 'alphabet'
  | 'alphabet-upper'
  | 'roman'
  | 'roman-upper'
  | 'chinese';

export interface NodeNumber extends Rectangle {
  type: NodeNumberType
  value: number
}

export type ImageType = 'svg' | 'url'

export interface ImageAttachment extends Rectangle {
  type: ImageType
  url: string
}

export interface LinkAttachment extends Rectangle {
  url: string
}

export interface ConnectionConfig {
  shape: ConnectionShape
  stroke: string
  strokeWidth: StrokeWidth
  strokeType: StrokeType
}

export interface MindMapNode extends Rectangle {
  id: string
  type: NodeType

  // 内容
  richText: RichText

  // 层级关系
  parentId?: string
  children: string[]
  secondLevelAncestorId?: string; // 第二层祖先节点id，用于继承颜色
  siblingIndex: number // 在同级节点中的索引
  level: number // 节点层级（0=根节点，1=第一层，2=第二层...）
  themeColor?: string // 主题颜色，用于继承

  // 状态
  collapsed: boolean
  selected: boolean
  editing: boolean
  expandDirection: Direction // 子节点扩展方向

  // 分支配置
  connectionConfig: ConnectionConfig

  // 扩展
  tags: Tag[]
  icons: NodeIcon[]
  image?: ImageAttachment
  link?: LinkAttachment
  boundaryId?: string
  summaryId?: string
  number?: NodeNumber
  todo?: NodeTodo
}