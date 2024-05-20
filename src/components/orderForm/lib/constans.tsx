import { RequiredMarker } from '@/components/requiredMarker'

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
export const category = {
  label: (
    <>
      Категория
      <RequiredMarker />
    </>
  ),
  placeholder: 'Выбрать',
}
export const comment = {
  label: 'Комментарий',
  placeholder: 'Заполнить',
}
