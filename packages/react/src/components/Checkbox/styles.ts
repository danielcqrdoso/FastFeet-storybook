import * as Checkbox from '@radix-ui/react-checkbox'
import { styled } from '../../styles'

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$white',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '2px solid $black',

  '&[data-state="checked"]': {
    backgroundColor: '$yellow900',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$black',
  width: '$4',
  height: '$4',
})
