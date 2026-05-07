import { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import { MapPin, Mail, Globe, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contactez NexIA Advisory',
  description: 'Discutons de votre projet de transformation IA. Nos experts sont à votre écoute pour une consultation initiale gratuite.',
}

export default function ContactPage() {
  return (
    <section className="relative pt-32 pb-24 bg-bg-primary overflow-hidden min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute inset-0 z-0 bg-dot-pattern opacity-30 mix-blend-screen" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent-primary/5 to-transparent pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Colonne Gauche : Infos */}
          <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Prêt à accélérer votre <br className="hidden lg:block" />
              <span className="text-accent-primary">Transformation IA ?</span>
            </h1>
            
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              Parlons de vos enjeux. Remplissez le formulaire pour obtenir une consultation avec l'un de nos experts en IA.
            </p>

            <ul className="space-y-4 mb-12">
              <li className="flex items-center text-text-primary">
                <ArrowRight className="h-5 w-5 text-accent-primary mr-3" />
                Réponse sous 24h
              </li>
              <li className="flex items-center text-text-primary">
                <ArrowRight className="h-5 w-5 text-accent-primary mr-3" />
                Consultation initiale gratuite
              </li>
              <li className="flex items-center text-text-primary">
                <ArrowRight className="h-5 w-5 text-accent-primary mr-3" />
                NDA disponible sur demande
              </li>
              <li className="flex items-center text-text-primary">
                <ArrowRight className="h-5 w-5 text-accent-primary mr-3" />
                Interlocuteur senior dédié
              </li>
            </ul>

            <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-accent-primary mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Siège Social</h4>
                  <p className="text-text-secondary text-sm">Paris, France<br />(Intervention globale)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-accent-primary mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:contact@nexia-advisory.fr" className="text-text-secondary text-sm hover:text-white transition-colors">
                    contact@nexia-advisory.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Globe className="h-6 w-6 text-accent-primary mr-4 shrink-0" />
                <div>
                  <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                  <a href="#" className="text-text-secondary text-sm hover:text-white transition-colors">
                    /company/nexia-advisory
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne Droite : Formulaire */}
          <div className="w-full lg:w-7/12">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  )
}
