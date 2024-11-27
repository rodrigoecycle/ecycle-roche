import { AmountBagsProvider } from '@/contexts/amount-bags'
import { CepSelectedProvider } from '@/contexts/cep-selected'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <AmountBagsProvider>
      <CepSelectedProvider>
        <div className="flex flex-col mx-auto max-w-[1170px] px-14 pb-10 box-content">
          <header className="py-6">
            <Link href="/">
              <Image src="/logo.svg" width={70} height={40} alt="Roche" />
            </Link>
          </header>
          <main className="mt-12">{children}</main>
        </div>
      </CepSelectedProvider>
    </AmountBagsProvider>
  )
}
