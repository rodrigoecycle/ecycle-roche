import classNames from 'classnames'
import { InputHTMLAttributes, forwardRef } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="text"
        className={classNames(
          'rounded-md py-3 pl-5 pr-4 bg-white disabled:bg-gray-100 border border-primary hover:border-2 focus-visible:border-2 disabled:border-gray-100 disabled:cursor-not-allowed outline-none transition-all',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)

// Definir displayName é uma boa prática ao usar forwardRef
Input.displayName = 'Input'
