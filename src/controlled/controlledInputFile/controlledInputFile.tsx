import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { InputFile } from '@/components'
import { InputFileProps } from '@/components/inputFile/inputFile'

export type ControlledTextFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
} & Omit<InputFileProps, 'id' | 'onChange' | 'value'>

export const ControlledInputFile = <TFieldValues extends FieldValues>(
  props: ControlledTextFieldProps<TFieldValues>
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <InputFile {...props} {...field} errorMessage={error?.message} name={props.name} />
}
