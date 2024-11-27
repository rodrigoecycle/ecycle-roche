import classNames from 'classnames'
import { SVGProps } from 'react'

interface FarmProps extends SVGProps<SVGElement> {
  className?: string
}

export const Farm = ({ className }: FarmProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="#currentColor"
    viewBox="0 0 256 256"
    className={classNames('inline-block', className)}
  >
    <path d="M136.83 220.43a8 8 0 0 1-11.09 2.23A183.15 183.15 0 0 0 24 192a8 8 0 0 1 0-16 199.1 199.1 0 0 1 110.6 33.34 8 8 0 0 1 2.23 11.09M24 144a8 8 0 0 0 0 16 214.8 214.8 0 0 1 151.17 61.71 8 8 0 1 0 11.2-11.42A230.7 230.7 0 0 0 24 144m208 16a216.5 216.5 0 0 0-48.59 5.49q8.24 6.25 16 13.16A201.5 201.5 0 0 1 232 176a8 8 0 0 1 0 16c-6 0-11.93.29-17.85.86q8.32 8.67 15.94 18.14a8 8 0 1 1-12.48 10A247 247 0 0 0 24 128a8 8 0 0 1 0-16 266.3 266.3 0 0 1 48 4.37V80a8 8 0 0 1 3.2-6.4l64-48a8 8 0 0 1 9.6 0l64 48A8 8 0 0 1 216 80v32.49c5.31-.31 10.64-.49 16-.49a8 8 0 0 1 0 16 246.3 246.3 0 0 0-84.26 14.69q9.44 5 18.46 10.78A232.2 232.2 0 0 1 232 144a8 8 0 0 1 0 16M120 88h48a8 8 0 0 1 8 8v21.94q11.88-2.56 24-4V84l-56-42-56 42v35.81q12.19 3 24 7.18V96a8 8 0 0 1 8-8m8.07 45.27A262.5 262.5 0 0 1 160 121.94V104h-32v29.24Z"></path>
  </svg>
)