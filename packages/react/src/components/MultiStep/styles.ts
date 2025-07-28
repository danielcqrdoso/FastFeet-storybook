import { styled } from '../../styles'
import { Text } from '../Text'

export const MultiStepContainer = styled('div', {})

export const Label = styled(Text, {
  color: '$gray',

  defaultVariants: {
    size: 'xs',
  },
})

export const Steps = styled('div', {
  display: 'flex',
  marginTop: '$1',
  height: '$1',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$4',
  background:
    'linear-gradient(to right, #00DA6D var(--active-percent), #00DA6D calc(var(--active-percent) + 0.1%), #BEBCCC calc(var(--active-percent) + 0.1%), #BEBCCC 100%)',
})

export const Step = styled('div', {
  aspectRatio: '1',
  height: '$3',
  borderRadius: '50%',
  backgroundColor: '$white',
  border: '2px solid $gray',

  variants: {
    active: {
      true: {
        backgroundColor: '$green',
        border: '0',
        height: '$4',
      },
    },
  },
})

export const StepTextDiv = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const StepText = styled('div', {
  color: '$gray',
  variants: {
    active: {
      true: {
        color: '$green',
      },
    },
  },
})
