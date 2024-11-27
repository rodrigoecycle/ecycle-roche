'use client'

import { createContext, useContext, useState, ReactNode, FC } from 'react'

interface AmountBagsContextType {
  discardedCount: number
  setDiscardedCount: (count: number) => void
}

const AmountBagsContext = createContext<AmountBagsContextType | undefined>(
  undefined,
)

interface AmountBagsProviderProps {
  children: ReactNode
}

export const AmountBagsProvider: FC<AmountBagsProviderProps> = ({
  children,
}) => {
  const [discardedCount, setDiscardedCountState] = useState<number>(1)

  const setDiscardedCount = (count: number) => {
    if (count >= 1) {
      setDiscardedCountState(count)
    }
  }

  return (
    <AmountBagsContext.Provider value={{ discardedCount, setDiscardedCount }}>
      {children}
    </AmountBagsContext.Provider>
  )
}

export const useAmountBags = (): AmountBagsContextType => {
  const context = useContext(AmountBagsContext)

  if (!context) {
    throw new Error(
      'useAmountBags deve ser usado dentro de um AmountBagsProvider',
    )
  }
  return context
}
