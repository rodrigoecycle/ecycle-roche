import { ReactNode } from 'react'
import { Heading } from './heading'
import classNames from 'classnames'
import { motion } from 'motion/react'

interface CardProps {
  heading: string
  children: ReactNode // O conteúdo do heading
  className?: string
}

export function Card({ children, heading, className }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={classNames(
        'flex flex-col gap-9 p-12 rounded-3xl bg-white shadow-card',
        className,
      )}
    >
      <Heading as="h3" className={className}>
        {heading}
      </Heading>
      {children}
    </motion.div>
  )
}
