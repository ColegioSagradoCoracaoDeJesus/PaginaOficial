'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import { Botao } from '../ui/Botao'

type GtagWindow = Window & {
  gtag?: (command: string, action: string, params: { analytics_storage: string }) => void
}

const updateAnalyticsConsent = (granted: boolean) => {
  if (typeof window === 'undefined') return
  ;(window as GtagWindow).gtag?.('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  })
}

export const AvisoCookies: React.FC = () => {
  const [showBanner, setShowBanner] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return !window.localStorage.getItem('sagrado_cookie_consent')
  })

  // Visitante que já aceitou em uma visita anterior: o script do GA4 sempre
  // inicia com analytics_storage 'denied' (padrão exigido pela LGPD) — sem
  // isso, quem já tinha aceitado ficaria com analytics desligado a cada nova
  // visita, já que só o clique em "Aceitar" atualizava o consentimento.
  useEffect(() => {
    if (window.localStorage.getItem('sagrado_cookie_consent') === 'accepted') {
      updateAnalyticsConsent(true)
    }
  }, [])

  const handleAccept = () => {
    window.localStorage.setItem('sagrado_cookie_consent', 'accepted')
    setShowBanner(false)
    updateAnalyticsConsent(true)
  }

  const handleReject = () => {
    window.localStorage.setItem('sagrado_cookie_consent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div
      role="region"
      aria-label="Aviso de Privacidade e Cookies (LGPD)"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-brand-dark/95 backdrop-blur-md text-white border-t-2 border-[#D97706] shadow-2xl animate-slideUp"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5 max-w-3xl">
          <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            <p className="font-semibold text-white mb-1">Valorizamos sua privacidade e transparência (LGPD)</p>
            <p>
              Utilizamos cookies para melhorar sua experiência de navegação e analisar o tráfego do site. Para mais detalhes sobre como tratamos seus dados pessoais, consulte nossa{' '}
              <Link href="/politica-de-privacidade" className="text-amber-300 hover:text-amber-200 underline font-medium">
                Política de Privacidade
              </Link>.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <Botao onClick={handleReject} variant="outline" size="sm" className="border-slate-400 text-slate-200 hover:bg-slate-800">
            Rejeitar
          </Botao>
          <Botao onClick={handleAccept} variant="accent" size="sm">
            Aceitar Todos
          </Botao>
        </div>
      </div>
    </div>
  )
}
