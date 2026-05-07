/**
 * Static data constants for NexIA Advisory
 * Navigation, services, use cases, testimonials, metrics, FAQ
 */
import type { NavItem, Service, CasUsage, CasUsageCategory, Phase, Formation, Testimonial, Metric, FAQItem } from '@/types'

export const NAV_ITEMS: NavItem[] = [
  { label: 'Approche', href: '/approche' },
  { label: 'Services', href: '/services' },
  { label: 'Cas d\'usage', href: '/cas-usage' },
  { label: 'Formation', href: '/formation' },
  { label: 'Blog', href: '/blog' },
]

export const METRICS: Metric[] = [
  { value: 120, prefix: '+', suffix: '', label: 'Projets déployés' },
  { value: 2.4, prefix: '€', suffix: 'M', label: 'ROI généré' },
  { value: 98, suffix: '%', label: 'Satisfaction Client' },
]

export const PHASES: Phase[] = [
  {
    number: '01',
    title: 'Diagnostic Data & IA',
    duration: '2 semaines',
    description: 'Audit complet de votre écosystème data, identification des opportunités IA à fort impact et évaluation de la maturité digitale de votre organisation.',
    deliverables: ['Rapport d\'audit complet', 'Matrice ROI/Faisabilité', 'Shortlist d\'opportunités prioritaires'],
    methods: ['Interviews parties prenantes', 'Analyse de l\'existant data', 'Benchmark sectoriel'],
  },
  {
    number: '02',
    title: 'Stratégie & Roadmap',
    duration: '1 semaine',
    description: 'Co-construction d\'une feuille de route IA alignée sur vos objectifs business, avec un business case détaillé pour chaque cas d\'usage.',
    deliverables: ['Feuille de route 12 mois', 'Business case par use case', 'Plan de gouvernance IA'],
    methods: ['Ateliers de co-construction', 'Scoring ROI/faisabilité', 'Priorisation stratégique'],
  },
  {
    number: '03',
    title: 'Déploiement',
    duration: '4-12 semaines',
    description: 'Développement et mise en production de vos solutions IA avec une approche agile, des revues régulières et une documentation exhaustive.',
    deliverables: ['Agent IA en production', 'Documentation technique', 'Métriques de succès'],
    methods: ['Sprints agiles 2 semaines', 'Revues hebdomadaires', 'Tests & validation continue'],
  },
  {
    number: '04',
    title: 'Scale & Optimisation',
    duration: 'Continu',
    description: 'Accompagnement continu pour optimiser les performances, étendre les solutions à d\'autres départements et former vos équipes.',
    deliverables: ['Rapports de performance', 'Plan d\'expansion', 'Formation continue'],
    methods: ['Monitoring automatisé', 'Comités de pilotage mensuels', 'Amélioration continue'],
  },
]

