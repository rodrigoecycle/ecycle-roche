import { ReactNode } from 'react'
import classNames from 'classnames'
import { Heading } from './heading'

interface CardProps {
  heading: string
  children: ReactNode // O conteúdo do heading
  className?: string
}

export function Card({ children, heading, className }: CardProps) {
  return (
    <div
      className={classNames(
        'flex flex-col gap-9 p-12 rounded-3xl bg-white shadow-card',
        'duration-500 animate-in fade-in slide-in-from-top-8',
        className,
      )}
    >
      <Heading as="h3" className={className}>
        {heading}
      </Heading>
      {children}
    </div>
  )
}
