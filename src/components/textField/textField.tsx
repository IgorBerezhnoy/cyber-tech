import React, { DetailedHTMLProps, ElementRef, InputHTMLAttributes, forwardRef } from 'react'

import {
  COLOR_BLACK,
  COLOR_GRAY,
  COLOR_GRAY_LIGHT,
  COLOR_MAIN,
  COLOR_RED,
  COLOR_WHITE,
  FONT_FAMILY,
  FONT_WEIGHT_MEDIUM_PLUS,
  FONT_WEIGHT_NORMAL,
  FONTSIZE_L,
  FONTSIZE_M,
  LINE_HEIGHT_M,
} from '@/style/variables'
import styled from 'styled-components'

export interface TextFieldProps
  extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  classNameWrapper?: string
  errorMessage?: string
  label?: React.ReactNode
}

export const TextField = forwardRef<ElementRef<'input'>, TextFieldProps>(
  ({ className, classNameWrapper, disabled, errorMessage, label, ...rest }, ref): JSX.Element => {
    return (
      <Wrapper
        className={`${classNameWrapper} ${disabled ? 'disabled' : ''} ${
          errorMessage ? 'error' : ''
        }`}
      >
        {label && <Label className={disabled ? 'disabled' : ''}>{label}</Label>}
        <Input className={className} disabled={disabled} {...rest} ref={ref} />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Wrapper>
    )
  }
)

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Label = styled.label`
  font-size: ${FONTSIZE_M};
  line-height: ${LINE_HEIGHT_M};
  color: ${COLOR_GRAY};
  font-weight: ${FONT_WEIGHT_MEDIUM_PLUS};
`

const Input = styled.input`
  font-size: ${FONTSIZE_L};
  height: 44px;
  border: none;
  border-radius: 6px;
  padding: 10px 12px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT_NORMAL};
  color: ${COLOR_BLACK};
  background: ${COLOR_GRAY_LIGHT};

  &:focus-visible {
    background: ${COLOR_WHITE};
    outline: 1px solid ${COLOR_MAIN};
  }

  &::placeholder {
    color: ${COLOR_GRAY};
  }
`

const ErrorMessage = styled.div`
  font-size: ${FONTSIZE_M};
  color: ${COLOR_RED};
  line-height: ${LINE_HEIGHT_M};
`
