import CTA from "../components/NewsletterSection";

const PolesHeroSection = () => {
  return (
    <section className="bg-[#0A1F29] relative py-24 lg:py-32">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm text-sm text-slate-300 mb-6">
          5 pôles d'expertise · Benilab Services
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Nos{" "}
          <span className="bg-linear-to-r from-[#1C74A0] to-[#3B9DCE] bg-clip-text text-transparent">
            Pôles
          </span>
           <span className="text-[#FA802E]"> d'Expertise</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          5 pôles d'expertise pour votre transformation numérique. Incubateur ·
          Coworking · Formation · Consulting · Startup Studio
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "01 Incubation",
            "02 Coworking",
            "03 Formation",
            "04 Consulting",
            "05 Startup",
          ].map((item, idx) => (
            <a
              key={idx}
              href={`#${item.split(" ")[1].toLowerCase()}`}
              className="px-4 py-2 bg-white/8 border border-white/15 rounded-full text-sm text-slate-300 hover:bg-white/15 hover:text-white transition-all duration-200"
            >
              <span className="text-[#2D9BD2] font-bold mr-1">
                {item.split(" ")[0]}
              </span>
              &nbsp;{item.split(" ")[1]}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Barre de statistiques
const StatsBar = () => {
  return (
    <div className="bg-[#2D9BD2]/90 py-4">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-white text-sm font-semibold">
        <span>10 Programmes actifs</span>
        <span>·</span>
        <span>8 Projets incubés</span>
        <span>·</span>
        <span>5 Pôles d'expertise</span>
        <span>·</span>
        <span>1 Écosystème</span>
      </div>
    </div>
  );
};

// Section Incubation
const IncubationSection = () => {
  return (
    <div id="incubation" className="scroll-mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-black opacity-15 font-mono text-[#1B7EA0]">
              01
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#1B7EA0]/10 border border-[#1B7EA0]/20 text-[#1B7EA0]">
              <svg
                className="lucide lucide-rocket h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"
                  strokeWidth="2"
                />
              </svg>
              De l'idée au lancement
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Incubation de startups
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Accompagnement structuré des porteurs de projets innovants, de
            l'idée au lancement. Mentorat, ressources et réseau d'experts pour
            transformer votre vision en entreprise viable.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Mentorat par des experts confirmés",
              "Coaching entrepreneurial personnalisé",
              "Accès au réseau d'experts et partenaires",
              "Espaces de travail et ressources matérielles",
              "Mise en relation avec investisseurs",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.801 10A10 10 0 1 1 17 3.335M9 11l3 3L22 4"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-white text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Mentorat", "Coaching", "Réseau d'experts"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold border bg-[#1B7EA0]/10 border-[#1B7EA0]/20 text-[#1B7EA0]"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="rounded-xl px-4 py-3 bg-[#1B7EA0]/10 border border-[#1B7EA0]/20">
              <p className="text-xs text-[#7B899D] font-medium">Cible</p>
              <p className="text-sm font-semibold text-[#1B7EA0]">
                Porteurs de projets, entrepreneurs débutants
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Nous Contacter
              <svg
                className="lucide lucide-arrow-right h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="relative rounded-3xl bg-linear-to-br from-[#1B7EA0] to-[#2B9EC8] p-1 shadow-xl">
          <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
            <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#1B7EA0] to-[#2B9EC8] flex items-center justify-center mb-6 shadow-lg">
              <svg
                className="lucide lucide-rocket h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-6xl font-black opacity-10 font-mono text-white">
                01
              </span>
              <h3 className="text-xl font-bold text-white">
                Incubation de startups
              </h3>
            </div>
            <div className="space-y-2 mb-6">
              {[
                "Mentorat par des experts confirmés",
                "Coaching entrepreneurial personnalisé",
                "Accès au réseau d'experts et partenaires",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-[#7B899D]"
                >
                  <svg
                    className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m9 18 6-6-6-6" strokeWidth="2" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {["Mentorat", "Coaching", "Réseau d'experts"].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 rounded-full text-xs font-medium border bg-[#1B7EA0]/10 border-[#1B7EA0]/20 text-[#1B7EA0]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-24" />
    </div>
  );
};

// Section Coworking
const CoworkingSection = () => {
  return (
    <div id="coworking" className="scroll-mt-24 mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-black opacity-15 font-mono text-slate-700">
              02
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 border border-slate-200 text-slate-700">
              <svg
                className="lucide lucide-building-2 h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"
                  strokeWidth="2"
                />
              </svg>
              Espace collaboratif équipé
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Coworking Space
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Espace de travail collaboratif équipé au cœur de Lokossa. Bureaux
            flexibles, salles de réunion, WiFi haut débit et communauté active
            pour booster votre productivité.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Flex desk à la journée ou au mois",
              "Bureaux privés pour équipes",
              "Salles de réunion équipées",
              "WiFi haut débit & fibre optique",
              "Communauté active & networking",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.801 10A10 10 0 1 1 17 3.335M9 11l3 3L22 4"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-white text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Flex desk", "Bureaux privés", "Salles de réunion"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold border bg-slate-100 border-slate-200 text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="rounded-xl px-4 py-3 bg-slate-100 border border-slate-200">
              <p className="text-xs text-[#7B899D] font-medium">Cible</p>
              <p className="text-sm font-semibold text-slate-700">
                Freelances, startups, télétravailleurs
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Nous Contacter
              <svg
                className="lucide lucide-arrow-right h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:order-1">
          <div className="relative rounded-3xl bg-linear-to-br from-slate-600 to-slate-500 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-slate-600 to-slate-500 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="lucide lucide-building-2 h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl font-black opacity-10 font-mono text-white">
                  02
                </span>
                <h3 className="text-xl font-bold text-white">
                  Coworking Space
                </h3>
              </div>
              <div className="space-y-2 mb-6">
                {[
                  "Flex desk à la journée ou au mois",
                  "Bureaux privés pour équipes",
                  "Salles de réunion équipées",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m9 18 6-6-6-6" strokeWidth="2" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Flex desk", "Bureaux privés", "Salles de réunion"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium border bg-slate-100 border-slate-200 text-slate-700"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-24" />
    </div>
  );
};

// Section Formation
const FormationPoleSection = () => {
  return (
    <div id="formation" className="scroll-mt-24 mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-black opacity-15 font-mono text-green-700">
              03
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-green-50 border border-green-200 text-green-700">
              <svg
                className="lucide lucide-graduation-cap h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"
                  strokeWidth="2"
                />
              </svg>
              Programmes certifiants & pratiques
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Formation aux métiers du numérique
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Programmes certifiants en développement web, marketing digital,
            design, vidéo et IA. En présentiel et en ligne, adaptés au marché
            africain et à tous les profils.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Développement web & mobile",
              "Marketing digital & community management",
              "Design graphique & multimédia",
              "Intelligence artificielle & automatisation",
              "Formations intra-entreprise sur mesure",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.801 10A10 10 0 1 1 17 3.335M9 11l3 3L22 4"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-white text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Dev web", "Marketing", "Design", "IA"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold border bg-green-50 border-green-200 text-green-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="rounded-xl px-4 py-3 bg-green-50 border border-green-200">
              <p className="text-xs text-[#7B899D] font-medium">Cible</p>
              <p className="text-sm font-semibold text-green-700">
                Étudiants, professionnels, entreprises
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Nous Contacter
              <svg
                className="lucide lucide-arrow-right h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="relative rounded-3xl bg-linear-to-br from-green-600 to-emerald-500 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-green-600 to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="lucide lucide-graduation-cap h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl font-black opacity-10 font-mono text-white">
                  03
                </span>
                <h3 className="text-xl font-bold text-white">
                  Formation aux métiers du numérique
                </h3>
              </div>
              <div className="space-y-2 mb-6">
                {[
                  "Développement web & mobile",
                  "Marketing digital & community management",
                  "Design graphique & multimédia",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m9 18 6-6-6-6" strokeWidth="2" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Dev web", "Marketing", "Design", "IA"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium border bg-green-50 border-green-200 text-green-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-24" />
    </div>
  );
};

// Section Consulting
const ConsultingSection = () => {
  return (
    <div id="consulting" className="scroll-mt-24 mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-black opacity-15 font-mono text-orange-700">
              04
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-50 border border-orange-200 text-orange-700">
              <svg
                className="lucide lucide-chart-line h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M3 3v16a2 2 0 0 0 2 2h16M19 9l-5 5-4-4-3 3"
                  strokeWidth="2"
                />
              </svg>
              Audit, stratégie & transformation
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Consulting
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Audit, stratégie et accompagnement sur mesure pour entreprises et
            institutions en transformation numérique. Nos experts vous guident
            de l'analyse à l'implémentation.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Audit digital & diagnostic SI",
              "Stratégie de transformation numérique",
              "AMOA & assistance à maîtrise d'ouvrage",
              "Conduite du changement & formation",
              "Schéma directeur informatique",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.801 10A10 10 0 1 1 17 3.335M9 11l3 3L22 4"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-white text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Audit digital", "Stratégie", "Transformation"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold border bg-orange-50 border-orange-200 text-orange-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="rounded-xl px-4 py-3 bg-orange-50 border border-orange-200">
              <p className="text-xs text-[#7B899D] font-medium">Cible</p>
              <p className="text-sm font-semibold text-orange-700">
                PME, institutions, administrations
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Nous Contacter
              <svg
                className="lucide lucide-arrow-right h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
        <div className="lg:order-1">
          <div className="relative rounded-3xl bg-linear-to-br from-orange-500 to-amber-500 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="lucide lucide-chart-line h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M3 3v16a2 2 0 0 0 2 2h16M19 9l-5 5-4-4-3 3"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl font-black opacity-10 font-mono text-white">
                  04
                </span>
                <h3 className="text-xl font-bold text-white">Consulting</h3>
              </div>
              <div className="space-y-2 mb-6">
                {[
                  "Audit digital & diagnostic SI",
                  "Stratégie de transformation numérique",
                  "AMOA & assistance à maîtrise d'ouvrage",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m9 18 6-6-6-6" strokeWidth="2" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Audit digital", "Stratégie", "Transformation"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium border bg-orange-50 border-orange-200 text-orange-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-24" />
    </div>
  );
};

// Section Startup Studio
const StartupStudioSection = () => {
  return (
    <div id="startup-studio" className="scroll-mt-24 mt-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-5xl font-black opacity-15 font-mono text-purple-700">
              05
            </span>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-purple-50 border border-purple-200 text-purple-700">
              <svg
                className="lucide lucide-lightbulb h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"
                  strokeWidth="2"
                />
              </svg>
              Co-créer des startups de A à Z
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Startup Studio
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Nous co-créons des startups de A à Z : idéation, développement
            produit, go-to-market et structuration. Benilab est cofondateur et
            s'engage aux côtés de l'entrepreneur.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Co-idéation et validation du concept",
              "Développement du MVP produit",
              "Stratégie go-to-market",
              "Structuration juridique & financière",
              "Benilab devient cofondateur",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.801 10A10 10 0 1 1 17 3.335M9 11l3 3L22 4"
                    strokeWidth="2"
                  />
                </svg>
                <span className="text-white text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Co-création", "MVP", "Go-to-market"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-semibold border bg-purple-50 border-purple-200 text-purple-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="rounded-xl px-4 py-3 bg-purple-50 border border-purple-200">
              <p className="text-xs text-[#7B899D] font-medium">Cible</p>
              <p className="text-sm font-semibold text-purple-700">
                Entrepreneurs visionnaires, porteurs d'idées
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Nous Contacter
              <svg
                className="lucide lucide-arrow-right h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <div className="relative rounded-3xl bg-linear-to-br from-purple-600 to-violet-500 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-purple-600 to-violet-500 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="lucide lucide-lightbulb h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-6xl font-black opacity-10 font-mono text-white">
                  05
                </span>
                <h3 className="text-xl font-bold text-white">Startup Studio</h3>
              </div>
              <div className="space-y-2 mb-6">
                {[
                  "Co-idéation et validation du concept",
                  "Développement du MVP produit",
                  "Stratégie go-to-market",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="m9 18 6-6-6-6" strokeWidth="2" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {["Co-création", "MVP", "Go-to-market"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full text-xs font-medium border bg-purple-50 border-purple-200 text-purple-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section Packs et Offres
const PacksSection = () => {
  const packs = [
    {
      icon: "rocket",
      title: "Pack lancement de startup",
      desc: "Identité visuelle, site web et présence réseaux sociaux pour démarrer.",
      popular: true,
      color: "primary",
    },
    {
      icon: "users",
      title: "Pack visibilité réseaux sociaux",
      desc: "Stratégie éditoriale, contenu et gestion de vos pages sociales.",
      popular: false,
      color: "primary",
    },
    {
      icon: "chart",
      title: "Pack site + tunnel de vente",
      desc: "Site optimisé couplé à un tunnel de conversion performant.",
      popular: false,
      color: "primary",
    },
    {
      icon: "star",
      title: "Abonnement community mgmt",
      desc: "Animation mensuelle, reporting et ajustement de stratégie.",
      popular: false,
      color: "primary",
    },
    {
      icon: "graduation",
      title: "Forfait mensuel vidéo TikTok",
      desc: "Production régulière de vidéos courtes adaptées à TikTok.",
      popular: false,
      color: "primary",
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      rocket: (
        <svg
          className="lucide lucide-rocket h-5 w-5 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"
            strokeWidth="2"
          />
        </svg>
      ),
      users: (
        <svg
          className="lucide lucide-users h-5 w-5 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
            strokeWidth="2"
          />
          <circle cx="9" cy="7" r="4" strokeWidth="2" />
        </svg>
      ),
      chart: (
        <svg
          className="lucide lucide-chart-line h-5 w-5 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M3 3v16a2 2 0 0 0 2 2h16M19 9l-5 5-4-4-3 3"
            strokeWidth="2"
          />
        </svg>
      ),
      star: (
        <svg
          className="lucide lucide-star h-5 w-5 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
            strokeWidth="2"
          />
        </svg>
      ),
      graduation: (
        <svg
          className="lucide lucide-graduation-cap h-5 w-5 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0zM22 10v6M6 12.5V16a6 3 0 0 0 12 0v-3.5"
            strokeWidth="2"
          />
        </svg>
      ),
    };
    return icons[iconName];
  };

  return (
    <section className="bg-[#202C3C]/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2D9BD2]/10 text-[#2D9BD2] text-sm font-semibold mb-4">
            <svg
              className="lucide lucide-target h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="2" />
              <circle cx="12" cy="12" r="6" strokeWidth="2" />
              <circle cx="12" cy="12" r="2" strokeWidth="2" />
            </svg>
            Nos Packs & Offres
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Solutions packagées
          </h2>
          <p className="text-[#7B899D] max-w-xl mx-auto">
            Chaque pack est personnalisable selon vos besoins. Contactez-nous
            pour un devis adapté.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {packs.map((pack, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl border p-6 card-hover transition-all ${pack.popular ? "border-[#2D9BD2] bg-[#2D9BD2]/5 shadow-md" : "border-[#202C3C] bg-[#0B1119]"}`}
            >
              {pack.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 rounded-full bg-[#2D9BD2] text-white text-xs font-bold shadow">
                    Populaire
                  </span>
                </div>
              )}
              <div className="w-10 h-10 rounded-xl bg-[#2D9BD2]/10 flex items-center justify-center mb-4">
                {getIcon(pack.icon)}
              </div>
              <h3 className="font-bold text-white text-sm mb-2">
                {pack.title}
              </h3>
              <p className="text-[#7B899D] text-xs leading-relaxed">
                {pack.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section Processus
const ProcessusPolesSection = () => {
  const steps = [
    {
      icon: "target",
      title: "Diagnostic",
      desc: "Analyse approfondie de vos besoins, contraintes et objectifs pour comprendre votre contexte.",
    },
    {
      icon: "lightbulb",
      title: "Proposition sur mesure",
      desc: "Devis détaillé, calendrier de réalisation et livrables définis en amont.",
    },
    {
      icon: "zap",
      title: "Mise en œuvre collaborative",
      desc: "Le client est impliqué à chaque étape avec des points réguliers et transparents.",
    },
    {
      icon: "check",
      title: "Livraison & accompagnement",
      desc: "Suivi post-livraison pour garantir prise en main et continuité.",
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      target: (
        <svg
          className="lucide lucide-target h-8 w-8 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
        </svg>
      ),
      lightbulb: (
        <svg
          className="lucide lucide-lightbulb h-8 w-8 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"
            strokeWidth="2"
          />
        </svg>
      ),
      zap: (
        <svg
          className="lucide lucide-zap h-8 w-8 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
            strokeWidth="2"
          />
        </svg>
      ),
      check: (
        <svg
          className="lucide lucide-circle-check-big h-8 w-8 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M21.801 10A10 10 0 1 1 17 3.335M9 11l3 3L22 4"
            strokeWidth="2"
          />
        </svg>
      ),
    };
    return icons[iconName];
  };

  return (
    <section className="bg-[#0B1119] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Notre Méthode de Travail
          </h2>
          <p className="text-[#7B899D] max-w-xl mx-auto">
            Une méthodologie éprouvée pour des livraisons de qualité dans les
            délais.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative text-center card-hover">
              {idx < 3 && (
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-linear-to-r from-[#2D9BD2]/40 to-transparent"></div>
              )}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-[#2D9BD2]/10 border-2 border-[#2D9BD2]/20 flex items-center justify-center mx-auto mb-4">
                  {getIcon(step.icon)}
                </div>
                <div className="text-4xl font-black text-[#2D9BD2]/20 font-heading -mt-2 mb-2">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#7B899D] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Composant principal exporté
export const PolesExpertisePage = () => {
  return (
    <>
      <PolesHeroSection />
      <StatsBar />
      <div className="bg-[#0B1119] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <IncubationSection />
          <CoworkingSection />
          <FormationPoleSection />
          <ConsultingSection />
          <StartupStudioSection />
        </div>
      </div>
      <PacksSection />
      <ProcessusPolesSection />
      <CTA
        headTitle={"Prêt à rejoindre l'écosystème Benilab ?"}
        Title={"Chaque service rendu est un pas vers votre croissance."}
        sub={
          "Contactez notre équipe pour un diagnostic gratuit. Nous étudions votre besoin et vous proposons une solution sur mesure."
        }
        btn1Text={"Démarrer un projet"}
        btn2Text={"Nous Contacter"}
      />
    </>
  );
};

export default PolesExpertisePage;
