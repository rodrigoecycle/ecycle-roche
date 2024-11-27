import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  ClockIcon,
  ComputerDesktopIcon,
  EnvelopeIcon,
  HeartIcon,
  MapIcon,
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
} from '@heroicons/react/24/outline'
import { Pill } from '@/components/icon/pill'
import { BatteryLow } from '@/components/icon/battery-low'
import Link from 'next/link'
import { ButtonSecondary } from '@/components/button-secondary'
import { IPlace } from '@/@types/IPlace'
import { formatDistance } from '@/utils/formatDistance'

interface DialogPlaceProps {
  place: IPlace
}

export default function DialogPlace({ place }: DialogPlaceProps) {
  const itemIcon = {
    Medicamentos: <Pill className="w-4 h-4 fill-dark-900" />,
    Pilhas: <BatteryLow className="w-4 h-4 fill-dark-900" />,
  }

  return (
    <DialogContent className="w-full max-w-screen-xl m-6 p-0 bg-white">
      <div className="grid grid-cols-2">
        <div className="rounded-l-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14623.180550526233!2d-46.6801928!3d-23.611679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1732643119879!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-none w-full h-full"
          ></iframe>
        </div>

        <div className="flex flex-col gap-6">
          <DialogHeader className="p-6 border-b border-gray-200">
            <DialogTitle asChild>
              <h4 className="text-primary text-lg font-bold">{place.name}</h4>
            </DialogTitle>
            <DialogDescription asChild>
              <div className="flex justify-between">
                <span>{place.type}</span>
                <span>{formatDistance(place.distance)}</span>
              </div>
            </DialogDescription>
          </DialogHeader>

          <ul className="flex flex-col gap-3 px-6 text-sm pb-6 border-b border-gray-200">
            <li className="flex gap-1 items-center">
              <MapPinIcon className="w-4 h-4 inline-block text-dark-900" />
              {place.address}
            </li>
            <li className="flex gap-1 items-center">
              <ClockIcon className="w-4 h-4 inline-block text-dark-900" />
              {place.openingHours}
            </li>
          </ul>

          <ul className="flex flex-col gap-3 px-6 text-sm pb-6 border-b border-gray-200">
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
          </ul>

          <div className="px-6 text-sm">
            <h4 className="font-bold pb-3">Aceita</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-3">
                {place.items.map((item, i) => (
                  <span key={i} className="flex gap-1 items-center">
                    {itemIcon[item as keyof typeof itemIcon]}
                    {item}
                  </span>
                ))}
              </li>
            </ul>
          </div>

          <footer className="flex justify-center p-6 border-t border-gray-200">
            <Link
              href="https://www.google.com/maps/dir///@-23.611679,-46.6801928,15z/data=!4m2!4m1!3e0?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="blank"
            >
              <ButtonSecondary borderRadius="fullL" className="border-r-0">
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
      </div>
    </DialogContent>
  )
}
