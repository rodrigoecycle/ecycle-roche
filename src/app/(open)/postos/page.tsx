import { Separator } from '@/components/separator'
import { HeroImpact } from './components/hero-impact'
import { PollutionProvider } from '@/contexts/pollution'
import { Pagination } from '@/components/pagination'
import CardPlace from './components/card-place'
import { places } from './data.json'

export default function Postos() {
  return (
    <div>
      <PollutionProvider>
        <HeroImpact />
      </PollutionProvider>

      <Separator className="mt-16 duration-500 animate-in fade-in slide-in-from-top-8" />

      <div id="locais" className="flex flex-col gap-9 pt-16">
        <div className="mx-10 flex flex-col gap-5 duration-500 animate-in fade-in slide-in-from-top-8">
          <h3 className="text-5xl font-bold text-dark-900">
            48 locais de descarte de medicamentos
          </h3>
          <p className="text-2xl">
            Nunca jogue um remédio vencido diretamente no lixo. Ele pode
            infectar o aterro, além do risco de ser reaproveitado por outras
            pessoas.{' '}
            <a href="#" target="blank" className="text-primary">
              Saiba mais
            </a>
            !
          </p>
        </div>

        <div className="rounded-lg border border-dark-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14623.180550526233!2d-46.6801928!3d-23.611679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1732643119879!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-none w-full h-[450px]"
          ></iframe>
        </div>

        <div className="flex justify-center">
          <Pagination />
        </div>

        <div className="grid grid-cols-2 gap-9">
          {places.map((place) => (
            <CardPlace key={place.id} place={place} />
          ))}
        </div>

        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  )
}
