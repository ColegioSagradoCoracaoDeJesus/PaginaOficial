'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageSquare, Calendar, GraduationCap, ChevronDown, Clock, Sparkles } from 'lucide-react'
import { Botao } from '../ui/Botao'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>('inst')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
      {/* Top Header Bar */}
      <div className="bg-[#1E3A5F] text-white text-xs py-2 px-4 border-b border-[#152A47]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href="tel:5332325531" className="hover:underline">(53) 3232-5531</a>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
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
            <Link href="/tecnologia-educacional" className="text-white hover:text-amber-300 underline font-medium text-xs">
              Portal do Aluno / Plataformas
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className={`max-w-[1280px] mx-auto px-4 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3 sm:py-4'}`}>
        {/* Brand Logo - High Resolution & Enlarged */}
        <Link href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md py-1 shrink-0">
          <img
            src="/logotipo.png"
            alt="Colégio Sagrado Coração de Jesus - 70 Anos"
            className={`w-auto transition-all duration-300 object-contain group-hover:scale-[1.02] ${
              isScrolled
                ? 'h-14 sm:h-16 md:h-20 max-w-[220px] sm:max-w-[280px] md:max-w-[340px]'
                : 'h-20 sm:h-24 md:h-28 max-w-[260px] sm:max-w-[340px] md:max-w-[420px]'
            }`}
          />
        </Link>

        {/* Desktop Categorized Navigation */}
        <nav aria-label="Navegação Principal" className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link
            href="/"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === '/' ? 'bg-[#1E3A5F] text-white font-semibold shadow-sm' : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
            }`}
          >
            Início
          </Link>

          {/* Dropdown Institucional */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                ['/nossa-historia', '/diferenciais', '/nossa-estrutura'].includes(pathname)
                  ? 'text-[#1E3A5F] font-semibold bg-slate-100'
                  : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
              }`}
            >
              <span>Institucional</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-500" />
            </button>
            <div className="absolute left-0 top-full pt-1.5 hidden group-hover:block w-60 z-50 animate-fadeIn">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1">
                <Link
                  href="/nossa-historia"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Nossa História
                </Link>
                <Link
                  href="/diferenciais"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Diferenciais Pedagógicos
                </Link>
                <Link
                  href="/nossa-estrutura"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Nossa Estrutura
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/ensino"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === '/ensino' ? 'bg-[#1E3A5F] text-white font-semibold shadow-sm' : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
            }`}
          >
            Ensino
          </Link>

          {/* Special 70 Anos Link */}
          <Link
            href="/70-anos"
            className={`px-3 py-2 rounded-md text-sm font-semibold transition-all flex items-center gap-1.5 ${
              pathname === '/70-anos'
                ? 'bg-[#B8860B] text-white shadow'
                : 'bg-amber-50 text-[#B8860B] border border-amber-300/60 hover:bg-[#B8860B] hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:text-white" />
            <span>70 Anos</span>
          </Link>

          {/* Dropdown Estrutura & Espaços */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                ['/locacao-de-espacos', '/vivencie-o-sagrado'].includes(pathname)
                  ? 'text-[#1E3A5F] font-semibold bg-slate-100'
                  : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
              }`}
            >
              <span>Estrutura & Espaços</span>
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 text-slate-500" />
            </button>
            <div className="absolute left-0 top-full pt-1.5 hidden group-hover:block w-64 z-50 animate-fadeIn">
              <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2 space-y-1">
                <Link
                  href="/locacao-de-espacos"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Locação de Auditório & Ginásio
                </Link>
                <Link
                  href="/vivencie-o-sagrado"
                  className="block px-3 py-2 rounded-lg text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1E3A5F] font-medium"
                >
                  Vivencie o Sagrado
                </Link>
              </div>
            </div>
          </div>

          <Link
            href="/noticias"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === '/noticias' ? 'bg-[#1E3A5F] text-white font-semibold shadow-sm' : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
            }`}
          >
            Notícias
          </Link>

          <Link
            href="/matriculas"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === '/matriculas' ? 'bg-[#1E3A5F] text-white font-semibold shadow-sm' : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
            }`}
          >
            Matrículas
          </Link>

          <Link
            href="/contato"
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              pathname === '/contato' ? 'bg-[#1E3A5F] text-white font-semibold shadow-sm' : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
            }`}
          >
            Contato
          </Link>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Botao href="/contato#agendar-visita" variant="accent" size="sm">
              <Calendar className="w-4 h-4" />
              <span>Agende uma Visita</span>
            </Botao>
          </div>

          {/* Mobile Sandwich Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="lg:hidden p-2.5 text-slate-800 hover:text-[#1E3A5F] hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[115px] bottom-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-end animate-fadeIn">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#1E3A5F]" />
                  <span className="font-bold text-slate-900 text-sm">Menu Institucional</span>
                </div>
                <span className="text-xs font-bold bg-[#B8860B] text-white px-2 py-0.5 rounded">70 Anos</span>
              </div>

              <nav className="flex flex-col gap-2">
                <Link
                  href="/"
                  className="px-4 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  Início
                </Link>

                {/* Mobile Accordion: Institucional */}
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
                      <Link href="/diferenciais" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Diferenciais Pedagógicos</Link>
                      <Link href="/nossa-estrutura" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Nossa Estrutura</Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/ensino"
                  className="px-4 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-100"
                >
                  Ensino
                </Link>

                <Link
                  href="/70-anos"
                  className="px-4 py-2.5 rounded-md text-sm font-semibold bg-amber-50 text-[#B8860B] border border-amber-200 flex items-center justify-between"
                >
                  <span>70 Anos Comemoração</span>
                  <Sparkles className="w-4 h-4 text-amber-500" />
                </Link>

                {/* Mobile Accordion: Estrutura & Espaços */}
                <div className="border border-slate-100 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleMobileAccordion('espacos')}
                    className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-slate-800 bg-slate-50"
                  >
                    <span>Estrutura & Espaços</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${openMobileAccordion === 'espacos' ? 'rotate-180' : ''}`} />
                  </button>
                  {openMobileAccordion === 'espacos' && (
                    <div className="p-2 space-y-1 bg-white border-t border-slate-100">
                      <Link href="/locacao-de-espacos" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Locação de Espaços</Link>
                      <Link href="/vivencie-o-sagrado" className="block px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 rounded">Vivencie o Sagrado</Link>
                    </div>
                  )}
                </div>

                <Link href="/noticias" className="px-4 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-100">Notícias</Link>
                <Link href="/matriculas" className="px-4 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-100">Matrículas</Link>
                <Link href="/contato" className="px-4 py-2.5 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-100">Contato</Link>
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
