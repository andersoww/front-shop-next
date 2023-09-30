'use client'
import clsx from 'clsx'
import { Eye, EyeOff } from 'lucide-react'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { TextInputIcon } from './TextInputIcon'

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: 'document' | 'factoryYear'
}

const TextInputInput = forwardRef<HTMLInputElement, TextInputInputProps>(
  ({ className, onChange, onBlur, type, mask, disabled, ...rest }, ref) => {
    const [typeInput, setTypeInput] = useState(type)

    return (
      <>
        <input
          ref={ref}
          {...rest}
          type={type === 'password' ? typeInput : type}
          className={clsx('input', className)}
          onBlur={onBlur}
          onChange={onChange}
          disabled={disabled}
        />

        {type === 'password' && (
          <TextInputIcon>
            {typeInput !== 'password' ? (
              <Eye
                className="cursor-pointer"
                onClick={() => {
                  setTypeInput('password')
                }}
              />
            ) : (
              <EyeOff
                className="cursor-pointer"
                onClick={() => {
                  setTypeInput('text')
                }}
              />
            )}
          </TextInputIcon>
        )}
      </>
    )
  },
)

TextInputInput.displayName = 'Input'

export { TextInputInput }
