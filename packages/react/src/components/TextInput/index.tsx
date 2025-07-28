import { useState } from 'react'
import {
  Input,
  InputLogo,
  TextInputContainer,
  Divider,
  EyeButton,
} from './styles'
import { EyeLogo } from '../../images/eye'
import { EyeSlashLogo } from '../../images/eye_slash'

export interface TextInputProps {
  src: string
  placeholder: string
  isAPassword?: boolean
}

export function TextInput(props: TextInputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(!props.isAPassword)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  return (
    <TextInputContainer>
      <InputLogo src={props.src} />
      <Divider />
      <Input type={isPasswordVisible ? 'text' : 'password'} {...props} />
      {props.isAPassword && (
        <EyeButton onClick={togglePasswordVisibility}>
          {isPasswordVisible ? <EyeLogo /> : <EyeSlashLogo />}
        </EyeButton>
      )}
    </TextInputContainer>
  )
}

TextInput.displayName = 'TextInput'
