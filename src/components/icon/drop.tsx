import classNames from 'classnames'
import { SVGProps } from 'react'

interface DropProps extends SVGProps<SVGElement> {
  className?: string
}

export const Drop = ({ className }: DropProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#currentColor"
    viewBox="0 0 256 256"
    className={classNames('inline-block', className)}
  >
    <path d="M174 47.75a254.2 254.2 0 0 0-41.45-38.3 8 8 0 0 0-9.18 0A254.2 254.2 0 0 0 82 47.75C54.51 79.32 40 112.6 40 144a88 88 0 0 0 176 0c0-31.4-14.51-64.68-42-96.25M128 216a72.08 72.08 0 0 1-72-72c0-57.23 55.47-105 72-118 16.53 13 72 60.75 72 118a72.08 72.08 0 0 1-72 72m55.89-62.66a57.6 57.6 0 0 1-46.56 46.55 9 9 0 0 1-1.33.11 8 8 0 0 1-1.32-15.89c16.57-2.79 30.63-16.85 33.44-33.45a8 8 0 0 1 15.78 2.68Z"></path>
  </svg>
)