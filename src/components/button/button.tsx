import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

import { COLOR_GRAY, COLOR_MAIN, COLOR_WHITE, FONT_WEIGHT_MEDIUM, LINE_HEIGHT_L } from '@/variables'
import styled from 'styled-components'

export type ButtonStyle = {} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export const Button = ({ ...rest }: ButtonStyle) => {
  return <ButtonStyle {...rest} />
}
const ButtonStyle = styled.button`
  background: ${COLOR_MAIN};
  border: none;
  padding: 8px;
  border-radius: 40px;

  font-weight: ${FONT_WEIGHT_MEDIUM};
  line-height: ${LINE_HEIGHT_L};
  text-align: center;
  cursor: pointer;
  color: ${COLOR_WHITE};
  &:hover {
    opacity: 0.8;
  }
  &:disabled {
    background: ${COLOR_GRAY};
  }
`
