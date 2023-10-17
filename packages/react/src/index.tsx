import { colors } from '@ignite-ui/tokens'

import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
})

export function App() {
  return <Button style={{ color: colors.ignite300 }}>Hello World</Button>
}
