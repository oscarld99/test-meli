import React, {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  SetStateAction
} from 'react'
import styles from './InputText.module.scss'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  onChangeText: Dispatch<SetStateAction<string>>
}

const InputText = ({
  onChangeText,
  ...props
}: InputTextProps) => {

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => onChangeText(event.target.value)

  return (
    <input
      className={styles.inputText__container}
      onChange={handleInput}
      type='text'
      {...props}
    />
  )
}

export default InputText