export const SERVICES: Service[] = [
  {
    slug: 'diagnostic-data-ia',
    icon: 'Search',
    title: 'Diagnostic Data & IA',
    shortDesc: 'Audit 360° de votre écosystème data et identification des opportunités IA à fort ROI.',
    longDesc: 'Un diagnostic complet de votre maturité data et IA. Nous analysons vos données, processus et infrastructure pour identifier les cas d\'usage à plus fort impact business.',
    problem: 'Vous disposez de données mais ne savez pas par où commencer pour les exploiter avec l\'IA. Les opportunités sont floues, les risques mal évalués.',
    solution: 'Notre audit structuré en 2 semaines cartographie votre écosystème data, évalue chaque opportunité sur un score ROI/faisabilité et livre une feuille de route actionnable.',
    deliverables: ['Rapport d\'audit complet', 'Matrice ROI/Faisabilité', 'Feuille de route opérationnelle', 'Benchmark sectoriel'],
    tags: ['Audit Data', 'Quick Win', 'Faisabilité'],
    duration: '2 semaines',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    slug: 'strategie-roadmap',
    icon: 'Map',
    title: 'Stratégie & Roadmap IA',
    shortDesc: 'Feuille de route IA sur 12 mois alignée sur vos objectifs de croissance.',
    longDesc: 'Définition d\'une stratégie IA complète avec priorisation des cas d\'usage, gouvernance et plan de déploiement progressif.',
    problem: 'Vous avez identifié le potentiel de l\'IA mais manquez d\'une vision stratégique claire pour structurer vos investissements et prioriser les projets.',
    solution: 'Nous co-construisons une roadmap IA sur 12 mois avec des business cases solides, un modèle de gouvernance et des KPIs mesurables.',
    deliverables: ['Roadmap IA 12 mois', 'Business cases détaillés', 'Plan de gouvernance', 'Modèle de KPIs'],
    tags: ['Stratégie', 'Gouvernance', 'Roadmap'],
    duration: '1 semaine',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    slug: 'agents-ia-intelligents',
    icon: 'Bot',
    title: 'Agents IA Intelligents',
    shortDesc: 'Conception et déploiement d\'agents IA autonomes adaptés à vos processus métier.',
    longDesc: 'Développement d\'agents conversationnels et autonomes exploitant les LLMs de dernière génération, connectés à vos bases de connaissances internes.',
    problem: 'Vos équipes passent des heures sur des tâches répétitives : répondre aux mêmes questions, chercher des informations, rédiger des documents standardisés.',
    solution: 'Nous déployons des agents IA sur-mesure qui automatisent ces tâches en s\'appuyant sur vos données internes, avec une qualité de réponse contrôlée et traçable.',
    deliverables: ['Agent IA en production', 'Base de connaissances vectorielle', 'Dashboard de monitoring', 'Documentation technique'],
    tags: ['LLM', 'RAG', 'Chatbot', 'Agent'],
    duration: '4-8 semaines',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    slug: 'automatisation',
    icon: 'Zap',
    title: 'Automatisation Intelligente',
    shortDesc: 'Automatisez vos workflows grâce à l\'IA pour gagner en productivité.',
    longDesc: 'Identification et automatisation des processus métier à l\'aide de l\'IA : extraction de données, classification, génération de contenus, et orchestration de workflows.',
    problem: 'Des processus manuels chronophages freinent votre productivité et génèrent des erreurs coûteuses. Vos équipes sont mobilisées sur des tâches à faible valeur ajoutée.',
    solution: 'Nous identifions les workflows automatisables et déployons des solutions IA qui traitent les tâches répétitives avec précision, libérant vos équipes pour le stratégique.',
    deliverables: ['Workflows automatisés', 'Intégrations API', 'Rapports de performance', 'Guide utilisateur'],
    tags: ['RPA', 'Workflow', 'API', 'Productivité'],
    duration: '4-12 semaines',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    slug: 'formations-culture-ia',
    icon: 'GraduationCap',
    title: 'Formations & Culture IA',
    shortDesc: 'Montez en compétences sur l\'IA : du fondamental au prompt engineering avancé.',
    longDesc: 'Programmes de formation sur-mesure pour diffuser la culture IA dans votre organisation, du dirigeant aux équipes opérationnelles.',
    problem: 'Vos équipes ne maîtrisent pas les outils IA et résistent au changement. Le gap de compétences freine l\'adoption et le ROI de vos projets IA.',
    solution: 'Nos programmes de formation pratiques, adaptés à chaque niveau, accélèrent l\'adoption de l\'IA et transforment vos collaborateurs en utilisateurs avertis.',
    deliverables: ['Supports de formation', 'Ateliers pratiques', 'Certification interne', 'Plan d\'adoption'],
    tags: ['Formation', 'Prompting', 'Change Management'],
    duration: '1-3 jours',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    slug: 'solutions-sur-mesure',
    icon: 'Puzzle',
    title: 'Solutions Sur-Mesure',
    shortDesc: 'Développement de solutions IA propriétaires pour vos défis métier uniques.',
    longDesc: 'Conception et développement de solutions IA entièrement personnalisées pour répondre à des problématiques métier spécifiques qui ne trouvent pas de réponse dans les outils standards.',
    problem: 'Votre problématique métier est unique et aucune solution du marché ne répond précisément à vos besoins. Vous avez besoin d\'un outil IA taillé sur-mesure.',
    solution: 'Notre équipe conçoit et développe une solution IA propriétaire, de la spécification au déploiement, en intégrant vos contraintes techniques et réglementaires.',
    deliverables: ['Solution IA propriétaire', 'Architecture technique', 'Tests de performance', 'Maintenance & support'],
    tags: ['Custom', 'ML', 'Architecture', 'Production'],
    duration: '8-16 semaines',
    color: 'from-rose-500/20 to-pink-500/20',
  },
]

