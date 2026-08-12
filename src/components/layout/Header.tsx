'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, MessageSquare, Calendar, GraduationCap, Award, MapPin, ChevronRight, Clock } from 'lucide-react'
import { Botao } from '../ui/Botao'
import { Etiqueta } from '../ui/Etiqueta'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Nossa História', href: '/nossa-historia' },
    { label: 'Ensino', href: '/ensino' },
    { label: '70 Anos', href: '/70-anos', isSpecial: true },
    { label: 'Vivencie o Sagrado', href: '/vivencie-o-sagrado' },
    { label: 'Diferenciais', href: '/diferenciais' },
    { label: 'Notícias', href: '/noticias' },
    { label: 'Estrutura', href: '/nossa-estrutura' },
    { label: 'Locação de Espaços', href: '/locacao-de-espacos' },
    { label: 'Matrículas', href: '/matriculas' },
    { label: 'Contato', href: '/contato' },
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm transition-all duration-300">
      {/* Top Header Bar */}
      <div className="bg-[#1E3A5F] text-white text-xs py-2 px-4 border-b border-[#152A47]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 font-medium">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href="tel:4133337000" className="hover:underline">(41) 3333-7000</a>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>Atendimento: 07h30 às 18h30</span>
            </span>
            <span className="flex items-center gap-1.5 font-medium text-emerald-300">
              <MessageSquare className="w-3.5 h-3.5" />
              <a href="https://wa.me/5541999997000" target="_blank" rel="noreferrer" className="hover:underline">
                WhatsApp Secretaria
              </a>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden lg:inline-block bg-[#B8860B]/20 text-amber-200 border border-[#B8860B]/40 px-2 py-0.5 rounded text-[11px] font-semibold">
              ✨ 70 Anos Formando Gerações (1956 - 2026)
            </span>
            <Link href="/tecnologia-educacional" className="text-white hover:text-amber-300 underline font-medium text-xs">
              Portal do Aluno / Plataformas
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className={`max-w-[1280px] mx-auto px-4 py-3 flex items-center justify-between transition-all ${isScrolled ? 'py-2.5' : 'py-4'}`}>
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-md p-1">
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-[#1E3A5F] to-[#152A47] text-white flex items-center justify-center font-display text-xl font-bold shadow-md border-2 border-[#B8860B] group-hover:scale-105 transition-transform">
            SCJ
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-slate-900 text-base sm:text-lg leading-tight tracking-tight group-hover:text-[#1E3A5F] transition-colors">
              Colégio Sagrado Coração
            </span>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-[#5C7A99] tracking-wider uppercase">de Jesus</span>
              <span className="text-[10px] font-bold bg-[#B8860B] text-white px-1.5 py-0.2 rounded">70 ANOS</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Navegação Principal" className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-xs sm:text-sm font-medium transition-all ${
                  link.isSpecial
                    ? 'bg-amber-500/10 text-[#B8860B] border border-amber-400/40 hover:bg-[#B8860B] hover:text-white font-semibold'
                    : isActive
                    ? 'bg-[#1E3A5F] text-white font-semibold shadow-sm'
                    : 'text-slate-700 hover:text-[#1E3A5F] hover:bg-slate-100'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
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
            className="xl:hidden p-2.5 text-slate-800 hover:text-[#1E3A5F] hover:bg-slate-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation (RF28) */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[108px] bottom-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-end animate-fadeIn">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-[#1E3A5F]" />
                  <span className="font-bold text-slate-900 text-sm">Menu Institucional</span>
                </div>
                <Etiqueta variant="anniversary" size="sm">70 Anos</Etiqueta>
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        link.isSpecial
                          ? 'bg-amber-50 text-[#B8860B] font-bold border border-amber-200'
                          : isActive
                          ? 'bg-[#1E3A5F] text-white font-semibold'
                          : 'text-slate-800 hover:bg-slate-100 hover:text-[#1E3A5F]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-60" />
                    </Link>
                  )
                })}
              </nav>
            </div>

            <div className="pt-6 border-t mt-6 flex flex-col gap-3">
              <Botao href="/contato#agendar-visita" variant="accent" fullWidth size="md">
                <Calendar className="w-4 h-4" />
                <span>Agende uma Visita Guiada</span>
              </Botao>
              <Botao href="https://wa.me/5541999997000" external variant="outline" fullWidth size="md">
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
