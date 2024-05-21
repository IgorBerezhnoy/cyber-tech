import { memo } from 'react'

import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { InputFile } from '@/components/inputFile/inputFile'
import {
  category,
  checkbox,
  comment,
  file,
  fullName,
  rating,
  sum,
} from '@/components/orderForm/lib/constans'
import { Select } from '@/components/select'
import { TextField } from '@/components/textField'
import { COLOR_BLACK, FONT_WEIGHT_MEDIUM_PLUS, FONTSIZE_XXL, LINE_HEIGHT_L } from '@/variables'
import styled from 'styled-components'

export const OrderForm = memo(() => {
  return (
    <Form>
      <Header>Заполните форму</Header>
      <TextField {...fullName} />
      <TextField {...rating} />
      <Checkbox {...checkbox} />
      <TextField {...sum} />
      <Select {...category} />
      <TextField {...comment} />
      <InputFile {...file} />
      <Button disabled>Отправить</Button>
    </Form>
  )
})

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  padding: 12px 24px 24px 24px;
  width: 450px;
  background: #edf0f3;
  border-radius: 12px;
`
const Header = styled.h1`
  font-weight: ${FONT_WEIGHT_MEDIUM_PLUS};
  font-size: ${FONTSIZE_XXL};
  line-height: ${LINE_HEIGHT_L};
  color: ${COLOR_BLACK};
  margin: 12px 0;
`
