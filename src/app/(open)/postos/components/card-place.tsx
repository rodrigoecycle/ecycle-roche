import {
  ClockIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  HeartIcon,
  MagnifyingGlassPlusIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import { Pill } from '@/components/icon/pill'
import { BatteryLow } from '@/components/icon/battery-low'
import { ButtonSecondary } from '@/components/button-secondary'
import Link from 'next/link'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import DialogPlace from './dialog-place'
import { IPlace } from '@/@types/IPlace'
import { formatDistance } from '@/utils/formatDistance'

interface CardPlaceProps {
  place: IPlace
}

export default function CardPlace({ place }: CardPlaceProps) {
  const itemIcon = {
    Medicamentos: <Pill className="w-4 h-4 fill-dark-900" />,
    Pilhas: <BatteryLow className="w-4 h-4 fill-dark-900" />,
  }

  return (
    <div className="flex flex-col gap-6 rounded-xl bg-gray-50/50 border border-gray-200 text-sm hover:bg-white hover:shadow-lg transition-all">
      <header className="p-6 border-b border-gray-200">
        <h4 className="text-primary text-lg font-bold">{place.name}</h4>
        <div className="flex justify-between">
          <span>{place.type}</span>
          <span>{formatDistance(place.distance)}</span>
        </div>
      </header>

      <ul className="flex flex-col gap-3 px-6">
        <li className="flex gap-1 items-center">
          <MapPinIcon className="w-4 h-4 inline-block text-dark-900" />
          {place.address}
        </li>
        <li className="flex gap-1 items-center">
          <ClockIcon className="w-4 h-4 inline-block text-dark-900" />
          {place.openingHours}
        </li>
        <li className="flex gap-1 items-center">
          <PhoneIcon className="w-4 h-4 inline-block text-dark-900" />
          {place.phones}
        </li>
        <li className="flex gap-1 items-center">
          <ComputerDesktopIcon className="w-4 h-4 inline-block text-dark-900" />
          {place.website}
        </li>
        <li className="flex gap-1 items-center">
          <EnvelopeIcon className="w-4 h-4 inline-block text-dark-900" />
          {place.mail}
        </li>
        <li className="flex gap-3">
          {place.items.map((item, i) => (
            <span key={i} className="flex gap-1 items-center">
              {itemIcon[item as keyof typeof itemIcon]}
              {item}
            </span>
          ))}
        </li>
      </ul>

      <footer className="flex justify-center p-6 border-t border-gray-200">
        <Dialog>
          <DialogTrigger asChild>
            <ButtonSecondary borderRadius="fullL" className="border-r-0">
              <MagnifyingGlassPlusIcon className="w-4 h-4 mr-2 inline-block" />
              Detalhes
            </ButtonSecondary>
          </DialogTrigger>
          <DialogPlace place={place} />
        </Dialog>

        <Link
          href="https://www.google.com/maps/dir///@-23.611679,-46.6801928,15z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
          target="blank"
        >
          <ButtonSecondary borderRadius="none" className="border-r-0">
            <MapIcon className="w-4 h-4 mr-2 inline-block" />
            Rota
          </ButtonSecondary>
        </Link>

        <ButtonSecondary borderRadius="none" className="border-r-0">
          <ShareIcon className="w-4 h-4 mr-2 inline-block" />
          Compartilhar
        </ButtonSecondary>

        <ButtonSecondary borderRadius="fullR">
          <HeartIcon className="w-4 h-4 mr-2 inline-block" />
          Avaliar
        </ButtonSecondary>
      </footer>
    </div>
  )
}
