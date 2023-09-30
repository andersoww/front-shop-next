type PositionToast =
  | 'top'
  | 'top-right'
  | 'top-left'
  | 'bottom'
  | 'bottom-right'
  | 'bottom-left'

interface ToastProps {
  id: string
  title: string
  message: string
  duration?: number
  position?: PositionToast
  type: 'success' | 'info' | 'error' | 'warning'
  unique?: boolean
}

interface ToastContainerProps {
  toasts: ToastProps[]
  pos: PositionToast
}

export type { PositionToast, ToastProps, ToastContainerProps }
