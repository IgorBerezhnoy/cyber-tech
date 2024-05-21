import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { COLOR_GRAY_LIGHT } from '@/variables'
import * as SelectRadix from '@radix-ui/react-select'
import styled from 'styled-components'

export type SelectItemProps = {
  children: ReactNode
  className?: string
} & ComponentPropsWithoutRef<typeof SelectRadix.Item>

export const SelectItem = ({ children, className, ...props }: SelectItemProps) => {
  return (
    <Item {...props}>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </Item>
  )
}
const Item = styled(SelectRadix.Item)`
  width: 402px;
  padding: 12px;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${COLOR_GRAY_LIGHT};
  }

  &:focus {
    background: ${COLOR_GRAY_LIGHT};
  }
`
