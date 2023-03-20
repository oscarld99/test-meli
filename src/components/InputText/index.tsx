import React, {
  ChangeEvent,
  Dispatch,
  InputHTMLAttributes,
  KeyboardEvent,
  SetStateAction
} from 'react'
import styles from './InputText.module.scss'

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  onChangeText: Dispatch<SetStateAction<string>>
  onPressKey: () => void
}

const InputText = ({
  onChangeText,
  onPressKey,
  ...props
}: InputTextProps) => {

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => onChangeText(event.target.value)

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onPressKey();
    }
  };

  return (
    <input
      className={styles.inputText__container}
      onChange={handleInput}
      onKeyDown={keyDownHandler}
      type='text'
      {...props}
    />
  )
}

export default InputText