import React from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BotaoWhatsApp } from '@/components/layout/BotaoWhatsApp'
import { AvisoCookies } from '@/components/layout/AvisoCookies'
import { getSiteSettings } from '@/lib/sanity/queries'

export const dynamic = 'force-dynamic'

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const settings = await getSiteSettings()

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-slate-900 selection:bg-amber-200 selection:text-slate-900">
      <Header settings={settings} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
      <BotaoWhatsApp whatsapp={settings.whatsapp} />
      <AvisoCookies />
    </div>
  )
}
