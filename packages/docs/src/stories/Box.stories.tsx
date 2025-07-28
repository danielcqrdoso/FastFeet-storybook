import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@fastfeet/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <div>
        <Text>Isso é um elemento filho</Text>
        <Text>Isso é um elemento filho 2</Text>
        <Text>Isso é um elemento filho 3</Text>
      </div>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
