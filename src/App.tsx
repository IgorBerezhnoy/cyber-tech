import { TextField } from '@/components/textField'

function App() {
  return (
    <>
      <TextField label={'ФИО'} placeholder={'Заполнить'} />
      <TextField label={'Рейтинг'} placeholder={'Введите значение от 1 до 100'} />
      <TextField
        errorMessage={'Некорректное значение'}
        label={'Рейтинг'}
        placeholder={'Введите значение от 1 до 100'}
      />
    </>
  )
}

export default App