export const CAS_USAGE_CATEGORIES: CasUsageCategory[] = [
  { id: 'all', label: 'Tous', icon: 'LayoutGrid' },
  { id: 'relation-client', label: 'Relation Client', icon: 'MessageSquare' },
  { id: 'operations-data', label: 'Opérations & Data', icon: 'Database' },
  { id: 'marketing-vente', label: 'Marketing & Vente', icon: 'TrendingUp' },
  { id: 'finance-admin', label: 'Finance & Admin', icon: 'Calculator' },
  { id: 'juridique-rh', label: 'Juridique & RH', icon: 'Scale' },
]

export const CAS_USAGE: CasUsage[] = [
  { id: 'cu-01', category: 'relation-client', categoryLabel: 'Relation Client', icon: 'MessageSquare', title: 'Agents conversationnels / chatbots spécialisés', tags: ['LLM', 'RAG'], description: 'Déployez des chatbots intelligents capables de répondre aux questions complexes de vos clients en s\'appuyant sur votre base de connaissances interne.', benefits: ['Disponibilité 24/7', 'Réduction coûts support -40%', 'Satisfaction client améliorée'] },
  { id: 'cu-02', category: 'relation-client', categoryLabel: 'Relation Client', icon: 'Mic', title: 'Chatbots vocaux et callbots', tags: ['Speech-to-text', 'LLM', 'Text-to-Speech'], description: 'Agents vocaux capables de gérer des appels entrants, qualifier les demandes et résoudre les requêtes simples sans intervention humaine.', benefits: ['Réduction temps d\'attente', 'Traitement 24/7', 'Escalade intelligente'] },
  { id: 'cu-03', category: 'relation-client', categoryLabel: 'Relation Client', icon: 'Mail', title: 'Service client par mail automatique', tags: ['LLM'], description: 'Analyse automatique des emails entrants, classification par urgence et génération de réponses personnalisées en respectant votre ton de marque.', benefits: ['Temps de réponse divisé par 5', 'Cohérence des réponses', 'Priorisation automatique'] },
  { id: 'cu-04', category: 'relation-client', categoryLabel: 'Relation Client', icon: 'Languages', title: 'Traduction en temps réel', tags: ['Speech-to-text', 'LLM'], description: 'Traduction instantanée de conversations et documents dans plus de 50 langues, avec compréhension du contexte métier.', benefits: ['Communication globale fluide', 'Précision contextuelle', 'Support multilingue natif'] },
  { id: 'cu-05', category: 'operations-data', categoryLabel: 'Opérations & Data', icon: 'Search', title: 'Recherche sémantique avancée', tags: ['LLM', 'RAG'], description: 'Moteur de recherche interne qui comprend le sens de vos requêtes et retrouve l\'information pertinente dans toutes vos bases documentaires.', benefits: ['Recherche 10x plus rapide', 'Résultats contextualisés', 'Couverture multi-sources'] },
  { id: 'cu-06', category: 'operations-data', categoryLabel: 'Opérations & Data', icon: 'FileText', title: 'Lecture intelligente de documents', tags: ['LLM multimodal'], description: 'Extraction et synthèse automatique d\'informations depuis des documents complexes : contrats, rapports, factures, courriers.', benefits: ['Traitement en secondes', 'Extraction structurée', 'Réduction erreurs humaines'] },
  { id: 'cu-07', category: 'operations-data', categoryLabel: 'Opérations & Data', icon: 'BarChart3', title: 'Analyse de dossiers et génération de rapports', tags: ['LLM'], description: 'Analyse automatique de dossiers volumineux et génération de rapports structurés avec synthèse, points clés et recommandations.', benefits: ['Gain de temps -60%', 'Rapports standardisés', 'Analyses exhaustives'] },
  { id: 'cu-08', category: 'operations-data', categoryLabel: 'Opérations & Data', icon: 'AudioLines', title: 'Transcription automatique de réunions', tags: ['Speech-to-text', 'LLM'], description: 'Transcription en temps réel de vos réunions avec identification des intervenants, résumé automatique et extraction des actions à suivre.', benefits: ['Comptes-rendus instantanés', 'Suivi des actions', 'Archivage searchable'] },
  { id: 'cu-09', category: 'marketing-vente', categoryLabel: 'Marketing & Vente', icon: 'Package', title: 'Génération automatique de fiches produits', tags: ['LLM multimodal'], description: 'Création automatique de descriptions produits optimisées SEO à partir de photos et spécifications techniques.', benefits: ['Production x10 plus rapide', 'Cohérence de marque', 'Optimisation SEO native'] },
  { id: 'cu-10', category: 'marketing-vente', categoryLabel: 'Marketing & Vente', icon: 'TrendingUp', title: 'Automatisation de la gestion de leads', tags: ['LLM'], description: 'Scoring, qualification et nurturing automatique de vos leads entrants grâce à l\'analyse IA de leurs interactions et profils.', benefits: ['Conversion +35%', 'Qualification instantanée', 'Personnalisation à l\'échelle'] },
  { id: 'cu-11', category: 'marketing-vente', categoryLabel: 'Marketing & Vente', icon: 'Sparkles', title: 'Génération de contenus marketing', tags: ['LLM', 'Diffusion'], description: 'Création assistée de contenus marketing : articles de blog, posts réseaux sociaux, newsletters, avec respect de votre charte éditoriale.', benefits: ['Production de contenu x5', 'Ton de marque préservé', 'Multi-canal natif'] },
  { id: 'cu-12', category: 'marketing-vente', categoryLabel: 'Marketing & Vente', icon: 'Image', title: 'Génération automatique de visuels de vente', tags: ['GAN', 'Diffusion'], description: 'Création de visuels produits, bannières et supports de vente personnalisés à partir de templates et de directives de marque.', benefits: ['Visuels en minutes', 'Personnalisation masse', 'Coûts créatifs réduits'] },
  { id: 'cu-13', category: 'finance-admin', categoryLabel: 'Finance & Admin', icon: 'Calculator', title: 'Automatisation de la réconciliation comptable', tags: ['LLM', 'RAG'], description: 'Rapprochement automatique des écritures comptables, détection des anomalies et suggestions de corrections.', benefits: ['Temps de clôture -50%', 'Détection anomalies', 'Traçabilité complète'] },
  { id: 'cu-14', category: 'finance-admin', categoryLabel: 'Finance & Admin', icon: 'PieChart', title: 'Analyse automatique de rapports financiers', tags: ['LLM multimodal'], description: 'Extraction des KPIs clés depuis vos rapports financiers, comparaison historique et génération d\'insights automatiques.', benefits: ['Analyse en secondes', 'Détection de tendances', 'Alertes automatiques'] },
  { id: 'cu-15', category: 'finance-admin', categoryLabel: 'Finance & Admin', icon: 'Target', title: 'Génération de prévisions budgétaires', tags: ['LLM', 'Machine Learning'], description: 'Modèles prédictifs pour la planification budgétaire, intégrant données historiques, saisonnalité et variables macro-économiques.', benefits: ['Précision +25%', 'Scénarios multiples', 'Actualisation temps réel'] },
  { id: 'cu-16', category: 'finance-admin', categoryLabel: 'Finance & Admin', icon: 'Receipt', title: 'Extraction de données depuis factures', tags: ['LLM multimodal'], description: 'Extraction automatique des données de facturation (montants, dates, fournisseurs) et intégration directe dans votre ERP.', benefits: ['Saisie automatique', 'Erreurs réduites -90%', 'Intégration ERP directe'] },
  { id: 'cu-17', category: 'juridique-rh', categoryLabel: 'Juridique & RH', icon: 'Scale', title: 'Analyse et génération de documents juridiques', tags: ['LLM'], description: 'Revue automatique de clauses contractuelles, détection de risques juridiques et génération de documents standards.', benefits: ['Revue contractuelle x5', 'Détection de risques', 'Templates intelligents'] },
  { id: 'cu-18', category: 'juridique-rh', categoryLabel: 'Juridique & RH', icon: 'Captions', title: 'Génération de sous-titres pour vidéos', tags: ['Speech-to-text'], description: 'Transcription et sous-titrage automatique de vos contenus vidéo avec support multilingue et synchronisation précise.', benefits: ['Sous-titrage instantané', 'Accessibilité renforcée', 'Multi-langue'] },
  { id: 'cu-19', category: 'juridique-rh', categoryLabel: 'Juridique & RH', icon: 'UserCheck', title: 'Analyse de CVs et matching candidats', tags: ['LLM', 'RAG'], description: 'Parsing intelligent de CVs, matching automatique avec vos offres et scoring des candidats basé sur les compétences et l\'expérience.', benefits: ['Tri CV automatisé', 'Matching précis', 'Réduction time-to-hire'] },
  { id: 'cu-20', category: 'juridique-rh', categoryLabel: 'Juridique & RH', icon: 'FileSignature', title: 'Génération automatique de contrats types', tags: ['LLM'], description: 'Génération de contrats de travail, NDA et accords commerciaux personnalisés à partir de vos modèles et des informations saisies.', benefits: ['Génération en minutes', 'Conformité juridique', 'Personnalisation automatique'] },
]

