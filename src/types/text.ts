import type { Rectangle } from "./base";

export type FontSize = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40 | 42 | 44 | 46 | 48 | 50 | 52 | 54 | 56 | 58 | 60;

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export interface TextStyle {
  bold: boolean;
  italic: boolean;
  underline: boolean;
  strikethrough: boolean;
  color: string;
  fontSize: FontSize;
  fontFamily: string;
}

export interface TextFragment {
    text: string;
    style: Partial<TextStyle>;
}

export interface RichText extends Rectangle {
  content: TextFragment | TextFragment[]; // 富文本片段
  maxLength?: number; // 最大长度限制
}
