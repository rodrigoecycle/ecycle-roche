'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useMask } from '@react-input/mask'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Input } from '@/components/input'
import { useCepSelected } from '@/contexts/cep-selected'

export default function CardInputCep() {
  const router = useRouter()
  const { cepSelected, setCepSelected } = useCepSelected()
  const [cep, setCep] = useState(cepSelected ?? '')
  const disabledBtnCalculate = cep === ''

  const inputCepRef = useMask({
    mask: '_____-___',
    replacement: { _: /\d/ },
  })

  function handleCalculateSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setCepSelected(cep)
    router.push('/postos')
  }

  function changeCalculateSearch(e: ChangeEvent<HTMLInputElement>) {
    setCep(e.target.value)
  }

  return (
    <Card heading="Sua localização?" className="items-center h-full">
      <form
        onSubmit={handleCalculateSearch}
        className="flex flex-col justify-end gap-6"
      >
        <Input
          ref={inputCepRef}
          placeholder="Digite seu CEP"
          onChange={changeCalculateSearch}
          value={cep}
        />
        <div className="flex justify-center gap-16 items-center">
          <Button className="mt-6" disabled={disabledBtnCalculate}>
            Calcular e Buscar
          </Button>
        </div>
      </form>
    </Card>
  )
}