export const FORMATIONS: Formation[] = [
  {
    icon: 'GraduationCap',
    title: 'Fondamentaux IA',
    duration: 'Demi-journée',
    audience: 'Tous collaborateurs',
    description: 'Sensibilisation aux fondamentaux de l\'IA et aux opportunités pour votre métier. Démystification, cas concrets et premières mises en pratique.',
    modules: ['Comprendre l\'IA et les LLMs', 'Cas d\'usage par secteur', 'Premiers pas avec les outils IA', 'Éthique et limites'],
    price: 'Sur devis',
  },
  {
    icon: 'Zap',
    title: 'IA Appliquée',
    duration: '2 jours',
    audience: 'Équipes opérationnelles',
    description: 'Formation pratique intensive : prompt engineering, RAG, outils no-code IA. Vos équipes repartent autonomes sur les outils IA du quotidien.',
    modules: ['Prompt engineering avancé', 'Construction de RAG', 'Outils no-code IA', 'Automatisation de workflows', 'Projet fil rouge'],
    price: 'Sur devis',
  },
  {
    icon: 'Trophy',
    title: 'Executive Program',
    duration: '3 jours + suivi',
    audience: 'Dirigeants & Managers',
    description: 'Programme stratégique pour les décideurs : vision, gouvernance, ROI et conduite du changement IA dans l\'entreprise.',
    modules: ['Vision stratégique IA', 'Gouvernance & éthique', 'Business case & ROI', 'Conduite du changement', 'Plan d\'action personnalisé', 'Suivi post-formation'],
    price: 'Sur devis',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sophie Marchand',
    role: 'Directrice de la Transformation',
    company: 'Groupe Industriel CAC 40',
    quote: 'NexIA a transformé notre approche de l\'IA. En 3 mois, nous avons déployé 4 agents qui automatisent 60% de notre support client. Le ROI est spectaculaire.',
  },
  {
    name: 'Thomas Durand',
    role: 'DSI',
    company: 'ETI Services Financiers',
    quote: 'La rigueur méthodologique et la qualité des livrables sont au niveau des meilleurs cabinets de conseil. Mais avec une vraie expertise IA, pas du PowerPoint.',
  },
  {
    name: 'Claire Lefebvre',
    role: 'DAF',
    company: 'Scale-up SaaS B2B',
    quote: 'Le diagnostic initial a identifié des opportunités que nous n\'avions pas envisagées. L\'automatisation de notre réconciliation comptable nous fait gagner 2 jours par mois.',
  },
]

