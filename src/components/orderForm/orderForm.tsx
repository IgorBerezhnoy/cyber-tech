import { Button } from '@/components/button'
import { Checkbox } from '@/components/checkbox'
import { InputFile } from '@/components/inputFile/inputFile'
import { category, comment, fullName, rating, sum } from '@/components/orderForm/lib/constans'
import { TextField } from '@/components/textField'
import { COLOR_BLACK, FONT_WEIGHT_MEDIUM_PLUS, FONTSIZE_XXL, LINE_HEIGHT_L } from '@/variables'
import styled from 'styled-components'

export const OrderForm = () => {
  return (
    <Form>
      <Header>Заполните форму</Header>
      <TextField {...fullName} />
      <TextField {...rating} />
      <Checkbox label={'Имеется аккредитация'} />
      <TextField {...sum} />
      <TextField {...category} />
      <TextField {...comment} />

      <InputFile
        label={
          <>
            Нажмите на область или перетащите файлы сюда.
            <br />5 МБ максимальный размер <br />
            <b>Выбрать файл</b> <br />
            (pdf)
          </>
        }
        labelOutside={'Загрузите файл'}
      />
      <Button>Отправить</Button>
      <Button disabled>Отправить</Button>
    </Form>
  )
}

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
  margin: 0;
`
