import React, { InputHTMLAttributes, ReactNode, SetStateAction } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface TextInputData {
  setValue: (value: SetStateAction<string>) => void
  value: string
}

interface TextInputRootProps {
  children: ReactNode
  className?: string
}

interface TextInputLabelProps {
  description: string
  className?: string
  children: ReactNode
}

interface TextInputErrorsProps {
  isInvalid: boolean
  description?: string
}

interface TextInputContentProps {
  className?: string
  children: ReactNode
}

type TextInputIconProps = React.ComponentPropsWithoutRef<any> & {
  children: ReactNode
}

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: {
    action: UseFormRegister<any>
    name: string
  }
}

export type {
  TextInputData,
  TextInputRootProps,
  TextInputLabelProps,
  TextInputErrorsProps,
  TextInputContentProps,
  TextInputIconProps,
  TextInputInputProps,
}
