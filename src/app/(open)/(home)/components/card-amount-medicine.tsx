'use client'

import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { useAmountBags } from '@/contexts/amount-bags'
import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/24/outline'
import NumberFlow, { Format } from '@number-flow/react'

const format: Format = {
  notation: 'compact',
  compactDisplay: 'short',
  roundingMode: 'trunc',
}

export default function CardAmountMedicine() {
  const { discardedCount, setDiscardedCount } = useAmountBags()
  const disabledBtnMinus = discardedCount <= 1

  return (
    <Card heading="Quantas sacolas?" className="items-center">
      <div className="flex justify-center gap-8 items-center bg-bag bg-no-repeat bg-center w-full h-[140px]">
        <Button
          className="mt-6"
          onClick={() => setDiscardedCount(discardedCount - 1)}
          disabled={disabledBtnMinus}
        >
          <MinusCircleIcon className="w-5 h-5" />
          <span className="sr-only">Menos</span>
        </Button>

        <span className="text-primary text-3xl font-bold mt-6 w-24 text-center">
          <NumberFlow
            value={discardedCount}
            trend={0}
            format={format}
            willChange
            continuous
          />
        </span>

        <Button
          className="mt-6"
          onClick={() => setDiscardedCount(discardedCount + 1)}
        >
          <PlusCircleIcon className="w-5 h-5" />
          <span className="sr-only">Mais</span>
        </Button>
      </div>
      <span>de medicamentos para descarte</span>
    </Card>
  )
}
