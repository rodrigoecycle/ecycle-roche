import { ButtonHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'

interface ButtonTertiaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode // O conteúdo do heading
  className?: string
}

export function ButtonTertiary({
  children,
  className,
  ...props
}: ButtonTertiaryProps) {
  return (
    <button
      className={classNames(
        'bg-white hover:bg-blue-100 active:bg-blue-200 disabled:bg-gray-200 border-2 border-transparent focus-visible:border-blue-950 outline-none text-primary active:text-dark-900 disabled:text-gray-500 disabled:cursor-not-allowed shadow hover:shadow-none font-medium rounded-full px-7 py-3 transition-all',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
