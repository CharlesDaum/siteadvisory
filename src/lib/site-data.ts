export const NAV_LINKS = [
  { label: 'Approche', href: '#approche' },
  { label: 'Services', href: '#services' },
  { label: "Cas d'usage", href: '#cas-usage' },
  { label: 'Manifeste', href: '#manifeste' },
]

export const METRICS = [
  { v: 120, prefix: '+', suffix: '', l: 'projets déployés' },
  { v: 2.4, prefix: '€', suffix: 'M', l: 'ROI généré client', decimals: 1 },
  { v: 98, suffix: '%', l: 'satisfaction' },
  { v: 8, prefix: '< ', suffix: ' sem.', l: 'délai prod. moyen' },
] as const

export const PAIN_POINTS = [
  {
    n: '01',
    t: "Des POC qui ne passent jamais en production",
    d: "73% des projets IA s'arrêtent au stade POC. Chaque mois supplémentaire sans mise en production représente en moyenne 40k€ de ressources mobilisées pour rien.",
  },
  {
    n: '02',
    t: "Des ESN qui rebadgent leurs consultants IT en experts IA",
    d: "Sans maîtrise réelle des LLMs, du RAG ou de l'évaluation des modèles, vous obtenez une architecture sous-optimale — et c'est vous qui portez le risque.",
  },
  {
    n: '03',
    t: "Des solutions déployées que personne n'utilise",
    d: "68% des outils IA tombent en désuétude dans les 6 mois. Un déploiement sans accompagnement au changement ne vaut rien, quel que soit son coût.",
  },
]

export const DIFFERENTIATORS = [
  { n: '01', t: "Spécialiste IA uniquement", d: "Pas de consulting IT généraliste rebadgé. Chaque consultant a construit et déployé des agents IA en production avant de rejoindre NexIA." },
  { n: '02', t: "Seniors exclusivement en mission", d: "La personne qui présente en réunion est celle qui code et déploie. Zéro junior en contact client, zéro délégation non déclarée." },
  { n: '03', t: "Production, pas des slides", d: "Chaque mission se conclut par une solution fonctionnelle avec un dashboard de KPIs. Un rapport de 80 pages sans livrable opérationnel n'est pas un résultat." },
  { n: '04', t: "Autonomie, pas dépendance", d: "Nous documentons, nous formons, nous transférons. À l'issue de chaque mission, vos équipes peuvent faire évoluer la solution sans nous." },
  { n: '05', t: "Indépendance technologique totale", d: "Aucun partenariat commercial avec les éditeurs. Nous recommandons ce qui convient à votre architecture — open-source, cloud ou on-premise." },
]

export const SERVICES = [
  { n: '01', t: 'Diagnostic Data & IA', d: "Cartographie de votre maturité data et shortlist des 5 à 10 opportunités IA à fort ROI — livrée en 2 semaines, chiffrée et priorisée.", tags: ['Audit', 'Quick Win', 'Faisabilité'], duration: '2 semaines' },
  { n: '02', t: 'Stratégie & Roadmap IA', d: "Roadmap IA 12 mois avec business case chiffré par cas d'usage — co-construite, validée par votre COMEX, prête à exécuter.", tags: ['Stratégie', 'Gouvernance', 'Roadmap'], duration: '1 semaine' },
  { n: '03', t: 'Agents IA intelligents', d: "Agents IA connectés à vos données internes, déployés en production avec monitoring continu. Support client, assistant métier, analyse documentaire.", tags: ['LLM', 'RAG', 'Chatbot'], duration: '4–8 sem.' },
  { n: '04', t: 'Automatisation intelligente', d: "Identification et suppression de vos goulots d'étranglement manuels. Vos équipes se concentrent sur les décisions, l'IA gère le reste.", tags: ['Workflow', 'API', 'RPA'], duration: '4–12 sem.' },
  { n: '05', t: 'Formations & Culture IA', d: "Sensibilisation dirigeante, hands-on opérationnel ou executive program. Contenu sur-mesure construit autour de vos cas d'usage réels.", tags: ['Prompting', 'Change'], duration: '1–3 jours' },
  { n: '06', t: 'Solutions sur-mesure', d: "De la spécification à la mise en production : votre solution IA propriétaire, intégrant vos contraintes réglementaires, architecturales et métier.", tags: ['Custom', 'ML', 'Production'], duration: '8–16 sem.' },
]

