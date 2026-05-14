'use client'

import { useState } from 'react'

function fmtMoney(n: number) { return Math.round(n / 1000) + 'k €' }
function fmtNum(n: number) { return Math.round(n).toLocaleString('fr-FR') }

function Slider({
  label, value, min, max, step, suffix = '', onChange,
}: {
  label: string; value: number; min: number; max: number; step: number; suffix?: string; onChange: (v: number) => void
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <div className="roi-slider">
      <div className="roi-slider-head">
        <span className="label">{label}</span>
        <span className="roi-value">{value}{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        style={{ '--p': `${pct}%` } as React.CSSProperties}
        onChange={(e) => onChange(+e.target.value)}
      />
      <div className="roi-scale"><span>{min}{suffix}</span><span>{max}{suffix}</span></div>
    </div>
  )
}

export default function ROISection() {
  const [employees, setEmployees]         = useState(40)
  const [hourlyRate, setHourlyRate]       = useState(45)
  const [hoursPerWeek, setHoursPerWeek]   = useState(8)
  const [automation, setAutomation]       = useState(65)

  const hoursSavedPerWeek = (employees * hoursPerWeek * automation) / 100
  const hoursSavedYear    = hoursSavedPerWeek * 46
  const moneySavedYear    = hoursSavedYear * hourlyRate
  const projectCost       = Math.max(25000, Math.min(120000, employees * 800 + 20000))
  const paybackMonths     = projectCost / (moneySavedYear / 12)
  const roiX              = moneySavedYear / projectCost

  return (
    <section id="roi" className="roi-section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Calculateur</span>
          <div>
            <h2 className="section-title">
              Combien votre équipe pourrait{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>économiser par an ?</span>
            </h2>
            <p className="section-sub" style={{ marginTop: 20 }}>
              Estimation en temps réel basée sur les ratios moyens constatés sur nos 120+ projets.
              Ajustez les curseurs pour votre contexte.
            </p>
          </div>
        </div>

        <div className="roi-grid">
          <div className="roi-inputs" data-reveal>
            <Slider label="Collaborateurs concernés" value={employees} min={5} max={500} step={5} onChange={setEmployees} />
            <Slider label="Coût horaire moyen" value={hourlyRate} min={20} max={120} step={5} suffix=" €" onChange={setHourlyRate} />
            <Slider label="Heures/sem. sur tâches répétitives" value={hoursPerWeek} min={1} max={20} step={1} suffix="h" onChange={setHoursPerWeek} />
            <Slider label="Taux d'automatisation IA visé" value={automation} min={20} max={90} step={5} suffix="%" onChange={setAutomation} />
          </div>

          <div className="roi-results" data-reveal style={{ transitionDelay: '0.15s' }}>
            <div className="roi-result-head">
              <span className="label">Projection sur 12 mois</span>
              <span className="pulse" />
            </div>
            <div className="roi-big">
              <div className="roi-big-v">{fmtMoney(moneySavedYear)}</div>
              <div className="roi-big-l">économisés / an</div>
            </div>
            <div className="roi-sub-grid">
              <div className="roi-sub">
                <div className="roi-sub-v">{fmtNum(hoursSavedYear)}h</div>
                <div className="roi-sub-l">heures libérées / an</div>
              </div>
              <div className="roi-sub">
                <div className="roi-sub-v">{paybackMonths.toFixed(1)}</div>
                <div className="roi-sub-l">mois de payback</div>
              </div>
              <div className="roi-sub">
                <div className="roi-sub-v">{roiX.toFixed(1)}×</div>
                <div className="roi-sub-l">ROI sur l'investissement</div>
              </div>
              <div className="roi-sub">
                <div className="roi-sub-v">{fmtMoney(projectCost)}</div>
                <div className="roi-sub-l">investissement estimé</div>
              </div>
            </div>
            <a href="#contact" className="btn primary" style={{ alignSelf: 'flex-start', marginTop: 24 }}>
              Valider ces chiffres avec un expert
              <span className="arrow">→</span>
            </a>
            <p className="roi-disclaimer">
              Estimation indicative. Les chiffres réels dépendent de votre secteur, de la qualité
              de vos données et du périmètre d'automatisation. Nous chiffrons précisément lors du diagnostic.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
