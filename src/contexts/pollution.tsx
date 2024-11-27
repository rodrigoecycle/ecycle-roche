'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

// Tipagem para os resultados dos cálculos
type CalculationResult = {
  water: {
    minLiters: number // litros para poluição mínima
    maxLiters: number // litros para poluição máxima
  }
  soil: {
    minArea: number // m² para poluição mínima
    maxArea: number // m² para poluição máxima
  }
}

// Tipagem para o contexto
type PollutionContextType = {
  calculatePollution: (bags: number) => void
  result: CalculationResult | null
}

// Valores iniciais para o contexto
const PollutionContext = createContext<PollutionContextType | undefined>(
  undefined,
)

// Provider
export const PollutionProvider = ({ children }: { children: ReactNode }) => {
  const [result, setResult] = useState<CalculationResult | null>(null)

  // Função para calcular os valores
  const calculatePollution = (bags: number) => {
    // Constantes para os cálculos
    const blisterWeight = 5 // Peso de um blister (g)
    const bagCapacity = 3000 // Capacidade de uma sacola (g)
    const blistersPerBag = bagCapacity / blisterWeight // Quantidade de blisters por sacola

    // Água
    const minPollutantWater = 35.59 // mg/L (mínimo)
    const maxPollutantWater = 3.07 // mg/L (máximo)
    const totalDrugWater = blistersPerBag * 0.5 * 1000 * bags // mg

    const minLiters = totalDrugWater / minPollutantWater
    const maxLiters = totalDrugWater / maxPollutantWater

    // Solo
    const minPollutantSoil = 4000 // mg/kg (mínimo)
    const maxPollutantSoil = 140.87 // mg/kg (máximo)
    const soilWeightPerM2 = 200 // Peso médio de 1m² de solo (kg)

    const totalDrugSoilMin = blistersPerBag * 4 * 1000 * bags // mg (mínimo)
    const totalDrugSoilMax = blistersPerBag * 6 * 1000 * bags // mg (máximo)

    const minKg = totalDrugSoilMin / minPollutantSoil
    const maxKg = totalDrugSoilMax / maxPollutantSoil

    const minArea = minKg / soilWeightPerM2
    const maxArea = maxKg / soilWeightPerM2

    // Atualiza os resultados no estado
    setResult({
      water: {
        minLiters,
        maxLiters,
      },
      soil: {
        minArea,
        maxArea,
      },
    })
  }

  return (
    <PollutionContext.Provider value={{ calculatePollution, result }}>
      {children}
    </PollutionContext.Provider>
  )
}

// Hook para consumir o contexto
export const usePollution = (): PollutionContextType => {
  const context = useContext(PollutionContext)
  if (!context) {
    throw new Error('usePollution must be used within a PollutionProvider')
  }
  return context
}
