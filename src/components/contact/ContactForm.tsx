'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import { SECTORS, COMPANY_SIZES, BUDGETS } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(2, 'Nom requis (min. 2 caractères)'),
  email: z.string().email('Email professionnel invalide'),
  company: z.string().min(1, 'Entreprise requise'),
  position: z.string().optional(),
  sector: z.string().optional(),
  companySize: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, 'Message trop court (min. 20 caractères)'),
  gdpr: z.boolean().refine((val) => val === true, 'Le consentement est requis'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      gdpr: false,
    },
  })

  const selectedSize = watch('companySize')
  const selectedBudget = watch('budget')

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Erreur lors de l\'envoi')
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center p-12 text-center bg-bg-card rounded-2xl border border-border-subtle"
      >
        <div className="rounded-full bg-accent-primary/10 p-4 mb-6">
          <CheckCircle2 className="h-12 w-12 text-accent-primary" />
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-4">Demande envoyée !</h3>
        <p className="text-text-secondary max-w-md">
          Merci pour votre message. Un de nos experts prendra contact avec vous sous 24h pour discuter de votre projet de transformation IA.
        </p>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-bg-card p-8 rounded-2xl border border-border-subtle">
      {status === 'error' && (
        <div className="p-4 rounded-md bg-red-500/10 border border-red-500/20 flex items-start text-red-400">
          <AlertCircle className="h-5 w-5 mr-3 shrink-0 mt-0.5" />
          <p className="text-sm">Une erreur est survenue lors de l'envoi. Veuillez réessayer ou nous contacter directement par email.</p>
        </div>
      )}

      {/* Informations de base */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Nom complet *</label>
          <input
            {...register('name')}
            disabled={status === 'loading'}
            className="w-full bg-bg-secondary border border-border-subtle rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary disabled:opacity-50 transition-colors"
            placeholder="Jean Dupont"
          />
          {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Email professionnel *</label>
          <input
            {...register('email')}
            type="email"
            disabled={status === 'loading'}
            className="w-full bg-bg-secondary border border-border-subtle rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary disabled:opacity-50 transition-colors"
            placeholder="jean.dupont@entreprise.com"
          />
          {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Entreprise *</label>
          <input
            {...register('company')}
            disabled={status === 'loading'}
            className="w-full bg-bg-secondary border border-border-subtle rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary disabled:opacity-50 transition-colors"
            placeholder="Nom de l'entreprise"
          />
          {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company.message}</p>}
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium text-white">Poste occupé</label>
          <input
            {...register('position')}
            disabled={status === 'loading'}
            className="w-full bg-bg-secondary border border-border-subtle rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary disabled:opacity-50 transition-colors"
            placeholder="Ex: Directeur de l'Innovation"
          />
        </div>
      </div>

      {/* Sélecteurs */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Secteur d'activité</label>
        <select
          {...register('sector')}
          disabled={status === 'loading'}
          className="w-full bg-bg-secondary border border-border-subtle rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary disabled:opacity-50 appearance-none transition-colors"
        >
          <option value="">Sélectionnez un secteur...</option>
          {SECTORS.map((sector) => (
            <option key={sector} value={sector}>{sector}</option>
          ))}
        </select>
      </div>

      {/* Pills pour Taille et Budget */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-sm font-medium text-white">Taille de l'entreprise</label>
          <div className="flex flex-wrap gap-2">
            {COMPANY_SIZES.map((size) => (
              <button
                key={size}
                type="button"
                disabled={status === 'loading'}
                onClick={() => setValue('companySize', size)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors disabled:opacity-50 ${
                  selectedSize === size 
                    ? 'bg-accent-primary border-accent-primary text-black' 
                    : 'bg-bg-secondary border-border-subtle text-text-secondary hover:text-white hover:border-white/30'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-white">Budget estimé</label>
          <div className="flex flex-wrap gap-2">
            {BUDGETS.map((budget) => (
              <button
                key={budget}
                type="button"
                disabled={status === 'loading'}
                onClick={() => setValue('budget', budget)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-colors disabled:opacity-50 ${
                  selectedBudget === budget 
                    ? 'bg-accent-primary border-accent-primary text-black' 
                    : 'bg-bg-secondary border-border-subtle text-text-secondary hover:text-white hover:border-white/30'
                }`}
              >
                {budget}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-white">Votre message *</label>
        <textarea
          {...register('message')}
          disabled={status === 'loading'}
          rows={5}
          className="w-full bg-bg-secondary border border-border-subtle rounded-md py-3 px-4 text-white focus:outline-none focus:border-accent-primary focus:ring-1 focus:ring-accent-primary disabled:opacity-50 resize-y transition-colors"
          placeholder="Décrivez brièvement vos enjeux, objectifs ou le cas d'usage que vous souhaitez explorer..."
        />
        {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>}
      </div>

      {/* RGPD */}
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            {...register('gdpr')}
            id="gdpr"
            type="checkbox"
            disabled={status === 'loading'}
            className="w-4 h-4 rounded border-border-subtle text-accent-primary focus:ring-accent-primary bg-bg-secondary"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="gdpr" className="text-text-secondary">
            En soumettant ce formulaire, j'accepte que les informations saisies soient exploitées dans le cadre de la demande de contact et de la relation commerciale qui peut en découler. *
          </label>
          {errors.gdpr && <p className="text-xs text-red-400 mt-1">{errors.gdpr.message}</p>}
        </div>
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          'Envoyer ma demande →'
        )}
      </Button>
    </form>
  )
}
