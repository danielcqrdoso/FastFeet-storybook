import {
  RadioGroupContainer,
  RadioItem,
  RadioIndicator,
  RadioLabel,
} from './styles'
import { Text, TextProps } from '../Text'

interface optionObject {
  text: string
  valueOption: string
}

export interface RadioProps {
  optionObject: optionObject[]
  textProps?: TextProps
  value: string
  onChange: (value: string) => void
}

export function Radio(props: RadioProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { optionObject, value, textProps, onChange, ...restProps } = props

  return (
    <RadioGroupContainer value={value} onValueChange={onChange}>
      {optionObject.map((option, index) => (
        <RadioLabel key={index}>
          <RadioItem key={index} value={option.valueOption} {...restProps}>
            <RadioIndicator />
          </RadioItem>
          <Text {...textProps}>{option.text}</Text>
        </RadioLabel>
      ))}
    </RadioGroupContainer>
  )
}

Radio.displayName = 'Radio'
