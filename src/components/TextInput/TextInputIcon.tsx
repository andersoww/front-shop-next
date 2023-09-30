import { Slot } from '@radix-ui/react-slot'
import { PropsWithChildren, ReactNode } from 'react'

export interface TextInputIconProps extends PropsWithChildren {
  children?: ReactNode
}

export function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="flex items-center justify-center text-gray-400">
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInput.Icon'
