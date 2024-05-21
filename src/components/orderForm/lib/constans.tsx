import { RequiredMarker } from '@/components/requiredMarker'
import { COLOR_GRAY } from '@/variables'
import styled from 'styled-components'

export const fullName = {
  label: (
    <>
      ФИО
      <RequiredMarker />
    </>
  ),
  placeholder: 'Заполнить',
}
export const rating = {
  label: (
    <>
      Рейтинг
      <RequiredMarker />
    </>
  ),
  placeholder: 'Введите значение от 1 до 100',
  type: 'number',
}
export const sum = {
  label: (
    <>
      Желаемая сумма
      <RequiredMarker />
    </>
  ),
  placeholder: '0',
  type: 'number',
}

export const comment = {
  label: 'Комментарий',
  placeholder: 'Заполнить',
}
export const checkbox = {
  label: 'Имеется аккредитация',
}
const Span = styled.span`
  color: ${COLOR_GRAY};
`

export const category = {
  label: (
    <>
      Категория
      <RequiredMarker />
    </>
  ),
  options: [
    { title: 'Категория 1', value: '1' },
    { title: 'Категория 2', value: '2' },
    { title: 'Категория 3', value: '3' },
    { title: 'Категория 4', value: '4' },
    { title: 'Категория 5', value: '5' },
  ],
  placeholder: <Span>Выбрать</Span>,
}
export const file = {
  label: (
    <>
      Нажмите на область или перетащите файлы сюда.
      <br />5 МБ максимальный размер <br />
      <b>Выбрать файл</b> <br />
      (pdf)
    </>
  ),
  labelOutside: 'Загрузить файл',
}
