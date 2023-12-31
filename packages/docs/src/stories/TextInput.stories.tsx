import { Box, Text, TextInput, TextInputProps } from '@zizao/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{
            display: 'flex',
            flexDirection: 'column',
            gap: '$2',
          }}
        >
          <Text size="sm">E-mail address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Can`t type your name',
  },
}

export const disabledWithPrefix: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    prefix: 'some.com/',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'some.com/',
    placeholder: 'your-name',
  },
}
