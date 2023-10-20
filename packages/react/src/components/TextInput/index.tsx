import { ComponentProps } from '../../types/ComponentProps'
import { TextInputContainer } from './styles'

export type TextInputProps = object

// export type TextInputProps = ComponentProps<typeof TextInputContainer>

export function TextInput() {
  return <TextInputContainer />
}
