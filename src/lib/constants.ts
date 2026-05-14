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
    outcome: 'Un rapport d\'audit prêt à être présenté à votre board, avec 5 à 10 opportunités IA prioritaires chiffrées et scorées.',
  },
  {
    number: '02',
    title: 'Stratégie & Roadmap',
    duration: '1 semaine',
    description: 'Co-construction d\'une feuille de route IA alignée sur vos objectifs business, avec un business case détaillé pour chaque cas d\'usage.',
    deliverables: ['Feuille de route 12 mois', 'Business case par use case', 'Plan de gouvernance IA'],
    methods: ['Ateliers de co-construction', 'Scoring ROI/faisabilité', 'Priorisation stratégique'],
    outcome: 'Une roadmap IA 12 mois validée par votre COMEX, avec un business case ROI pour chaque initiative.',
  },
  {
    number: '03',
    title: 'Déploiement',
    duration: '4-12 semaines',
    description: 'Développement et mise en production de vos solutions IA avec une approche agile, des revues régulières et une documentation exhaustive.',
    deliverables: ['Agent IA en production', 'Documentation technique', 'Métriques de succès'],
    methods: ['Sprints agiles 2 semaines', 'Revues hebdomadaires', 'Tests & validation continue'],
    outcome: 'Une solution IA en production, utilisée par vos équipes, avec un dashboard de KPIs et la documentation complète.',
  },
  {
    number: '04',
    title: 'Scale & Optimisation',
    duration: 'Continu',
    description: 'Accompagnement continu pour optimiser les performances, étendre les solutions à d\'autres départements et former vos équipes.',
    deliverables: ['Rapports de performance', 'Plan d\'expansion', 'Formation continue'],
    methods: ['Monitoring automatisé', 'Comités de pilotage mensuels', 'Amélioration continue'],
    outcome: 'Des équipes internes autonomes qui font évoluer la solution sans dépendance externe, avec un ROI mesuré chaque trimestre.',
  },
]

