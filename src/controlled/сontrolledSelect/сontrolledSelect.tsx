import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Select, SelectProps } from '@/components'

type ControlledSelectProps<T extends FieldValues> = Omit<SelectProps, 'onValueChange' | 'value'> &
  UseControllerProps<T>

export const ControlledSelect = <T extends FieldValues>({
  control,
  name,
  ...restProps
}: ControlledSelectProps<T>) => {
  const {
    field: { onChange, value },
    fieldState: { error },
  } = useController({ control, name })

  return (
    <Select {...restProps} errorMessage={error?.message} onValueChange={onChange} value={value} />
  )
}
