import { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../../types/ComponentProps'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
