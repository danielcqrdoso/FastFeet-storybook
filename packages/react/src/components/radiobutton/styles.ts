import { styled } from '../../styles'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupContainer = styled(RadioGroup.Root, {
  display: 'flex',
  gap: '$4',
})

export const RadioItem = styled(RadioGroup.Item, {
  all: 'unset',
  width: '$6',
  height: '$6',
  borderRadius: '$full',
  border: '2px solid $black',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',

  '&[data-state="checked"]': {
    backgroundColor: '$yellow900',
  },
})

export const RadioIndicator = styled(RadioGroup.Indicator, {
  width: '$4',
  height: '$4',
  backgroundColor: 'transparent',
  borderRadius: '$full',
})

export const RadioLabel = styled('label', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})
