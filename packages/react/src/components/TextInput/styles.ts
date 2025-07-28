import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $black',
  height: '$12',
  alignItems: 'center',
  width: '100%',
  display: 'flex',

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const InputLogo = styled('img', {
  position: 'relative',
  maxWidth: '80%',
  maxHeight: '80%',
  width: 'auto',
  height: 'auto',
  marginLeft: '$2',
  left: '$2',
})

export const Input = styled('input', {
  position: 'relative',
  fontFamily: '$default',
  fontSize: '$lg',
  color: '$black',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '90%',

  '&:focus': {
    outline: 0,
  },

  '&::placeholder': {
    color: '$gray',
  },
})

export const Divider = styled('div', {
  width: '1px',
  height: '24px',
  backgroundColor: '$gray',
  margin: '0 $4',
})

export const EyeButton = styled('button', {
  position: 'relative',
  maxWidth: '80%',
  maxHeight: '80%',
  width: 'auto',
  height: 'auto',
  right: '$2',
  background: 'transparent',
  border: 0,
})
