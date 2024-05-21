import { ElementRef, forwardRef } from 'react'

import CheckMarkIcon from '@/assets/icons/checkMarkIcon'
import { COLOR_MAIN, FONT_WEIGHT_NORMAL } from '@/variables'
import * as CheckboxRadix from '@radix-ui/react-checkbox'
import { CheckboxProps, CheckedState } from '@radix-ui/react-checkbox'
import styled from 'styled-components'

type CheckboxType = {
  checked?: CheckedState
  defaultChecked?: CheckedState
  id?: string
  label?: string | undefined
} & CheckboxProps

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxType>(
  ({ id = 'checkbox', label, ...rest }, ref) => {
    return (
      <Wrapper>
        <Root ref={ref} {...rest} id={id}>
          <CheckboxRadix.Indicator>
            <IconWrapper>
              <CheckMarkIcon />
            </IconWrapper>
          </CheckboxRadix.Indicator>
        </Root>
        {label && <Label htmlFor={id}>{label}</Label>}
      </Wrapper>
    )
  }
)

const Root = styled(CheckboxRadix.Root)`
  all: revert;

  cursor: pointer;

  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  border: 2px solid ${COLOR_MAIN};
  border-radius: 4px;
`
const IconWrapper = styled.span`
  background: ${COLOR_MAIN};
  width: 14px;
  height: 14px;

  border-radius: 4px;
`
const Wrapper = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;

  width: fit-content;
`
const Label = styled.label`
  margin-left: 8px;
  font-weight: ${FONT_WEIGHT_NORMAL};

  cursor: pointer;
`
