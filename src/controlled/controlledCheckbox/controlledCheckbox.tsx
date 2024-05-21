import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@/components'
import { CheckboxProps } from '@radix-ui/react-checkbox'

type Props<T extends FieldValues> = {
  label: string
} & Omit<CheckboxProps, 'checked' | 'id' | 'onChange'> &
  UseControllerProps<T>
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onChange, ref, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Checkbox ref={ref} {...rest} checked={value} id={name} onChange={onChange} />
}
