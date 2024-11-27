import CardAmountMedicine from './components/card-amount-medicine'
import CardInputCep from './components/card-input-cep'
import HeadingHome from './components/heading-home'
import ImageMedicine from './components/image-medicine'

export default function Home() {
  return (
    <div className="grid gap-x-8 gap-y-12 grid-cols-2 relative">
      <HeadingHome />
      <ImageMedicine />
      <div />
      <div className="duration-500 animate-in fade-in slide-in-from-top-8">
        <CardAmountMedicine />
      </div>
      <div className="duration-500 animate-in fade-in slide-in-from-top-8">
        <CardInputCep />
      </div>
    </div>
  )
}
