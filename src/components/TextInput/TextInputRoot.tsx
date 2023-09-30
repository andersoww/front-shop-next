import clsx from 'clsx'
import { ReactNode } from 'react'

export interface TextInputRootProps {
  children: ReactNode
  width?: string
  className?: string
}

export function TextInputRoot({
  children,
  width,
  className,
}: TextInputRootProps) {
  return (
    <div className={clsx('flex flex-col gap-1', className)}>{children}</div>
  )
}
