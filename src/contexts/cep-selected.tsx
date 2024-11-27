'use client'

import { createContext, useContext, useState, ReactNode, FC } from 'react'

interface CepSelectedContextType {
  cepSelected: string
  setCepSelected: (value: string) => void
}

const CepSelectedContext = createContext<CepSelectedContextType | undefined>(
  undefined,
)

interface CepSelectedProviderProps {
  children: ReactNode
}

export const CepSelectedProvider: FC<CepSelectedProviderProps> = ({
  children,
}) => {
  const [cepSelected, setCep] = useState<string>('')

  const setCepSelected = (value: string) => {
    setCep(value)
  }

  return (
    <CepSelectedContext.Provider value={{ cepSelected, setCepSelected }}>
      {children}
    </CepSelectedContext.Provider>
  )
}

export const useCepSelected = (): CepSelectedContextType => {
  const context = useContext(CepSelectedContext)

  if (!context) {
    throw new Error(
      'useCepSelectedContext deve ser usado dentro de um AmountBagsProvider',
    )
  }
  return context
}
