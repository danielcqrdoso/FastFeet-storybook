import { ComponentProps } from 'react'
import { BoxContainer } from './styles'

export interface BoxProps extends ComponentProps<typeof BoxContainer> {
  children: React.ReactNode
  transparent?: boolean
  padding?: boolean
  isCentralized?: boolean
  isHalfWidth?: boolean
  isColumn?: boolean
}

export function Box(props: BoxProps) {
  return <BoxContainer {...props} />
}

Box.displayName = 'Box'
