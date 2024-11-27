import classNames from 'classnames'
import { ReactNode } from 'react'

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' // Define os elementos possíveis
  children: ReactNode // O conteúdo do heading
  className?: string
}

export function Heading({ as: Tag = 'h2', children, className }: HeadingProps) {
  return (
    <Tag
      className={classNames(
        "flex flex-col gap-4 text-dark-900 text-3xl font-bold after:content-[''] after:h-[3px] after:w-[90px] after:bg-primary after:rounded",
        className,
      )}
    >
      {children}
    </Tag>
  )
}
