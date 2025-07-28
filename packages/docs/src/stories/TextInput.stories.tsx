import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextInput, TextInputProps } from '@fastfeet/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {
    src: 'https://tse1.mm.bing.net/th?id=OIP.N3fMsghGPMzdo4Y9JIPMtAHaHa&rs=1&pid=ImgDetMain',
    placeholder: '',
  },
  decorators: [
    (Story) => {
      return (
        <Box css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const NormalText: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Password: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your password',
    isAPassword: true,
  },
}
