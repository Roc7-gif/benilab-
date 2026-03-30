import React, { useState } from "react";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import CTA from "../components/NewsletterSection";

const ProgrammesPage = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const programmes = [
    {
      id: 1,
      titre: "DigitalStartGo",
      categorie: "Digital",
      phase: "Phase 01",
      phaseType: "Idéation & validation",
      duree: "2 semaines",
      niveau: "Débutant",
      description:
        "Initiation au digital pour entrepreneurs souhaitant lancer leur présence en ligne de zéro. Réseaux sociaux, site web basique, outils digitaux essentiels.",
      prix: "45 000 FCFA",
      couleur: "from-blue-500 to-cyan-500",
      badgeCouleur: "bg-blue-100 text-blue-700 border-blue-200",
      icon: "TrendingUp",
    },
    {
      id: 2,
      titre: "Virtuose Business",
      categorie: "Business",
      phase: "Phase 01",
      phaseType: "Idéation & validation",
      duree: "3 semaines",
      niveau: "Débutant",
      description:
        "Formation intensive aux fondamentaux du business et de la gestion d'entreprise. Comptabilité, marketing, stratégie et leadership pour les entrepreneurs africains.",
      prix: "60 000 FCFA",
      couleur: "from-amber-500 to-orange-500",
      badgeCouleur: "bg-amber-100 text-amber-700 border-amber-200",
      icon: "Zap",
    },
    {
      id: 3,
      titre: "StartupCrushLab",
      categorie: "Startup",
      phase: "Phase 02",
      phaseType: "Prototypage & MVP",
      duree: "4 semaines",
      niveau: "Intermédiaire",
      description:
        "Laboratoire d'accélération pour startups en phase de validation et prototypage rapide. Méthodes lean startup, design thinking et développement de MVP.",
      prix: "80 000 FCFA",
      couleur: "from-orange-500 to-red-500",
      badgeCouleur: "bg-orange-100 text-orange-700 border-orange-200",
      icon: "Rocket",
    },
    {
      id: 4,
      titre: "AfriLaunch",
      categorie: "Startup",
      phase: "Phase 03",
      phaseType: "Lancement marché",
      duree: "3 semaines",
      niveau: "Intermédiaire",
      description:
        "Programme de lancement pensé pour les entrepreneurs africains. Réseau local, accès aux marchés régionaux et adaptation au contexte africain.",
      prix: "70 000 FCFA",
      couleur: "from-green-500 to-emerald-500",
      badgeCouleur: "bg-green-100 text-green-700 border-green-200",
      icon: "Globe",
    },
    {
      id: 5,
      titre: "GeekCoding4Kids",
      categorie: "Coding",
      phase: "Phase 01",
      phaseType: "Idéation & validation",
      duree: "4 semaines",
      niveau: "Débutant",
      description:
        "Initiation ludique à la programmation pour les jeunes de 8 à 16 ans. Scratch, HTML, Python par le jeu et des projets créatifs adaptés aux enfants.",
      prix: "30 000 FCFA",
      couleur: "from-pink-500 to-rose-500",
      badgeCouleur: "bg-pink-100 text-pink-700 border-pink-200",
      icon: "Code",
    },
    {
      id: 6,
      titre: "Coder's4Africa",
      categorie: "Tech",
      phase: "Phase 02",
      phaseType: "Prototypage & MVP",
      duree: "6 semaines",
      niveau: "Intermédiaire",
      description:
        "Formation intensive au développement web et mobile pour la nouvelle génération africaine. React, Node.js, Flutter et déploiement cloud avec projets réels.",
      prix: "90 000 FCFA",
      couleur: "from-blue-600 to-indigo-500",
      badgeCouleur: "bg-sky-100 text-sky-700 border-sky-200",
      icon: "Monitor",
    },
    {
      id: 7,
      titre: "SheTech",
      categorie: "Inclusion",
      phase: "Phase 01",
      phaseType: "Idéation & validation",
      duree: "4 semaines",
      niveau: "Débutant",
      description:
        "Programme dédié aux femmes : coding, entrepreneuriat et leadership dans le numérique. Un espace safe et bienveillant pour apprendre et créer ensemble.",
      prix: "50 000 FCFA",
      couleur: "from-purple-500 to-violet-500",
      badgeCouleur: "bg-purple-100 text-purple-700 border-purple-200",
      icon: "Users",
    },
    {
      id: 8,
      titre: "Level'Up",
      categorie: "Digital",
      phase: "Phase 04",
      phaseType: "Croissance & scale",
      duree: "2 semaines",
      niveau: "Intermédiaire",
      description:
        "Upskilling pour professionnels souhaitant monter en compétences sur les outils du digital. Excel, Google Workspace, outils IA et productivité avancée.",
      prix: "40 000 FCFA",
      couleur: "from-blue-600 to-indigo-500",
      badgeCouleur: "bg-blue-100 text-blue-700 border-blue-200",
      icon: "TrendingUp",
    },
    {
      id: 9,
      titre: "Pro2Excel-AI",
      categorie: "Excel & IA",
      phase: "Phase 02",
      phaseType: "Prototypage & MVP",
      duree: "2 semaines",
      niveau: "Intermédiaire",
      description:
        "Maîtrise d'Excel augmentée par l'IA — de la base aux tableaux de bord automatisés. Formules avancées, macros VBA et assistants IA intégrés.",
      prix: "35 000 FCFA",
      couleur: "from-green-600 to-emerald-500",
      badgeCouleur: "bg-green-100 text-green-700 border-green-200",
      icon: "Spreadsheet",
    },
    {
      id: 10,
      titre: "AgriBoost",
      categorie: "Agritech",
      phase: "Phase 04",
      phaseType: "Croissance & scale",
      duree: "3 semaines",
      niveau: "Débutant",
      description:
        "Accélérateur digital pour agripreneurs : e-commerce agricole et accès aux marchés régionaux. Le numérique au service de l'agriculture africaine.",
      prix: "45 000 FCFA",
      couleur: "from-lime-500 to-green-600",
      badgeCouleur: "bg-lime-100 text-lime-700 border-lime-200",
      icon: "Leaf",
    },
  ];

  const filters = [
    "Tous",
    "Digital",
    "Business",
    "Startup",
    "Coding",
    "Tech",
    "Inclusion",
    "Excel & IA",
    "Agritech",
  ];

  const filteredProgrammes = programmes.filter((programme) => {
    const matchesFilter =
      activeFilter === "Tous" || programme.categorie === activeFilter;
    const matchesSearch =
      programme.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      programme.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const phases = [
    {
      name: "Phase 01",
      title: "Idéation & validation",
      count: "3 programmes",
      color: "bg-blue-500",
    },
    {
      name: "Phase 02",
      title: "Prototypage & MVP",
      count: "3 programmes",
      color: "bg-orange-500",
    },
    {
      name: "Phase 03",
      title: "Lancement marché",
      count: "1 programme",
      color: "bg-green-500",
    },
    {
      name: "Phase 04",
      title: "Croissance & scale",
      count: "3 programmes",
      color: "bg-purple-500",
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      TrendingUp: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"
          />
        </svg>
      ),
      Zap: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 14a1 1 0 01-.78-1.63l9.9-10.2a.5.5 0 01.86.46l-1.92 6.02A1 1 0 0013 10h7a1 1 0 01.78 1.63l-9.9 10.2a.5.5 0 01-.86-.46l1.92-6.02A1 1 0 0011 14z"
          />
        </svg>
      ),
      Rocket: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09M9 12a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 01-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"
          />
        </svg>
      ),
      Globe: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20"
          />
        </svg>
      ),
      Code: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M18 16l4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"
          />
        </svg>
      ),
      Monitor: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
      Users: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.128a4 4 0 010 7.744M22 21v-2a4 4 0 00-3-3.87"
          />
          <circle cx="9" cy="7" r="4" />
        </svg>
      ),
      Spreadsheet: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 22a2 2 0 01-2-2V4a2 2 0 012-2h8a2.4 2.4 0 011.704.706l3.588 3.588A2.4 2.4 0 0120 8v12a2 2 0 01-2 2zM14 2v5a1 1 0 001 1h5M8 13h2M14 13h2M8 17h2M14 17h2"
          />
        </svg>
      ),
      Leaf: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
          />
        </svg>
      ),
    };
    const IconComponent = icons[iconName] || icons.TrendingUp;
    return <IconComponent />;
  };

  const getPhaseIcon = (phaseName) => {
    const icons = {
      "Phase 01": "M16 7h6v6M22 7l-8.5 8.5-5-5L2 17",
      "Phase 02":
        "M4 14a1 1 0 01-.78-1.63l9.9-10.2a.5.5 0 01.86.46l-1.92 6.02A1 1 0 0013 10h7a1 1 0 01.78 1.63l-9.9 10.2a.5.5 0 01-.86-.46l1.92-6.02A1 1 0 0011 14z",
      "Phase 03":
        "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09M9 12a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 01-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",
      "Phase 04": "M16 7h6v6M22 7l-8.5 8.5-5-5L2 17",
    };
    return icons[phaseName] || icons["Phase 01"];
  };

  return (
    <>
      <>
        {/* Hero Section */}
        <section
          className="relative py-32"
          style={{
            backgroundColor: "#0A1F29",
            backgroundImage: `radial-gradient(80% 60% at 50% -20%, rgba(28, 116, 160, 0.2) 0%, transparent 60%),
                         radial-gradient(60% 50% at 80% 60%, rgba(249, 112, 21, 0.08) 0%, transparent 50%),
                         radial-gradient(50% 40% at 20% 80%, rgba(27, 157, 74, 0.06) 0%, transparent 50%)`,
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm text-sm text-slate-300 mb-6">
              10 programmes actifs · Benilab Services
            </div>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Nos&nbsp;
              <span className="bg-gradient-to-r from-[#1C74A0] to-[#3B9DCE] bg-clip-text text-transparent">
                Programmes
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
              De l'idéation au scale — 10 programmes conçus pour accompagner
              chaque étape de votre parcours numérique et entrepreneurial.
            </p>

            {/* Phases Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {phases.map((phase, idx) => (
                <div
                  key={idx}
                  className="text-center p-3 rounded-xl bg-white/8 border border-white/15 backdrop-blur-sm"
                >
                  <div
                    className={`w-2 h-2 ${phase.color} rounded-full mx-auto mb-2`}
                  ></div>
                  <div className="text-xs font-bold text-white/60 uppercase tracking-widest mb-0.5">
                    {phase.name}
                  </div>
                  <div className="text-xs font-semibold text-white">
                    {phase.title}
                  </div>
                  <div className="text-xs text-white/50 mt-0.5">
                    {phase.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Sticky Filter Bar */}
        <section className="sticky top-16 lg:top-20 z-30 bg-[#0B1119] border-b border-[#243042] shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.34-4.34M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Rechercher un programme..."
                  className="w-full pl-9 pr-4 py-2 text-sm border border-[#243042] rounded-xl bg-[#0B1119] text-[#DCE0E5] placeholder:text-[#7B899D] focus:outline-none focus:ring-2 focus:ring-[#2D9BD2]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`flex-shrink-0 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      activeFilter === filter
                        ? "bg-[#2D9BD2] text-white"
                        : "bg-[#202C3C] text-[#7B899D] hover:bg-[#202C3C]/80"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Programmes Grid */}
        <section className="bg-[#202C3C]/20 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-xl font-bold text-[#DCE0E5] font-heading">
                  Tous les programmes
                </h2>
                <p className="text-sm text-[#7B899D] mt-0.5">
                  {filteredProgrammes.length} programmes
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProgrammes.map((programme, idx) => (
                <div
                  key={programme?.id | idx}
                  className="group bg-[#0B1119] border border-[#243042] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Card Header with Gradient */}
                  <div
                    className={`h-40 bg-gradient-to-br ${programme.couleur} relative flex items-center justify-center overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 2px 2px, white 1px, transparent 0px)",
                        backgroundSize: "24px 24px",
                      }}
                    ></div>
                    <svg
                      className="h-20 w-20 text-white/15 absolute"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={getPhaseIcon(programme.phase)}
                      />
                    </svg>
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                        {getIcon(programme.icon)}
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-white font-bold text-xs">
                        {String(programme.id).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-white/90 text-[#0B1119]">
                        {programme.phase}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-[#DCE0E5] text-lg font-heading group-hover:text-[#2D9BD2] transition-colors">
                        {programme.titre}
                      </h3>
                      <span
                        className={`flex-shrink-0 px-2 py-0.5 rounded-full text-xs font-semibold border ${programme.badgeCouleur}`}
                      >
                        {programme.categorie}
                      </span>
                    </div>
                    <div className="text-xs text-[#7B899D] mb-3">
                      {programme.phaseType} · {programme.duree} ·{" "}
                      {programme.niveau}
                    </div>
                    <p className="text-sm text-[#7B899D] leading-relaxed mb-4 line-clamp-2">
                      {programme.description}
                    </p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#243042]">
                      <div>
                        <div className="text-xs text-[#7B899D]">
                          À partir de
                        </div>
                        <div className="text-lg font-bold text-[#2D9BD2] font-heading">
                          {programme.prix}
                        </div>
                      </div>
                      <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#2D9BD2]/10 text-[#2D9BD2] hover:bg-[#2D9BD2] hover:text-white text-sm font-semibold transition-all">
                        Détails
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 18l6-6-6-6"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          Title={"Rejoignez l'écosystème Benilab"}
          sub={
            "Chaque programme est conçu pour vous donner des compétences concrètes et un réseau actif. Choisissez votre parcours et commencez aujourd'hui."
          }
          btn1Text={"S'inscrire maintenant"}
          btn2Text={"Voir les formations"}
        />
        {/* CSS pour line-clamp */}
        <style jsx>{`
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </>
    </>
  );
};

export default ProgrammesPage;