export const SERVICES: Service[] = [
  {
    slug: 'diagnostic-data-ia',
    icon: 'Search',
    title: 'Diagnostic Data & IA',
    shortDesc: 'Cartographie de votre maturité data et shortlist des 5 à 10 opportunités IA à fort ROI — livrée en 2 semaines.',
    longDesc: 'En 2 semaines, nous cartographions votre maturité data, analysons vos processus et identifions vos opportunités IA les plus rentables — avec un chiffrage ROI/effort individuel pour chacune, prêt à présenter à votre board.',
    problem: 'Vous savez que l\'IA peut transformer vos opérations, mais les opportunités restent floues et les risques difficiles à évaluer. Résultat : l\'indécision coûte plus cher que le projet lui-même.',
    solution: 'Notre audit en 2 semaines cartographie l\'ensemble de votre écosystème data, score chaque opportunité sur un axe ROI/faisabilité et livre une feuille de route priorisée, actionnable immédiatement.',
    deliverables: ['Rapport d\'audit complet', 'Matrice ROI/Faisabilité', 'Feuille de route opérationnelle', 'Benchmark sectoriel'],
    tags: ['Audit Data', 'Quick Win', 'Faisabilité'],
    duration: '2 semaines',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    slug: 'strategie-roadmap',
    icon: 'Map',
    title: 'Stratégie & Roadmap IA',
    shortDesc: 'Roadmap IA 12 mois avec business case chiffré par cas d\'usage — validée par votre COMEX, prête à exécuter.',
    longDesc: 'Nous co-construisons avec vous une feuille de route IA sur 12 mois : priorisation des cas d\'usage, gouvernance, KPIs et plan de financement. Chaque initiative a un business case défendable — présentable à votre COMEX dès la fin de la semaine.',
    problem: 'Vous voyez le potentiel mais les projets s\'empilent sans priorisation claire. Les ressources sont dispersées et le premier résultat concret tarde à se matérialiser.',
    solution: 'En une semaine de co-construction intensive, nous structurons votre stratégie IA, priorisons les initiatives par ratio ROI/effort et posons les bases de gouvernance nécessaires à un déploiement serein.',
    deliverables: ['Roadmap IA 12 mois', 'Business cases détaillés', 'Plan de gouvernance', 'Modèle de KPIs'],
    tags: ['Stratégie', 'Gouvernance', 'Roadmap'],
    duration: '1 semaine',
    color: 'from-blue-500/20 to-indigo-500/20',
  },
  {
    slug: 'agents-ia-intelligents',
    icon: 'Bot',
    title: 'Agents IA Intelligents',
    shortDesc: 'Agents IA connectés à vos données internes, déployés en production en 4 à 8 semaines, avec monitoring continu.',
    longDesc: 'Conception et déploiement d\'agents IA sur-mesure — support client 24/7, assistant métier, analyse documentaire — connectés à vos bases de connaissances internes et opérationnels en production en 4 à 8 semaines.',
    problem: 'Vos équipes passent des heures sur des tâches répétitives à faible valeur ajoutée : répondre aux mêmes questions, chercher une information dans des dizaines de documents, rédiger des courriers standardisés.',
    solution: 'Nous déployons des agents IA entraînés sur vos données internes, avec des réponses contrôlées, traçables et auditables. Chaque agent est livré avec son dashboard de monitoring et sa documentation technique.',
    deliverables: ['Agent IA en production', 'Base de connaissances vectorielle', 'Dashboard de monitoring', 'Documentation technique'],
    tags: ['LLM', 'RAG', 'Chatbot', 'Agent'],
    duration: '4-8 semaines',
    color: 'from-violet-500/20 to-purple-500/20',
  },
  {
    slug: 'automatisation',
    icon: 'Zap',
    title: 'Automatisation Intelligente',
    shortDesc: 'Identification et suppression de vos goulots d\'étranglement manuels. Vos équipes se concentrent sur les décisions.',
    longDesc: 'Cartographie de vos processus chronophages, puis déploiement de workflows IA pour les automatiser : extraction de données, classification, génération de contenus structurés, orchestration entre systèmes.',
    problem: 'Vos équipes sont mobilisées sur des tâches manuelles répétitives qui génèrent des erreurs, des délais et de la frustration. Ces ressources devraient être concentrées sur des activités à forte valeur ajoutée.',
    solution: 'Nous identifions avec précision les workflows les plus coûteux à opérer manuellement et déployons des automations IA robustes, intégrées à vos outils existants, avec un suivi de performance en continu.',
    deliverables: ['Workflows automatisés', 'Intégrations API', 'Rapports de performance', 'Guide utilisateur'],
    tags: ['RPA', 'Workflow', 'API', 'Productivité'],
    duration: '4-12 semaines',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    slug: 'formations-culture-ia',
    icon: 'GraduationCap',
    title: 'Formations & Culture IA',
    shortDesc: 'Sensibilisation dirigeante, hands-on opérationnel ou executive program — contenus construits sur vos cas d\'usage réels.',
    longDesc: 'Programmes modulables construits autour de vos cas d\'usage concrets : sensibilisation pour tous les collaborateurs, formation pratique pour les équipes opérationnelles, programme stratégique pour les décideurs.',
    problem: 'La meilleure solution IA ne vaut rien si vos équipes ne s\'en emparent pas. Le scepticisme, le manque de compétences et la résistance au changement sabotent le ROI des projets les mieux conçus.',
    solution: 'Nos formations sont orientées à 70% sur la pratique, avec des exercices construits autour de vos outils et cas d\'usage réels. Vos collaborateurs repartent avec des habitudes de travail transformées, pas juste des slides.',
    deliverables: ['Supports de formation', 'Ateliers pratiques', 'Certification interne', 'Plan d\'adoption'],
    tags: ['Formation', 'Prompting', 'Change Management'],
    duration: '1-3 jours',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    slug: 'solutions-sur-mesure',
    icon: 'Puzzle',
    title: 'Solutions Sur-Mesure',
    shortDesc: 'De la spécification à la mise en production : votre solution IA propriétaire, sans compromis.',
    longDesc: 'Conception et développement de bout en bout d\'une solution IA propriétaire, pour des problématiques qui n\'ont pas de réponse dans les outils standards — en intégrant vos contraintes réglementaires, architecturales et métier.',
    problem: 'Votre problématique est trop spécifique pour les solutions packagées du marché. Vous avez besoin d\'une solution qui s\'adapte à votre architecture, vos données et vos contraintes de conformité.',
    solution: 'Nous concevons et développons votre solution IA de la spécification technique au déploiement en production, avec des revues de sprint toutes les 2 semaines, une documentation exhaustive et un transfert de compétences intégré.',
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
    description: 'Démystifiez l\'IA en demi-journée : comprendre ce que les LLMs peuvent — et ne peuvent pas — faire, identifier les opportunités dans votre métier, et prendre en main les outils sans assistance technique.',
    modules: ['Comprendre l\'IA et les LLMs', 'Cas d\'usage par secteur', 'Premiers pas avec les outils IA', 'Éthique et limites'],
    price: 'Sur devis',
  },
  {
    icon: 'Zap',
    title: 'IA Appliquée',
    duration: '2 jours',
    audience: 'Équipes opérationnelles',
    description: '2 jours de formation intensive, 70% pratique. Vos équipes opérationnelles repartent avec des workflows IA fonctionnels — construits pendant la formation sur leurs propres tâches quotidiennes.',
    modules: ['Prompt engineering avancé', 'Construction de RAG', 'Outils no-code IA', 'Automatisation de workflows', 'Projet fil rouge'],
    price: 'Sur devis',
  },
  {
    icon: 'Trophy',
    title: 'Executive Program',
    duration: '3 jours + suivi',
    audience: 'Dirigeants & Managers',
    description: '3 jours pour construire votre vision IA, structurer la gouvernance et bâtir un business case défendable — avec un plan d\'action personnalisé co-construit pendant le programme et un suivi à 30 jours.',
    modules: ['Vision stratégique IA', 'Gouvernance & éthique', 'Business case & ROI', 'Conduite du changement', 'Plan d\'action personnalisé', 'Suivi post-formation'],
    price: 'Sur devis',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sophie Marchand',
    role: 'Directrice de la Transformation',
    company: 'Groupe Industriel · CAC 40',
    companyInitials: 'CAC',
    companyColor: '#14B8A6',
    quote: 'En 3 mois, NexIA a déployé 4 agents qui automatisent 60% de notre support client. Ce qui m\'a frappé : ils ont refusé de démarrer le développement sans avoir validé le business case. C\'est rare.',
  },
  {
    name: 'Thomas Durand',
    role: 'Directeur des Systèmes d\'Information',
    company: 'ETI · Services Financiers',
    companyInitials: 'ETI',
    companyColor: '#F59E0B',
    quote: 'La rigueur des livrables est au niveau des meilleurs cabinets. Mais contrairement aux ESN, ils maîtrisent réellement les LLMs et le RAG — pas du PowerPoint sur l\'IA générative.',
  },
  {
    name: 'Claire Lefebvre',
    role: 'Directrice Administrative & Financière',
    company: 'Scale-up · SaaS B2B',
    companyInitials: 'SaaS',
    companyColor: '#6366F1',
    quote: 'Le diagnostic a mis en évidence des opportunités que nous n\'avions pas envisagées. La réconciliation comptable automatisée nous fait gagner 2 jours par mois — opérationnel en 6 semaines.',
  },
]