export const FAQ_APPROCHE: FAQItem[] = [
  { question: 'Combien de temps dure un projet typique ?', answer: 'Un projet complet (du diagnostic au déploiement) dure généralement entre 6 et 16 semaines. Le diagnostic seul prend 2 semaines. Nous adaptons le rythme à vos contraintes organisationnelles.' },
  { question: 'Travaillez-vous avec tous les secteurs ?', answer: 'Oui. Notre méthodologie est sectorielle-agnostique, mais nous avons une expertise particulière dans la finance, l\'industrie, le retail et les services B2B. Chaque projet est adapté aux spécificités de votre secteur.' },
  { question: 'Quelles technologies utilisez-vous ?', answer: 'Nous sommes agnostiques technologiquement. Nous travaillons avec les LLMs de pointe (GPT-4, Claude, Mistral, Llama), les frameworks RAG, et les principales plateformes cloud (AWS, GCP, Azure). Le choix se fait en fonction de vos contraintes techniques et réglementaires.' },
  { question: 'Comment garantissez-vous la confidentialité de nos données ?', answer: 'NDA systématique, environnements de développement isolés, conformité RGPD native. Nous pouvons travailler en mode on-premise si nécessaire et n\'utilisons jamais vos données pour entraîner des modèles tiers.' },
  { question: 'Quel est le budget minimum pour un projet ?', answer: 'Nos missions démarrent à partir de 5 000€ pour un diagnostic data. Le budget dépend de la complexité, du nombre de cas d\'usage et du niveau d\'accompagnement souhaité. Nous fournissons un devis détaillé après la consultation initiale gratuite.' },
]

export const FAQ_FORMATION: FAQItem[] = [
  { question: 'Les formations sont-elles certifiantes ?', answer: 'Nos formations délivrent un certificat de complétion NexIA Advisory. Nous sommes en cours de certification Qualiopi pour permettre la prise en charge OPCO.' },
  { question: 'Peut-on personnaliser le contenu ?', answer: 'Absolument. Chaque formation est adaptée à votre secteur, vos outils et vos cas d\'usage spécifiques. Nous réalisons un brief préalable pour calibrer le contenu.' },
  { question: 'Quel est le format des formations ?', answer: 'Présentiel ou distanciel, en intra-entreprise uniquement. Groupes de 6 à 15 personnes pour garantir l\'interactivité et l\'accompagnement personnalisé.' },
]

export const SECTORS = [
  'Retail & E-commerce',
  'Finance & Assurance',
  'Industrie & Manufacturing',
  'Santé & Pharma',
  'Tech & SaaS',
  'Autre',
]

export const COMPANY_SIZES = ['1-50', '50-500', '500-5000', '+5000']
export const BUDGETS = ['< 20k€', '20-50k€', '50-100k€', '> 100k€', 'Non défini']
