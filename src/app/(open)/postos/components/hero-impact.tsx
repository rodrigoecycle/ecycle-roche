'use client'

import Image from 'next/image'
import { Heading } from '@/components/heading'
import { Drop } from '@/components/icon/drop'
import { Farm } from '@/components/icon/farm'
import { Button } from '@/components/button'
import {
  MagnifyingGlassIcon,
  ShareIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { ButtonTertiary } from '@/components/button-tertiary'
import { usePollution } from '@/contexts/pollution'
import { useAmountBags } from '@/contexts/amount-bags'
import { useEffect } from 'react'

import Link from 'next/link'
import NumberFlow, { Format } from '@number-flow/react'

const format: Format = {
  notation: 'compact',
  compactDisplay: 'short',
  roundingMode: 'trunc',
}

export function HeroImpact() {
  const { calculatePollution, result } = usePollution()
  const { discardedCount: bags } = useAmountBags()

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.preventDefault() // Previne o comportamento padrão do link

    const targetId = event.currentTarget.getAttribute('href')?.substring(1) // Obtém o ID do destino
    if (targetId) {
      const targetElement = document.getElementById(targetId) // Encontra o elemento com o ID correspondente

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth', // Rolagem suave
          block: 'start', // Alinha ao topo da seção
        })
      }
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    calculatePollution(bags)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bags])

  return (
    <div className="flex bg-white overflow-hidden rounded-3xl rounded-tl-[110px] rounded-br-[110px] shadow-card duration-500 animate-in fade-in slide-in-from-top-8">
      <div className="overflow-hidden w-[584px] h-[400px]">
        <Image
          src="/comprimidos-rosa.jpg"
          width={584}
          height={870}
          alt=""
          priority
          className="aspect-146/1 object-cover w-auto h-auto !max-w-none max-h-full"
        />
      </div>

      <div className="flex flex-col justify-between p-12">
        <Heading as="h2">Você evitará poluir</Heading>

        <div className="flex flex-col gap-3 font-bold text-2xl text-dark-900 fill-dark-900">
          <p>
            <ShoppingBagIcon className="w-8 h-8 mr-2 inline-block" />
            para{' '}
            <strong className="text-primary font-black">
              <NumberFlow
                value={bags}
                trend={0}
                format={format}
                willChange
                continuous
              />
            </strong>{' '}
            {bags === 1 ? 'sacola' : 'sacolas'}
          </p>

          <p>
            <Drop className="w-8 h-8 mr-2" />
            de{' '}
            <strong className="text-primary font-black">
              <NumberFlow
                value={result ? result.water.minLiters : 0}
                trend={0}
                format={format}
                willChange
                continuous
              />
            </strong>{' '}
            até{' '}
            <strong className="text-primary font-black">
              <NumberFlow
                value={result ? result.water.maxLiters : 0}
                trend={0}
                format={format}
                willChange
                continuous
              />
            </strong>{' '}
            litros de água
          </p>

          <p>
            <Farm className="w-8 h-8 mr-2" />
            de{' '}
            <strong className="text-primary font-black">
              <NumberFlow
                value={result ? result.soil.minArea : 0}
                trend={0}
                format={format}
                willChange
                continuous
              />
            </strong>{' '}
            até{' '}
            <strong className="text-primary font-black">
              <NumberFlow
                value={result ? result.soil.maxArea : 0}
                trend={0}
                format={format}
                willChange
                continuous
              />
            </strong>{' '}
            m² de área
          </p>
        </div>

        <div className="flex gap-5">
          <Link href="#locais" onClick={handleScroll}>
            <Button className="flex items-center">
              <MagnifyingGlassIcon className="w-5 h-5 mr-2.5" />
              Ver locais
            </Button>
          </Link>

          <ButtonTertiary className="flex items-center">
            <ShareIcon className="w-5 h-5 mr-2.5" />
            Compartilhar
          </ButtonTertiary>
        </div>
      </div>
    </div>
  )
}
