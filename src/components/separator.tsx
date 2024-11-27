import classNames from 'classnames'

interface SeparatorProps {
  className?: string
}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div className="flex justify-center w-full">
      <div
        className={classNames('w-[90px] h-[3px] bg-primary rounded', className)}
        {...props}
      />
    </div>
  )
}
