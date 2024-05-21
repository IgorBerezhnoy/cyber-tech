import { memo, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { FinalSum } from '@/components/finalSum'
import {
  category,
  comment,
  file,
  fullName,
  isAccreditation,
  rating,
  sum,
} from '@/components/orderForm/lib/constans'
import { ControlledCheckbox } from '@/controlled/controlledCheckbox'
import { ControlledInputFile } from '@/controlled/controlledInputFile'
import { ControlledTextField } from '@/controlled/controlledTextField'
import { ControlledSelect } from '@/controlled/сontrolledSelect/сontrolledSelect'
import { formatNumber } from '@/utils'
import { SchemaOrderType, schemaOrder } from '@/utils/validators'
import { COLOR_BLACK, FONT_WEIGHT_MEDIUM_PLUS, FONTSIZE_XXL, LINE_HEIGHT_L } from '@/variables'
import { zodResolver } from '@hookform/resolvers/zod'
import styled from 'styled-components'

export const OrderForm = memo(() => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SchemaOrderType>({
    resolver: zodResolver(schemaOrder),
  })
  const [finalSum, setFinalSum] = useState('0')
  const onSubmitHandler = handleSubmit((data: SchemaOrderType) => {
    if (data.sum) {
      setFinalSum(formatNumber(+data.sum * 1.2))
    }
    alert('Форма успешно отправлена')
  })

  return (
    <Form onSubmit={onSubmitHandler}>
      <Header>Заполните форму</Header>
      <ControlledTextField control={control} {...fullName} />
      <ControlledTextField control={control} {...rating} />
      <ControlledCheckbox control={control} {...isAccreditation} />
      <ControlledTextField control={control} {...sum} />
      <ControlledSelect control={control} {...category} />
      <ControlledTextField control={control} {...comment} />
      <ControlledInputFile control={control} {...file} />
      <FinalSum finalSum={finalSum} />
      <Button disabled={Object.keys(errors).length > 0}>Отправить</Button>
    </Form>
  )
})

const Form = styled.form`
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