export const SERVICE_DEMOS: Record<string, { kind: string; [key: string]: unknown }> = {
  '01': {
    kind: 'audit',
    items: [
      { l: 'Sources data scannées', v: '14 systèmes', t: 230 },
      { l: 'Opportunités identifiées', v: '8 cas', t: 760 },
      { l: 'ROI annuel estimé', v: '€ 420k', t: 1280, accent: true },
      { l: 'Quick wins (< 4 sem.)', v: '3 cas', t: 1700 },
    ],
  },
  '02': {
    kind: 'roadmap',
    quarters: [
      { q: 'Q1', items: ['Pilote agent support', 'POC RAG légal'] },
      { q: 'Q2', items: ['Mise en prod agent', 'Auto. factures'] },
      { q: 'Q3', items: ['Scale agent v2', 'Diagnostic vente'] },
      { q: 'Q4', items: ['Plateforme commune', 'Formation N1'] },
    ],
  },
  '03': {
    kind: 'agent',
    log: [
      { t: 'recv', text: 'Question support reçue (#4729)' },
      { t: 'rag',  text: 'RAG → 3 documents pertinents' },
      { t: 'gen',  text: 'Génération de réponse (1.2s)' },
      { t: 'ok',   text: 'Envoi · résolu en 4s · score 0.94' },
    ],
  },
  '04': {
    kind: 'flow',
    nodes: ['Email entrant', 'Classification IA', 'Extraction de données', 'Insert ERP', 'Notification'],
  },
  '05': {
    kind: 'curriculum',
    modules: [
      { l: 'Fondamentaux LLM', d: '½ journée', for: 'Tous' },
      { l: 'Prompting avancé',  d: '1 journée', for: 'Ops' },
      { l: 'RAG hands-on',     d: '1 journée', for: 'Tech' },
      { l: 'Gouvernance IA',   d: '½ journée', for: 'COMEX' },
    ],
  },
  '06': {
    kind: 'stack',
    layers: [
      { l: 'UI · React, Next.js' },
      { l: 'API · FastAPI, gRPC' },
      { l: 'AI · Claude, Mistral, embeddings' },
      { l: 'Data · Postgres, pgvector, S3' },
      { l: 'Infra · GCP / on-prem' },
    ],
  },
}

export const PHASES = [
  {
    num: '01', t: 'Diagnostic', duration: '2 semaines',
    d: "Cartographie de vos données, processus et infrastructure. Nous identifions les 5 à 10 opportunités les plus rentables et chiffrons chaque ROI potentiel avec une matrice faisabilité/effort.",
    deliv: ["Rapport d'audit", 'Matrice ROI / faisabilité', "Shortlist d'opportunités"],
  },
  {
    num: '02', t: 'Stratégie', duration: '1 semaine',
    d: "Co-construction de votre feuille de route IA avec priorisation ROI/effort, modèle de gouvernance et plan d'exécution. Chaque ligne de la roadmap a un business case validé.",
    deliv: ['Feuille de route 12 mois', 'Business case', 'Plan de gouvernance'],
  },
  {
    num: '03', t: 'Déploiement', duration: '4–12 semaines',
    d: "Sprints de 2 semaines, livrables tangibles à chaque itération. La solution est testée, documentée et transférée à vos équipes avant la clôture — pas après.",
    deliv: ['Agent IA en production', 'Doc technique', 'KPIs mesurés'],
  },
  {
    num: '04', t: 'Scale', duration: 'Continu',
    d: "Monitoring des KPIs, optimisation continue et extension progressive à d'autres périmètres. L'objectif : l'autonomie totale de vos équipes à 12 mois, sans dépendance externe.",
    deliv: ['Reporting trimestriel', "Plan d'expansion", 'Formation continue'],
  },
]

export const USAGE_CATS = [
  { id: 'all', l: 'Tous' },
  { id: 'relation-client', l: 'Relation Client' },
  { id: 'operations-data', l: 'Opérations & Data' },
  { id: 'marketing-vente', l: 'Marketing & Vente' },
  { id: 'finance-admin', l: 'Finance & Admin' },
  { id: 'juridique-rh', l: 'Juridique & RH' },
]

