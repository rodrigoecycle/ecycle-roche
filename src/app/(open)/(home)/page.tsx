import CardAmountMedicine from './components/card-amount-medicine'
import CardInputCep from './components/card-input-cep'
import ImageMedicine from './components/image-medicine'

export default function Home() {
  return (
    <div className="grid gap-x-8 gap-y-12 grid-cols-2 relative">
      <div className="flex flex-col gap-5 pl-10 pt-11">
        <h1 className="flex flex-col gap-5 text-dark-900 text-5xl font-bold after:content-[''] after:h-[3px] after:w-[90px] after:bg-primary after:rounded">
          Calculadora e locais
        </h1>
        <p className="text-dark-500 text-2xl">
          Saiba o impacto que será evitado com descarte correto de medicamentos
          e encontre um local de descarte.
        </p>
      </div>

      <ImageMedicine />
      <div />

      <CardAmountMedicine />

      <CardInputCep />
    </div>
  )
}
