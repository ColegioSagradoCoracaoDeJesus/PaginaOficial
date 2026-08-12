import React from 'react'
import { Phone, Mail, MapPin, Clock, MessageSquare, Instagram, Facebook, Youtube } from 'lucide-react'
import { MigalhaDePao } from '@/components/ui/MigalhaDePao'
import { Etiqueta } from '@/components/ui/Etiqueta'
import { FormVisitaModal } from '@/components/conteudo/FormVisitaModal'
import { DEFAULT_SITE_SETTINGS } from '@/lib/sanity/queries'

export const metadata = {
  title: 'Fale Conosco & Agende uma Visita',
  description: 'Entre em contato com a secretaria do Colégio Sagrado Coração de Jesus em Curitiba. Telefones, WhatsApp, localização e formulário de agendamento.',
}

export default function ContatoPage() {
  const settings = DEFAULT_SITE_SETTINGS

  return (
    <div>
      <MigalhaDePao items={[{ label: 'Contato & Visita' }]} />

      <section className="bg-[#1E3A5F] text-white py-16 px-4">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <Etiqueta variant="anniversary">Atendimento Acolhedor</Etiqueta>
          <h1 className="font-display text-h1 font-bold text-white">Fale Conosco & Agende uma Visita</h1>
          <p className="text-slate-200 text-body max-w-2xl mx-auto leading-relaxed">
            Estamos de portas abertas para atender sua família. Entre em contato pelos canais oficiais ou agende seu horário.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-4 py-16 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Institutional Contact Cards (RF15) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm space-y-6">
              <h2 className="font-display font-bold text-2xl text-slate-900 border-b pb-3">Canais de Atendimento</h2>

              <ul className="space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-50 text-[#D97706] rounded-md shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Endereço</h3>
                    <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">{settings.endereco}</p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2.5 bg-[#1E3A5F]/10 text-[#1E3A5F] rounded-md shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Telefones Fixo</h3>
                    <div className="flex flex-col text-xs text-slate-600 mt-0.5">
                      {settings.telefones.map((tel, idx) => (
                        <a key={idx} href={`tel:${tel.replace(/\D/g, '')}`} className="hover:underline">
                          {tel}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-md shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">WhatsApp da Secretaria</h3>
                    <a
                      href={`https://wa.me/${settings.whatsapp}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-emerald-600 hover:underline mt-0.5 block"
                    >
                      (41) 99999-7000 (Clique para iniciar conversa)
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2.5 bg-slate-100 text-slate-700 rounded-md shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">E-mail Institucional</h3>
                    <a href={`mailto:${settings.email}`} className="text-xs text-slate-600 hover:underline mt-0.5 block truncate">
                      {settings.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-50 text-[#B8860B] rounded-md shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Horário de Funcionamento</h3>
                    <p className="text-xs text-slate-600 mt-0.5">{settings.horarioAtendimento}</p>
                  </div>
                </li>
              </ul>

              {/* Social links */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="font-bold text-xs text-slate-500 uppercase tracking-wider mb-3">Redes Sociais Oficiais</h3>
                <div className="flex items-center gap-3">
                  <a href={settings.redesSociais.instagram} target="_blank" rel="noreferrer" className="p-2 bg-slate-100 hover:bg-[#1E3A5F] hover:text-white text-slate-700 rounded-full transition-colors" title="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={settings.redesSociais.facebook} target="_blank" rel="noreferrer" className="p-2 bg-slate-100 hover:bg-[#1E3A5F] hover:text-white text-slate-700 rounded-full transition-colors" title="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href={settings.redesSociais.youtube} target="_blank" rel="noreferrer" className="p-2 bg-slate-100 hover:bg-[#1E3A5F] hover:text-white text-slate-700 rounded-full transition-colors" title="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Agendar Visita Form */}
          <div className="lg:col-span-7">
            <FormVisitaModal />
          </div>
        </div>

        {/* Embedded Google Map (RF15) */}
        <section className="space-y-4">
          <h2 className="font-display font-bold text-2xl text-slate-900">Nossa Localização</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden border border-slate-300 shadow-md bg-slate-100">
            <iframe
              src={settings.linkMapaEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização do Colégio Sagrado Coração de Jesus"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
