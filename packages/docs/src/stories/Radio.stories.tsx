import type { Meta, StoryObj } from '@storybook/react'
import { Radio, RadioProps } from '@fastfeet/react'

export default {
  title: 'Form/radio button',
  component: Radio,
  args: {
    optionObject: [
      { text: 'Option 1', valueOption: '1' },
      { text: 'Option 2', valueOption: '2' },
      { text: 'Option 3', valueOption: '3' },
    ],
    textProps: {
      css: {
        color: '$white',
      },
    },
  },
} as Meta<RadioProps>

export const Primary: StoryObj<RadioProps> = {}