export const FAQ_APPROCHE: FAQItem[] = [
  { question: 'Combien de temps dure un projet typique ?', answer: 'Un projet complet (du diagnostic au déploiement) dure entre 6 et 16 semaines selon la complexité. Le diagnostic seul prend 2 semaines. Nous adaptons systématiquement le rythme à vos contraintes organisationnelles — un premier résultat en production est toujours visible avant la fin du deuxième mois.' },
  { question: 'Travaillez-vous avec tous les secteurs ?', answer: 'Oui. Notre méthodologie est agnostique sectoriellement, mais nous avons une expertise terrain dans la finance, l\'industrie, le retail et les services B2B. Nous adaptons le contenu de chaque livrable aux enjeux et contraintes réglementaires propres à votre secteur.' },
  { question: 'Quelles technologies utilisez-vous ?', answer: 'Nous n\'avons aucun partenariat commercial avec les éditeurs. Nous sélectionnons les LLMs (Claude, GPT-4o, Mistral, Llama), les frameworks RAG et les plateformes cloud (AWS, GCP, Azure) en fonction de vos contraintes techniques, réglementaires et budgétaires — pas de nos intérêts commerciaux.' },
  { question: 'Comment garantissez-vous la confidentialité de nos données ?', answer: 'NDA signé avant tout échange. Environnements de développement isolés, conformité RGPD native, déploiement on-premise disponible sur demande. Vos données ne sont jamais utilisées pour entraîner des modèles tiers, ni transmises à des services cloud non approuvés par votre DSI.' },
  { question: 'Quel est le budget minimum pour un projet ?', answer: 'Nos missions démarrent à partir de 5 000€ pour un diagnostic data. Le budget d\'un déploiement complet dépend de la complexité et du nombre de cas d\'usage. Nous fournissons un devis détaillé et un business case chiffré dès la fin de la consultation initiale gratuite.' },
]

export const FAQ_FORMATION: FAQItem[] = [
  { question: 'Les formations sont-elles certifiantes ?', answer: 'Nos formations délivrent un certificat de complétion NexIA Advisory. Nous sommes en cours de certification Qualiopi, ce qui permettra prochainement la prise en charge par les OPCO.' },
  { question: 'Peut-on personnaliser le contenu ?', answer: 'C\'est notre mode de fonctionnement par défaut. Chaque formation est construite sur un brief préalable avec vous : secteur, outils utilisés, niveau des participants, cas d\'usage cibles. Nous n\'avons pas de catalogue standard — chaque programme est conçu pour votre organisation.' },
  { question: 'Quel est le format des formations ?', answer: 'Présentiel ou distanciel, en intra-entreprise exclusivement. Groupes de 6 à 15 personnes maximum pour garantir l\'interactivité, les échanges de pratiques et un accompagnement individualisé pendant les exercices.' },
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
