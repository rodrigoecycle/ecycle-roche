import classNames from 'classnames'
import { SVGProps } from 'react'

interface BatteryLowProps extends SVGProps<SVGElement> {
  className?: string
}

export const BatteryLow = ({ className }: BatteryLowProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 256 256"
    fill="#currentColor"
    className={classNames('inline-block', className)}
  >
    <path d="M200 56H32A24 24 0 0 0 8 80v96a24 24 0 0 0 24 24h168a24 24 0 0 0 24-24V80a24 24 0 0 0-24-24m8 120a8 8 0 0 1-8 8H32a8 8 0 0 1-8-8V80a8 8 0 0 1 8-8h168a8 8 0 0 1 8 8ZM64 96v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0m192 0v64a8 8 0 0 1-16 0V96a8 8 0 0 1 16 0"></path>
  </svg>
)
