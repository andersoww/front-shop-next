interface TextInputErrorsProps {
  isInvalid: boolean
  description?: string
}

export function TextInputError({
  isInvalid,
  description,
}: TextInputErrorsProps) {
  if (!isInvalid) {
    return null
  }

  return (
    <span className="top-full ml-0.5 text-xs text-red-500 ">{description}</span>
  )
}
