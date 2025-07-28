import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$xs',
  fontSize: '$lg',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',
  height: 46,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$black',
        background: '$yellow900',

        '&:disabled': {
          backgroundColor: '$yellow100',
        },
      },

      secondary: {
        color: '$white',
        background: 'transparent',

        '&:disabled': {
          color: '$gray200',
        },
      },
      third: {
        color: '$white',
        background: 'transparent',
        border: '1px solid $black',

        '&:disabled': {
          color: '$gray200',
        },
      },
    },
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
