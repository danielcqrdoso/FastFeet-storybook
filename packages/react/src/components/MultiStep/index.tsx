import { Box } from '../Box'
import {
  MultiStepContainer,
  Step,
  Steps,
  StepText,
  StepTextDiv,
} from './styles'

export interface MultiStepProps {
  size: number
  textItem: string[]
  currentStep?: number
}

interface calcPercentProps {
  size: number
  activeSize: number
}

interface calcPercentReturn {
  activePercent: number
}

function calcPercent(props: calcPercentProps): calcPercentReturn {
  if (props.size < 2) {
    props.size = 2
  }

  const segmentPercentage = 100 / (props.size - 1)
  const activePercent = (props.activeSize - 1) * segmentPercentage

  return {
    activePercent,
  }
}

export function MultiStep(multiStepProps: MultiStepProps) {
  const currentStepPercent = calcPercent({
    activeSize: multiStepProps.currentStep ?? 1,
    size: multiStepProps.size,
  })

  return (
    <MultiStepContainer>
      <Steps
        css={{
          '--active-percent': `${currentStepPercent.activePercent}%`,
        }}
      >
        {Array.from({ length: multiStepProps.size }, (_, i) => i + 1).map(
          (step) => {
            return (
              <Step
                key={step}
                active={(multiStepProps.currentStep ?? 1) >= step}
              />
            )
          },
        )}
      </Steps>

      <Box transparent={true} padding={false}>
        <StepTextDiv>
          {Array.from({ length: multiStepProps.size }, (_, i) => i + 1).map(
            (step) => {
              return (
                <StepText
                  key={step}
                  active={(multiStepProps.currentStep ?? 1) >= step}
                >
                  {multiStepProps.textItem[step - 1]}
                </StepText>
              )
            },
          )}
        </StepTextDiv>
      </Box>
    </MultiStepContainer>
  )
}

MultiStep.displayName = 'MultiStep'
