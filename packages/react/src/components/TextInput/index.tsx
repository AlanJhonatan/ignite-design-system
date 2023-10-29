import { ElementRef, forwardRef } from 'react'
import { ComponentProps } from '../../types/ComponentProps'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  containerProps?: ComponentProps<typeof TextInputContainer>
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ containerProps, prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer {...containerProps}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
