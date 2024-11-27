import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode // O conteúdo do heading
  className?: string
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        'bg-primary hover:bg-blue-900 active:bg-blue-950 disabled:bg-gray-200 border-2 border-transparent focus-visible:border-blue-950 outline-none text-white disabled:text-gray-500 disabled:cursor-not-allowed font-medium rounded-full px-7 py-3 transition-all',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
