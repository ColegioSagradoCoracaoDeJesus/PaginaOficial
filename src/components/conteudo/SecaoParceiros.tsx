import React from 'react'
import Image from 'next/image'
import { ExternalLink, Handshake } from 'lucide-react'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { EmpresaParceira } from '@/lib/sanity/queries'

interface SecaoParceirosProps {
  parceiros: EmpresaParceira[]
}

export function SecaoParceiros({ parceiros }: SecaoParceirosProps) {
  if (!parceiros || parceiros.length === 0) {
    return null
  }

  return (
    <section className="max-w-[1280px] mx-auto px-4 py-8">
      <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
        <Etiqueta variant="brand">Rede de Parcerias & Convênios</Etiqueta>
        <h2 className="font-display text-h1 font-bold text-slate-900 flex items-center justify-center gap-2">
          <Handshake className="w-8 h-8 text-[#1E3A5F]" />
          <span>Empresas & Instituições Parceiras</span>
        </h2>
        <p className="text-slate-600 text-body">
          Instituições e empresas que fortalecem nossa excelência acadêmica, inovação tecnológica e oferecem benefícios exclusivos para nossa comunidade escolar.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {parceiros.map((parceiro) => (
          <div
            key={parceiro._id}
            className="group bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1E3A5F]/40 transition-all flex flex-col items-center justify-between text-center relative"
          >
            {/* Logo container */}
            <div className="w-full h-20 relative flex items-center justify-center mb-3">
              {parceiro.logoUrl ? (
                <img
                  src={parceiro.logoUrl}
                  alt={parceiro.nome}
                  className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-slate-100 rounded flex items-center justify-center text-slate-700 font-bold text-xs">
                  {parceiro.nome}
                </div>
              )}
            </div>

            {/* Partner Info */}
            <div className="w-full space-y-1">
              {parceiro.categoria && (
                <span className="inline-block text-[10px] font-semibold text-amber-700 bg-amber-50 border border-amber-200/80 px-2 py-0.5 rounded-full">
                  {parceiro.categoria}
                </span>
              )}
              <h3 className="font-bold text-slate-900 text-xs sm:text-sm truncate w-full" title={parceiro.nome}>
                {parceiro.nome}
              </h3>
              {parceiro.descricao && (
                <p className="text-[11px] text-slate-500 line-clamp-2 leading-tight">
                  {parceiro.descricao}
                </p>
              )}
            </div>

            {/* Optional external link */}
            {parceiro.linkSite && (
              <a
                href={parceiro.linkSite}
                target="_blank"
                rel="noreferrer"
                className="mt-3 text-[11px] text-[#1E3A5F] hover:text-[#B8860B] font-semibold inline-flex items-center gap-1 hover:underline"
              >
                <span>Visitar Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
