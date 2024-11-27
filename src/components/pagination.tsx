import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { ButtonSecondary } from './button-secondary'

export function Pagination() {
  return (
    <div className="flex gap-2">
      <ButtonSecondary isSquare disabled>
        <ChevronLeftIcon className="w-5 h-5 block" />
      </ButtonSecondary>
      <ButtonSecondary isSquare isActive>
        1
      </ButtonSecondary>
      <ButtonSecondary isSquare>2</ButtonSecondary>
      <ButtonSecondary isSquare>3</ButtonSecondary>
      <ButtonSecondary isSquare>4</ButtonSecondary>
      <ButtonSecondary isSquare>5</ButtonSecondary>
      <ButtonSecondary isSquare>6</ButtonSecondary>
      <ButtonSecondary isSquare>7</ButtonSecondary>
      <ButtonSecondary isSquare>9</ButtonSecondary>
      <ButtonSecondary isSquare>9</ButtonSecondary>
      <ButtonSecondary isSquare>10</ButtonSecondary>
      <ButtonSecondary isSquare>
        <ChevronRightIcon className="w-5 h-5 block" />
      </ButtonSecondary>
    </div>
  )
}
