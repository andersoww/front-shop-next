import { ReactNode } from 'react'

interface TextProps {
  size?: 'xs' | 'sm' | 'md' | 'lg'
  children: ReactNode
  className?: string
}

export type { TextProps }
