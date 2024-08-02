import { darken, readableColor } from 'polished';

export const darkenColor = (color: string, amount: number) => {
  return darken(amount / 100, color);
};

export const getReadableTextColor = (backgroundColor: string) => {
  return readableColor(backgroundColor, '#000000', '#FFFFFF', false);
};