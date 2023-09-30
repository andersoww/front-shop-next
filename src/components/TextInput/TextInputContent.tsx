import clsx from 'clsx'
import { ReactNode } from 'react'

interface TextInputContentProps {
  className?: string
  children: ReactNode
}

export function TextInputContent({
  children,
  className,
}: TextInputContentProps) {
  return (
    <div
      className={clsx(
        'input-theme flex h-12 w-full items-center gap-3 rounded-md px-4 duration-200 focus-within:ring-2 hover:ring-2',
        className,
      )}
    >
      {children}
    </div>
  )
}
