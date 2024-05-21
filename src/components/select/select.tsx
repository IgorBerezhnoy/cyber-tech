import { ComponentPropsWithoutRef, ReactNode, memo, useState } from 'react'

import DownArrowIcon from '@/assets/icons/DownArrowIcon'
import UpArrowIcon from '@/assets/icons/UpArrowIcon'
import { SelectItem } from '@/components/select/selectItem'
import {
  COLOR_BLACK,
  COLOR_GRAY,
  COLOR_GRAY_LIGHT_SECOND,
  COLOR_MAIN,
  COLOR_WHITE,
  FONT_FAMILY,
  FONT_WEIGHT_MEDIUM_PLUS,
  FONT_WEIGHT_NORMAL,
  FONTSIZE_L,
  FONTSIZE_M,
  LINE_HEIGHT_M,
} from '@/variables'
import * as SelectRadix from '@radix-ui/react-select'
import styled from 'styled-components'

export type OptionsValue = {
  title: string
  value: string
}

export type SelectProps = {
  label?: ReactNode
  options?: OptionsValue[]
  placeholder?: ReactNode
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = memo(({ label, options, placeholder }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      {label && <Label>{label}</Label>}
      <SelectRadix.Root onOpenChange={setIsOpen}>
        <Trigger>
          <Value placeholder={placeholder} />
          <SelectRadix.Icon>{isOpen ? <UpArrowIcon /> : <DownArrowIcon />}</SelectRadix.Icon>
        </Trigger>
        <SelectRadix.Portal>
          <Content position={'popper'}>
            <Viewport>
              <SelectRadix.Group>
                {options?.map(option => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.title}
                  </SelectItem>
                ))}
              </SelectRadix.Group>
            </Viewport>
          </Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
})
const Label = styled.div`
  font-size: ${FONTSIZE_M};
  line-height: ${LINE_HEIGHT_M};
  color: ${COLOR_GRAY};
  font-weight: ${FONT_WEIGHT_MEDIUM_PLUS};
  margin-bottom: 4px;
`

const Content = styled(SelectRadix.Content)`
  margin-top: 4px;
`
const Trigger = styled(SelectRadix.Trigger)`
  width: 100%;
  font-size: ${FONTSIZE_L};
  height: 44px;
  border: none;
  border-radius: 6px;
  padding: 10px 12px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT_NORMAL};
  color: ${COLOR_BLACK};
  background: ${COLOR_GRAY_LIGHT_SECOND};
  display: flex;
  justify-content: space-between;

  &:focus-visible {
    background: ${COLOR_WHITE};
    outline: 1px solid ${COLOR_MAIN};
  }
`

const Viewport = styled(SelectRadix.Viewport)`
  box-shadow: 0px 6px 26px rgba(66, 84, 112, 0.14);
  width: 100%;
  border-radius: 6px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT_NORMAL};
  color: ${COLOR_BLACK};
  background: ${COLOR_GRAY_LIGHT_SECOND};
`
const Value = styled(SelectRadix.Value)`
  color: red;
`
