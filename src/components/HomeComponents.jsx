import React from 'react';

// Section 1: Nos Pôles d'Expertise
export const ExpertiseSection = () => {
  const poles = [
    {
      id: "01",
      icon: (
        <svg className="lucide lucide-rocket h-6 w-6 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05" strokeWidth="2" />
        </svg>
      ),
      title: "Incubation de startups",
      description: "Accompagnement structuré des porteurs de projets innovants, de l'idée au lancement."
    },
    {
      id: "02",
      icon: (
        <svg className="lucide lucide-building-2 h-6 w-6 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" strokeWidth="2" />
        </svg>
      ),
      title: "Coworking Space",
      description: "Espace de travail collaboratif équipé au cœur de Lokossa, ouvert à tous."
    },
    {
      id: "03",
      icon: (
        <svg className="lucide lucide-graduation-cap h-6 w-6 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5" strokeWidth="2" />
        </svg>
      ),
      title: "Formation numérique",
      description: "Programmes certifiants en dev web, marketing digital, design et IA."
    },
    {
      id: "04",
      icon: (
        <svg className="lucide lucide-chart-line h-6 w-6 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 3v16a2 2 0 0 0 2 2h16M19 9l-5 5-4-4-3 3" strokeWidth="2" />
        </svg>
      ),
      title: "Consulting",
      description: "Audit, stratégie et accompagnement sur mesure pour votre transformation digitale."
    },
    {
      id: "05",
      icon: (
        <svg className="lucide lucide-lightbulb h-6 w-6 text-[#2D9BD2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4" strokeWidth="2" />
        </svg>
      ),
      title: "Startup Studio",
      description: "Nous co-créons des startups de A à Z : idéation, MVP, go-to-market."
    }
  ];

  return (
    <section className="py-20 bg-[#202C3C]/30 text-[#DCE0E5] font-sans" style={{ letterSpacing: '-0.16px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#2D9BD2] bg-[#2D9BD2]/10 rounded-full uppercase mb-4">
            Notre écosystème
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-heading" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Nos Pôles d'Expertise
          </h2>
          <p className="text-[#7B899D] mt-4 text-lg max-w-xl mx-auto">
            5 pôles complémentaires pour accompagner chaque entrepreneur et organisation dans sa transformation numérique.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {poles.map((pole, index) => (
            <div
              key={index}
              className="bg-[#0B1119] rounded-2xl p-6 border border-[#202C3C] shadow-sm group hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#1B7EA0]/10 group-hover:scale-110 transition-transform">
                  {pole.icon}
                </div>
                <span className="text-3xl font-black text-[#2D9BD2]/15 font-mono">{pole.id}</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2 font-heading">{pole.title}</h3>
              <p className="text-[#7B899D] text-sm leading-relaxed mb-4">{pole.description}</p>
              <a href="/poles-expertise" className="inline-flex items-center gap-1 text-sm font-semibold text-[#2D9BD2] hover:gap-2 transition-all">
                En savoir plus
                <svg className="lucide lucide-arrow-right h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bouton */}
        <div className="text-center mt-12">
          <a href="/poles-expertise" className="inline-flex items-center justify-center gap-2 border border-[#2D9BD2] bg-transparent h-11 text-base text-[#2D9BD2] hover:bg-[#2D9BD2] hover:text-white font-semibold rounded-xl px-8 transition-all">
            Découvrir nos 5 pôles
            <svg className="lucide lucide-chevron-right h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="m9 18 6-6-6-6" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Section 2: Formations Populaires
export const FormationsSection = () => {
  const formations = [
    {
      level: "Intermédiaire",
      levelColor: "bg-orange-100 text-orange-700",
      title: "Développement Web avec React.js",
      description: "Maîtrisez React.js et l'écosystème JavaScript moderne pour créer des interfaces web dynamiques et professionnelles.",
      tags: [{ icon: "📖", label: "presentiel" }, { icon: "⏱️", label: "4 semaines" }, { icon: "👥", label: "15 places" }],
      price: "75 000 FCFA",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      level: "Avancé",
      levelColor: "bg-red-100 text-red-700",
      title: "Administration Réseau Cisco CCNA",
      description: "Configurez et administrez des réseaux professionnels avec les équipements Cisco. Préparation à la certification CCNA.",
      tags: [{ icon: "📖", label: "presentiel" }, { icon: "⏱️", label: "3 semaines" }, { icon: "👥", label: "12 places" }],
      price: "90 000 FCFA",
      gradient: "from-blue-600 to-blue-500"
    },
    {
      level: "Intermédiaire",
      levelColor: "bg-orange-100 text-orange-700",
      title: "Cybersécurité Fondamentaux",
      description: "Comprenez les menaces informatiques et apprenez à protéger votre système d'information.",
      tags: [{ icon: "📖", label: "presentiel" }, { icon: "⏱️", label: "3 semaines" }, { icon: "👥", label: "10 places" }],
      price: "80 000 FCFA",
      gradient: "from-green-600 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 bg-[#0B1119] text-[#DCE0E5] font-sans" style={{ letterSpacing: '-0.16px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#28BD5F] bg-[#28BD5F]/10 rounded-full uppercase mb-4">
            Développez vos compétences
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-heading" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Formations Populaires
          </h2>
          <p className="text-[#7B899D] mt-4 text-lg max-w-xl mx-auto">
            Des formations professionnelles adaptées au marché africain, animées par des experts certifiés.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {formations.map((formation, index) => (
            <div key={index} className="bg-[#0B1119] border border-[#202C3C] rounded-2xl overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
              {/* Image/Background */}
              <div className={`h-44 bg-gradient-to-br ${formation.gradient} flex items-center justify-center relative`}>
                <svg className="lucide lucide-graduation-cap h-16 w-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5" strokeWidth="2" />
                </svg>
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold ${formation.levelColor}`}>
                    {formation.level}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-5">
                <h3 className="font-bold text-white text-base leading-snug mb-2 font-heading group-hover:text-[#2D9BD2] transition-colors">
                  {formation.title}
                </h3>
                <p className="text-[#7B899D] text-sm line-clamp-2 mb-4">{formation.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {formation.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#202C3C] text-xs text-[#7B899D]">
                      <span>{tag.icon}</span> {tag.label}
                    </span>
                  ))}
                </div>

                {/* Prix et bouton */}
                <div className="flex items-center justify-between pt-3 border-t border-[#202C3C]">
                  <span className="text-xl font-bold text-[#2D9BD2] font-heading">{formation.price}</span>
                  <a href="/formations" className="inline-flex items-center justify-center h-8 px-3 text-xs bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-lg transition-colors">
                    S'inscrire
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton */}
        <div className="text-center mt-12">
          <a href="/formations" className="inline-flex items-center justify-center gap-2 h-11 text-base bg-[#28BD5F] text-white hover:bg-[#28BD5F]/90 font-semibold rounded-xl px-8 transition-colors">
            <svg className="lucide lucide-graduation-cap h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5" strokeWidth="2" />
            </svg>
            Voir toutes les formations
          </a>
        </div>
      </div>
    </section>
  );
};

// Section 3: Ce Que Nous Avons Bâti (Projets)
export const ProjetsSection = () => {
  const projets = [
    {
      client: "MarcheAfrique SARL",
      title: "Plateforme E-commerce Lokossa",
      description: "Boutique en ligne complète avec paiement mobile money et gestion d'inventaire.",
      tags: ["React", "Node.js", "PostgreSQL"],
      gradient: "from-orange-500 to-amber-600",
      icon: "monitor"
    },
    {
      client: "Bureau Régional BCEAO",
      title: "Infrastructure Réseau BCEAO",
      description: "Déploiement réseau fibre optique 10 Gbps pour 120 postes de travail.",
      tags: ["Cisco", "Fortinet", "VMware"],
      gradient: "from-blue-600 to-cyan-600",
      icon: "wifi"
    },
    {
      client: "Lycée Technique de Lokossa",
      title: "Système de Gestion Scolaire",
      description: "Application web de gestion des élèves, notes et emplois du temps.",
      tags: ["Vue.js", "Laravel", "MySQL"],
      gradient: "from-green-600 to-emerald-600",
      icon: "book-open"
    }
  ];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'monitor':
        return (
          <svg className="lucide lucide-monitor h-20 w-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect width="20" height="14" x="2" y="3" rx="2" strokeWidth="2" />
            <line x1="8" x2="16" y1="21" y2="21" strokeWidth="2" />
            <line x1="12" x2="12" y1="17" y2="21" strokeWidth="2" />
          </svg>
        );
      case 'wifi':
        return (
          <svg className="lucide lucide-wifi h-20 w-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 20h.01" strokeWidth="2" />
            <path d="M2 8.82a15 15 0 0 1 20 0" strokeWidth="2" />
            <path d="M5 12.859a10 10 0 0 1 14 0" strokeWidth="2" />
            <path d="M8.5 16.429a5 5 0 0 1 7 0" strokeWidth="2" />
          </svg>
        );
      case 'book-open':
        return (
          <svg className="lucide lucide-book-open h-20 w-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 7v14" strokeWidth="2" />
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" strokeWidth="2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-[#202C3C]/20 text-[#DCE0E5] font-sans" style={{ letterSpacing: '-0.16px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#2D9BD2] bg-[#2D9BD2]/10 rounded-full uppercase mb-4">
            Nos réalisations
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-heading" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Ce Que Nous Avons Bâti
          </h2>
          <p className="text-[#7B899D] mt-4 text-lg max-w-xl mx-auto">
            Des projets concrets qui ont transformé des entreprises béninoises et africaines.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((projet, index) => (
            <div key={index} className="bg-[#0B1119] border border-[#202C3C] rounded-2xl overflow-hidden group hover:shadow-lg transition-all hover:-translate-y-1">
              {/* Image/Background */}
              <div className={`h-48 bg-gradient-to-br ${projet.gradient} flex items-center justify-center`}>
                {getIcon(projet.icon)}
              </div>

              {/* Contenu */}
              <div className="p-5">
                <div className="text-xs text-[#7B899D] mb-1 font-medium uppercase tracking-wide">
                  {projet.client}
                </div>
                <h3 className="font-bold text-white text-base mb-2 font-heading group-hover:text-[#2D9BD2] transition-colors">
                  {projet.title}
                </h3>
                <p className="text-[#7B899D] text-sm leading-relaxed mb-4">
                  {projet.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {projet.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-0.5 rounded-md bg-[#202C3C] text-xs font-medium text-[#B6BEC9]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton */}
        <div className="text-center mt-12">
          <a href="/portfolio" className="inline-flex items-center justify-center gap-2 border border-[#2D9BD2] bg-transparent h-11 text-base text-[#2D9BD2] hover:bg-[#2D9BD2] hover:text-white font-semibold rounded-xl px-8 transition-all">
            Voir le portfolio complet
            <svg className="lucide lucide-arrow-right h-5 w-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Section 4: Ce que disent nos clients (Témoignages)
export const TemoignagesSection = () => {
  const testimonials = [
    {
      stars: 5,
      text: "BENILAB a transformé notre infrastructure réseau en un temps record. Leur expertise technique et leur professionnalisme sont remarquables. Je recommande vivement leurs services.",
      initial: "D",
      name: "Directeur Général",
      role: "DG · SOBEMAP Lokossa"
    },
    {
      stars: 5,
      text: "Le système SMS360 a révolutionné notre gestion scolaire. L'équipe BENILAB a été très à l'écoute et a livré un produit de qualité supérieure dans les délais impartis.",
      initial: "R",
      name: "Responsable Informatique",
      role: "IT Manager · Collège Catholique Lokossa"
    },
    {
      stars: 5,
      text: "La formation React.js de BENILAB m'a permis de décrocher mon premier emploi en 3 mois. Les formateurs sont excellents et les exercices très pratiques. Je recommande à tous !",
      initial: "P",
      name: "Promotion React.js 2024",
      role: "Développeur Junior · Bénin Market SARL"
    },
    {
      stars: 4,
      text: "Excellente collaboration pour la refonte de notre site web. BENILAB a parfaitement compris nos besoins et réalisé un site moderne, rapide et facile à administrer.",
      initial: "C",
      name: "Chef de Projet",
      role: "Project Manager · ONG AVSF Bénin"
    }
  ];

  return (
    <section className="py-20 bg-[#0B1119] text-[#DCE0E5] font-sans" style={{ letterSpacing: '-0.16px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-14">
          <div className="flex justify-center mb-3 gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="lucide lucide-star h-6 w-6 fill-yellow-400 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" strokeWidth="2" />
              </svg>
            ))}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-heading" style={{ fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '-0.02em' }}>
            Ce que disent nos clients
          </h2>
          <p className="text-[#7B899D] mt-4 text-lg max-w-xl mx-auto">
            La satisfaction de nos clients est notre meilleure récompense.
          </p>
        </div>

        {/* Grille masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-2 xl:columns-4 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-[#202C3C]/30 rounded-2xl p-6 border border-[#202C3C] hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* Étoiles */}
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i < testimonial.stars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    fill={i < testimonial.stars ? '#EAB308' : 'none'}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" strokeWidth="2" />
                  </svg>
                ))}
              </div>

              {/* Citation */}
              <p className="text-white text-sm leading-relaxed mt-3 mb-4 italic">
                "{testimonial.text}"
              </p>

              {/* Auteur */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2D9BD2]/20 flex items-center justify-center flex-shrink-0 font-bold text-[#2D9BD2] text-sm">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-[#7B899D]">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Export principal pour utiliser toutes les sections
export const AllSections = () => {
  return (
    <>
      <ExpertiseSection />
      <FormationsSection />
      <ProjetsSection />
      <TemoignagesSection />
    </>
  );
};