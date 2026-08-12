'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageSquare, Calendar, GraduationCap, ChevronDown, Clock, Sparkles, BookOpen, PhoneCall } from 'lucide-react'
import { Botao } from '../ui/Botao'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>('inst')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMobileAccordion = (key: string) => {
    setOpenMobileAccordion(openMobileAccordion === key ? null : key)
  }

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-md transition-all duration-300">
      {/* Top Bar (Info & Utility Links) */}
      <div className="bg-[#152A47] text-white text-xs py-1.5 px-4 border-b border-[#1A3356]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href="tel:5332325531" className="hover:underline hover:text-white">(53) 3232-5531</a>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium text-slate-200">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Atendimento: 07h30 às 17h30</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium text-emerald-300">
              <MessageSquare className="w-3.5 h-3.5" />
              <a href="https://wa.me/55533232-5531" target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp Secretaria
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block bg-[#B8860B]/20 text-amber-200 border border-[#B8860B]/40 px-2.5 py-0.5 rounded text-[11px] font-semibold">
              ✨ 70 Anos Formando Gerações (1956 - 2026)
            </span>
            <Link href="/tecnologia-educacional" className="text-slate-200 hover:text-amber-300 underline font-medium text-xs">
              Portal do Aluno / Plataformas
            </Link>
          </div>
        </div>
      </div>

      {/* Tier 1: Main Branding Row (Giant Logo + Quick CTAs) */}
      <div className={`max-w-[1280px] mx-auto px-4 flex items-center justify-between transition-all duration-300 ${
        isScrolled ? 'py-1.5 sm:py-2' : 'py-3 sm:py-5'
      }`}>
        {/* GIANT OFFICIAL LOGO PNG */}
        <Link href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md shrink-0 py-1">
          <img
            src="/logotipo.png?v=3"
            alt="Colégio Sagrado Coração de Jesus - 70 Anos"
            className={`w-auto transition-all duration-300 object-contain group-hover:scale-[1.01] ${
              isScrolled
                ? 'h-14 sm:h-18 md:h-22 max-w-[260px] sm:max-w-[360px] md:max-w-[440px]'
                : 'h-24 sm:h-32 md:h-40 lg:h-44 max-w-[320px] sm:max-w-[480px] md:max-w-[600px]'
            }`}
          />
        </Link>

        {/* CTAs on Tier 1 (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <Botao href="/contato#agendar-visita" variant="accent" size="md">
            <Calendar className="w-4 h-4" />
            <span>Agende uma Visita</span>
          </Botao>

          <Link
            href="/matriculas"
            className="px-5 py-2.5 rounded-lg text-sm font-bold bg-[#1E3A5F] text-white hover:bg-[#152A47] transition-all shadow-md hover:shadow-lg flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>Matrículas 2026</span>
          </Link>
        </div>

        {/* Mobile Sandwich Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          className="lg:hidden p-2.5 text-slate-800 hover:text-[#1E3A5F] hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Tier 2: Dedicated Navigation Bar (Desktop) */}
      <div className="hidden lg:block bg-[#1E3A5F] text-white border-t border-[#152A47]">
        <div className="max-w-[1280px] mx-auto px-4 flex items-center justify-between">
          <nav aria-label="Navegação Principal" className="flex items-center gap-1 xl:gap-2 py-1">
            <Link
              href="/"
              className={`px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                pathname === '/' ? 'bg-[#152A47] text-white font-bold' : 'text-slate-100 hover:bg-[#152A47] hover:text-amber-300'
              }`}
            >
              Início
            </Link>

            {/* Dropdown 1: Institucional */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  ['/nossa-historia', '/70-anos', '/diferenciais', '/vivencie-o-sagrado'].includes(pathname)
                    ? 'bg-[#152A47] text-white font-bold'
                    : 'text-slate-100 hover:bg-[#152A47] hover:text-amber-300'
                }`}
              >
                <span>Institucional</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-amber-400" />
              </button>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-64 z-50 animate-fadeIn">
                <div className="bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-2 space-y-1">
                  <Link
                    href="/nossa-historia"
                    className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#1E3A5F] font-medium"
                  >
                    Nossa História
                  </Link>
                  <Link
                    href="/70-anos"
                    className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm text-[#B8860B] font-semibold hover:bg-amber-50"
                  >
                    <span>70 Anos (1956 - 2026)</span>
                    <Sparkles className="w-4 h-4 text-amber-500" />
                  </Link>
                  <Link
                    href="/diferenciais"
                    className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#1E3A5F] font-medium"
                  >
                    Diferenciais Pedagógicos
                  </Link>
                  <Link
                    href="/vivencie-o-sagrado"
                    className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#1E3A5F] font-medium"
                  >
                    Vivencie o Sagrado
                  </Link>
                </div>
              </div>
            </div>

            {/* Dropdown 2: Ensino & Câmpus */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  ['/ensino', '/nossa-estrutura', '/locacao-de-espacos'].includes(pathname)
                    ? 'bg-[#152A47] text-white font-bold'
                    : 'text-slate-100 hover:bg-[#152A47] hover:text-amber-300'
                }`}
              >
                <span>Ensino & Câmpus</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-amber-400" />
              </button>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-72 z-50 animate-fadeIn">
                <div className="bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-2 space-y-1">
                  <Link
                    href="/ensino"
                    className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#1E3A5F] font-medium"
                  >
                    Modalidades de Ensino
                  </Link>
                  <Link
                    href="/nossa-estrutura"
                    className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#1E3A5F] font-medium"
                  >
                    Nossa Estrutura & Câmpus
                  </Link>
                  <Link
                    href="/locacao-de-espacos"
                    className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#1E3A5F] font-medium"
                  >
                    Locação de Ginásio & Auditório
                  </Link>
                </div>
              </div>
            </div>

            {/* Dropdown 3: Comunicação */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1.5 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  ['/noticias', '/contato'].includes(pathname)
                    ? 'bg-[#152A47] text-white font-bold'
                    : 'text-slate-100 hover:bg-[#152A47] hover:text-amber-300'
                }`}
              >
                <span>Comunicação</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-amber-400" />
              </button>
              <div className="absolute left-0 top-full pt-1 hidden group-hover:block w-64 z-50 animate-fadeIn">
                <div className="bg-white text-slate-900 rounded-xl shadow-2xl border border-slate-200 p-2 space-y-1">
                  <Link
                    href="/noticias"
                    className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#1E3A5F] font-medium"
                  >
                    Aconteceu no Sagrado (Notícias)
                  </Link>
                  <Link
                    href="/contato"
                    className="block px-3.5 py-2.5 rounded-lg text-sm text-slate-700 hover:bg-slate-100 hover:text-[#1E3A5F] font-medium"
                  >
                    Fale Conosco & Localização
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="text-xs text-amber-300 font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Formando com excelência desde 1956</span>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[125px] bottom-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-end animate-fadeIn">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#1E3A5F]" />
                  <span className="font-bold text-slate-900 text-sm">Menu Institucional</span>
                </div>
                <span className="text-xs font-bold bg-[#B8860B] text-white px-2 py-0.5 rounded">70 Anos</span>
              </div>

              <nav className="flex flex-col gap-3">
                <Link
                  href="/"
                  className="px-4 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  Início
                </Link>

                {/* Mobile Accordion 1: Institucional */}
                <div className="border border-slate-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('inst')}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-50"
                  >
                    <span>Institucional</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobileAccordion === 'inst' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileAccordion === 'inst' && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      <Link href="/nossa-historia" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Nossa História</Link>
                      <Link href="/70-anos" className="block px-3 py-2 text-xs font-semibold text-[#B8860B] hover:bg-amber-50 rounded">70 Anos (1956 - 2026)</Link>
                      <Link href="/diferenciais" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Diferenciais Pedagógicos</Link>
                      <Link href="/vivencie-o-sagrado" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Vivencie o Sagrado</Link>
                    </div>
                  )}
                </div>

                {/* Mobile Accordion 2: Ensino & Câmpus */}
                <div className="border border-slate-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('ensino')}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-50"
                  >
                    <span>Ensino & Câmpus</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobileAccordion === 'ensino' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileAccordion === 'ensino' && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      <Link href="/ensino" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Modalidades de Ensino</Link>
                      <Link href="/nossa-estrutura" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Nossa Estrutura & Câmpus</Link>
                      <Link href="/locacao-de-espacos" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Locação de Espaços</Link>
                    </div>
                  )}
                </div>

                {/* Mobile Accordion 3: Comunicação */}
                <div className="border border-slate-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('comunicacao')}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-50"
                  >
                    <span>Comunicação</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobileAccordion === 'comunicacao' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileAccordion === 'comunicacao' && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      <Link href="/noticias" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Aconteceu no Sagrado (Notícias)</Link>
                      <Link href="/contato" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Fale Conosco & Localização</Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/matriculas"
                  className="px-4 py-2.5 rounded-md text-sm font-bold bg-[#1E3A5F] text-white text-center shadow"
                >
                  Matrículas 2026
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t mt-6 flex flex-col gap-3">
              <Botao href="/contato#agendar-visita" variant="accent" fullWidth size="md">
                <Calendar className="w-4 h-4" />
                <span>Agende uma Visita Guiada</span>
              </Botao>
              <Botao href="https://wa.me/55533232-5531" external variant="outline" fullWidth size="md">
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>Falar com a Secretaria</span>
              </Botao>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
