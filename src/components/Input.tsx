import { useState } from 'react'
import { DefaultInput } from '../common/aliases.js'
import type { InputProps as DefaultInputProps } from '@cloudscape-design/components'

interface InputProps extends Omit<DefaultInputProps, 'value'> {
  value?: string
}

export function Input({ value = '', ...props }: InputProps) {
  const [internalValue, setInternalValue] = useState(value)
  return (
    <DefaultInput
      {...props}
      value={internalValue}
      onChange={({ detail: { value } }) => setInternalValue(value)}
    />
  )
}