export const USAGES = [
  { id: 'cu-01', cat: 'relation-client', t: 'Agents conversationnels spécialisés', tags: ['LLM', 'RAG'], d: 'Chatbots intelligents capables de répondre aux questions complexes en s\'appuyant sur votre base de connaissances.' },
  { id: 'cu-03', cat: 'relation-client', t: 'Service client par mail automatique', tags: ['LLM'], d: 'Analyse automatique des emails entrants, classification, génération de réponses dans votre ton de marque.' },
  { id: 'cu-08', cat: 'operations-data', t: 'Transcription automatique de réunions', tags: ['STT', 'LLM'], d: 'Transcription en temps réel avec identification des intervenants, résumé et extraction des actions à suivre.' },
  { id: 'cu-05', cat: 'operations-data', t: 'Recherche sémantique avancée', tags: ['LLM', 'RAG'], d: "Moteur de recherche interne qui comprend le sens des requêtes et retrouve l'information pertinente." },
  { id: 'cu-06', cat: 'operations-data', t: 'Lecture intelligente de documents', tags: ['LLM multimodal'], d: 'Extraction et synthèse depuis contrats, rapports, factures, courriers complexes.' },
  { id: 'cu-10', cat: 'marketing-vente', t: 'Automatisation gestion de leads', tags: ['LLM'], d: 'Scoring, qualification et nurturing automatique de vos leads entrants à partir de leurs interactions.' },
  { id: 'cu-11', cat: 'marketing-vente', t: 'Génération de contenus marketing', tags: ['LLM', 'Diffusion'], d: "Création assistée d'articles, posts, newsletters dans le respect de votre charte éditoriale." },
  { id: 'cu-13', cat: 'finance-admin', t: 'Réconciliation comptable automatisée', tags: ['LLM', 'RAG'], d: "Rapprochement automatique des écritures, détection d'anomalies et suggestions de corrections." },
  { id: 'cu-16', cat: 'finance-admin', t: 'Extraction de données factures', tags: ['LLM multimodal'], d: "Extraction automatique des données de facturation et intégration directe dans votre ERP." },
  { id: 'cu-17', cat: 'juridique-rh', t: 'Analyse de documents juridiques', tags: ['LLM'], d: 'Revue automatique de clauses contractuelles, détection de risques, génération de templates.' },
  { id: 'cu-19', cat: 'juridique-rh', t: 'Analyse CV & matching candidats', tags: ['LLM', 'RAG'], d: 'Parsing intelligent de CVs, matching automatique avec vos offres et scoring basé sur les compétences.' },
  { id: 'cu-20', cat: 'juridique-rh', t: 'Génération de contrats types', tags: ['LLM'], d: 'Génération de contrats de travail, NDA et accords commerciaux personnalisés à partir de vos modèles.' },
]

export const TESTIMONIALS = [
  {
    name: 'Sophie Marchand', role: 'Dir. Transformation',
    company: 'Groupe Industriel · CAC 40', initials: 'SM',
    quote: "En 3 mois, 4 agents déployés qui automatisent 60% de notre support client. Ils ont refusé de démarrer sans valider le business case. C'est rare.",
  },
  {
    name: 'Thomas Durand', role: 'DSI',
    company: 'ETI · Services Financiers', initials: 'TD',
    quote: "Rigueur des meilleurs cabinets, mais avec une vraie maîtrise technique des LLMs et du RAG. Pas du PowerPoint sur l'IA générative.",
  },
  {
    name: 'Claire Lefebvre', role: 'DAF',
    company: 'Scale-up · SaaS B2B', initials: 'CL',
    quote: "Opportunités que nous n'avions pas envisagées, réconciliation comptable automatisée : 2 jours gagnés par mois, opérationnel en 6 semaines.",
  },
]

export const COMMITMENTS = [
  {
    glyph: 'network',
    t: 'Indépendance technologique',
    d: "Aucun partenariat commercial avec les éditeurs. Nous recommandons ce qui performe le mieux pour votre architecture — open-source, propriétaire ou hybride.",
  },
  {
    glyph: 'shield',
    t: 'Souveraineté & sécurité',
    d: "Vos données d'entraînement et de production ne quittent jamais votre environnement. RGPD natif, Privacy by Design, déploiement on-premise sur demande.",
  },
  {
    glyph: 'graduation',
    t: 'Transfert de compétences',
    d: "Nous documentons ce que nous déployons et formons vos équipes à l'utiliser et l'étendre. À l'issue de chaque mission, vous continuez sans nous.",
  },
]

export const MARQUEE_ITEMS = [
  'Diagnostic data', 'Agents IA', 'RAG vectoriel', 'Stratégie IA',
  'Fine-tuning', 'AI Act', 'MLOps', 'Prompt engineering',
  'Multimodal', 'Gouvernance', 'Privacy by design', 'On‑premise',
]
