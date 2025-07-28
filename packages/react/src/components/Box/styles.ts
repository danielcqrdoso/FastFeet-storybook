import { styled } from '../../styles'

export const BoxContainer = styled('div', {
  padding: '$6',
  backgroundColor: '$white',
  border: '1px solid $black',
  display: 'flex',
  width: '100%',

  variants: {
    transparent: {
      true: {
        backgroundColor: 'transparent',
        border: '0',
      },
    },

    padding: {
      false: {
        padding: '0',
      },
    },

    isCentralized: {
      true: {
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
      },
    },

    isColumn: {
      true: {
        flexDirection: 'column',
      },
      false: {
        flexDirection: 'row',
      },
    },
  },

  defaultVariants: {
    isColumn: true,
  },
})

BoxContainer.displayName = 'BoxContainer'
