import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full' | 'fullL' | 'fullR'

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
  size?: ButtonSize
  borderRadius?: ButtonRadius
  isActive?: boolean
  isSquare?: boolean
}

export function ButtonSecondary({
  children,
  className,
  size = 'md',
  borderRadius = 'md',
  isActive = false,
  isSquare = false,
  ...props
}: ButtonSecondaryProps) {
  const sizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-4 py-2',
    lg: 'px-7 py-3',
  }

  const borderRadiusClasses = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
    fullL: 'rounded-l-full',
    fullR: 'rounded-r-full',
  }

  return (
    <button
      className={classNames(
        isActive
          ? 'bg-primary text-white border-primary'
          : 'bg-white text-dark-900 border-dark-200',
        'border font-medium text-center outline-none transition-all hover:bg-blue-900 hover:border-blue-900 hover:text-white active:bg-blue-950 focus-visible:border-blue-950 disabled:text-gray-500 disabled:bg-gray-200 disabled:border-gray-200 disabled:cursor-not-allowed',
        {
          'w-9 h-9 flex justify-center items-center': isSquare,
        },
        isSquare
          ? 'w-9 h-9 flex justify-center items-center'
          : sizeClasses[size],
        borderRadiusClasses[borderRadius],

        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
