import React, { useState } from "react";
import CTA from "../components/NewsletterSection";

const ProjetsPage = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const projets = [
    {
      id: 1,
      titre: "SchoolSMS",
      categorie: "Edtech",
      statut: "Développé",
      statutCouleur: "text-green-700",
      statutBg: "bg-white/90",
      description:
        "Envoi automatisé d'informations scolaires par SMS entre établissements, parents et élèves.",
      secteur: "Éducation",
      gradient: "from-blue-600 to-cyan-500",
      badgeCouleur: "bg-blue-100 text-blue-700 border-blue-200",
      icon: "MessageCircle",
    },
    {
      id: 2,
      titre: "Smart Tutor",
      categorie: "Edtech",
      statut: "Développé",
      statutCouleur: "text-green-700",
      statutBg: "bg-white/90",
      description:
        "Mise en relation digitalisée entre parents et enseignants particuliers.",
      secteur: "Éducation",
      gradient: "from-purple-600 to-violet-500",
      badgeCouleur: "bg-blue-100 text-blue-700 border-blue-200",
      icon: "BookOpen",
    },
    {
      id: 3,
      titre: "Excel Mastery AI",
      categorie: "Edtech",
      sousCategorie: "IA",
      statut: "Développé",
      statutCouleur: "text-green-700",
      statutBg: "bg-white/90",
      description:
        "Plateforme de formation Excel assistée par intelligence artificielle.",
      secteur: "Formation",
      gradient: "from-green-600 to-emerald-500",
      badgeCouleur: "bg-blue-100 text-blue-700 border-blue-200",
      sousBadgeCouleur: "bg-pink-100 text-pink-700 border-pink-200",
      icon: "Bot",
    },
    {
      id: 4,
      titre: "AfriSwift",
      categorie: "Fintech",
      statut: "Incubé",
      statutCouleur: "text-orange-600",
      statutBg: "bg-white/90",
      description:
        "Transferts d'argent transfrontaliers rapides et sécurisés pour l'Afrique.",
      secteur: "Finance",
      gradient: "from-orange-500 to-amber-500",
      badgeCouleur: "bg-orange-100 text-orange-700 border-orange-200",
      icon: "DollarSign",
    },
    {
      id: 5,
      titre: "WhatsFlow",
      categorie: "Automation",
      statut: "Incubé",
      statutCouleur: "text-orange-600",
      statutBg: "bg-white/90",
      description:
        "Automatisation des flux de communication et de vente sur WhatsApp Business.",
      secteur: "Marketing",
      gradient: "from-[#25D366] to-[#128C7E]",
      badgeCouleur: "bg-green-100 text-green-700 border-green-200",
      icon: "MessageCircle",
    },
    {
      id: 6,
      titre: "Glocal Manager",
      categorie: "Marketing",
      statut: "Incubé",
      statutCouleur: "text-orange-600",
      statutBg: "bg-white/90",
      description:
        "Outil de gestion de la visibilité locale et globale des entreprises sur le web.",
      secteur: "Marketing",
      gradient: "from-[#1B7EA0] to-[#2B9EC8]",
      badgeCouleur: "bg-[#1B7EA0]/10 text-[#1B7EA0] border-[#1B7EA0]/20",
      icon: "Globe",
    },
    {
      id: 7,
      titre: "YT AI Command Center",
      categorie: "Marketing",
      sousCategorie: "IA",
      statut: "Incubé",
      statutCouleur: "text-orange-600",
      statutBg: "bg-white/90",
      description:
        "Plateforme IA de pilotage et d'optimisation des chaînes YouTube.",
      secteur: "Créateurs de contenu",
      gradient: "from-red-600 to-rose-500",
      badgeCouleur: "bg-[#1B7EA0]/10 text-[#1B7EA0] border-[#1B7EA0]/20",
      sousBadgeCouleur: "bg-pink-100 text-pink-700 border-pink-200",
      icon: "CirclePlay",
    },
    {
      id: 8,
      titre: "RankUp-OS SEO",
      categorie: "SEO",
      statut: "Développé",
      statutCouleur: "text-green-700",
      statutBg: "bg-white/90",
      description:
        "Système d'exploitation SEO tout-en-un pour améliorer le référencement naturel.",
      secteur: "SEO & Digital",
      gradient: "from-violet-600 to-purple-500",
      badgeCouleur: "bg-violet-100 text-violet-700 border-violet-200",
      icon: "TrendingUp",
    },
  ];

  const filters = [
    "Tous",
    "Edtech",
    "Fintech",
    "Automation",
    "Marketing",
    "SEO",
    "IA",
  ];

  const filteredProjets = projets.filter((projet) => {
    const matchesFilter =
      activeFilter === "Tous" ||
      projet.categorie === activeFilter ||
      projet.sousCategorie === activeFilter;
    const matchesSearch =
      projet.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      projet.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getIcon = (iconName) => {
    const icons = {
      MessageCircle: () => (
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
            d="M2.992 16.342a2 2 0 01.094 1.167l-1.065 3.29a1 1 0 001.236 1.168l3.413-.998a2 2 0 011.099.092 10 10 0 10-4.777-4.719"
          />
        </svg>
      ),
      BookOpen: () => (
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
            d="M12 7v14M3 18a1 1 0 01-1-1V4a1 1 0 011-1h5a4 4 0 014 4 4 4 0 014-4h5a1 1 0 011 1v13a1 1 0 01-1 1h-6a3 3 0 00-3 3 3 3 0 00-3-3z"
          />
        </svg>
      ),
      Bot: () => (
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
            d="M12 8V4H8M4 8h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 012-2zM2 14h2M20 14h2M15 13v2M9 13v2"
          />
        </svg>
      ),
      DollarSign: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="2" x2="12" y2="22" />
          <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
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
          <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20" />
        </svg>
      ),
      CirclePlay: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M9 9.003a1 1 0 011.517-.859l4.997 2.997a1 1 0 010 1.718l-4.997 2.997A1 1 0 019 14.996z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      ),
      TrendingUp: () => (
        <svg
          className="h-8 w-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17" />
        </svg>
      ),
    };
    const IconComponent = icons[iconName] || icons.MessageCircle;
    return <IconComponent />;
  };

  // const getStatutBg = (statut) => {
  //   return statut === "Développé"
  //     ? "bg-white/90 text-green-700"
  //     : "bg-white/90 text-orange-600";
  // };

  return (
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
            8 produits numériques développés ou incubés par Benilab
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6 font-heading">
            Nos&nbsp;
            <span className="bg-gradient-to-r from-[#1C74A0] to-[#3B9DCE] bg-clip-text text-transparent">
              Projets
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
            8 produits numériques conçus, développés et incubés par l'équipe
            Benilab pour transformer des idées en solutions digitales à impact
            africain.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              5 produits en développement actif
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-yellow-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 01.95 0l2.31 4.679a2.123 2.123 0 001.595 1.16l5.166.756a.53.53 0 01.294.904l-3.736 3.638a2.123 2.123 0 00-.611 1.878l.882 5.14a.53.53 0 01-.771.56l-4.618-2.428a2.122 2.122 0 00-1.973 0L6.396 21.01a.53.53 0 01-.77-.56l.881-5.139a2.122 2.122 0 00-.611-1.879L2.16 9.795a.53.53 0 01.294-.906l5.165-.755a2.122 2.122 0 001.597-1.16z" />
              </svg>
              3 startups incubées
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4 text-[#2D9BD2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.128a4 4 0 010 7.744M22 21v-2a4 4 0 00-3-3.87" />
                <circle cx="9" cy="7" r="4" />
              </svg>
              100+ utilisateurs
            </div>
          </div>
        </div>
      </section>
      {/* Sticky Filter Bar */}
      <section className="sticky top-16 lg:top-20 z-30 bg-[#0B1119] border-b border-[#243042] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#7B899D]"
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
                placeholder="Rechercher un projet..."
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
      {/* Projets Grid */}
      <section className="py-16 bg-[#202C3C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-[#DCE0E5] font-heading">
                Tous nos projets
              </h2>
              <p className="text-sm text-[#7B899D] mt-0.5">
                {filteredProjets.length} projets
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjets.map((projet, idx) => (
              <div
                key={projet.id}
                className="group bg-[#0B1119] border border-[#243042] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                {/* Card Header with Gradient */}
                <div
                  className={`h-40 bg-gradient-to-br ${projet.gradient} relative overflow-hidden flex items-center justify-center`}
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
                    className="h-16 w-16 text-white/25 absolute"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        projet.icon === "MessageCircle"
                          ? "M2.992 16.342a2 2 0 01.094 1.167l-1.065 3.29a1 1 0 001.236 1.168l3.413-.998a2 2 0 011.099.092 10 10 0 10-4.777-4.719"
                          : projet.icon === "BookOpen"
                            ? "M12 7v14M3 18a1 1 0 01-1-1V4a1 1 0 011-1h5a4 4 0 014 4 4 4 0 014-4h5a1 1 0 011 1v13a1 1 0 01-1 1h-6a3 3 0 00-3 3 3 3 0 00-3-3z"
                            : projet.icon === "Bot"
                              ? "M12 8V4H8M4 8h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V10a2 2 0 012-2zM2 14h2M20 14h2M15 13v2M9 13v2"
                              : projet.icon === "DollarSign"
                                ? "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
                                : projet.icon === "Globe"
                                  ? "M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20"
                                  : projet.icon === "CirclePlay"
                                    ? "M9 9.003a1 1 0 011.517-.859l4.997 2.997a1 1 0 010 1.718l-4.997 2.997A1 1 0 019 14.996zM12 12a10 10 0 100-20 10 10 0 000 20z"
                                    : "M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"
                      }
                    />
                  </svg>
                  <div className="relative z-10 w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    {getIcon(projet.icon)}
                  </div>
                  <div className="absolute top-3 left-3 w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      {String(projet.id).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-bold ${projet.statut === "Développé" ? "bg-white/90 text-green-700" : "bg-white/90 text-orange-600"}`}
                    >
                      {projet.statut}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <h3 className="font-bold text-[#DCE0E5] text-lg mb-1 font-heading group-hover:text-[#2D9BD2] transition-colors">
                    {projet.titre}
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${projet.badgeCouleur}`}
                    >
                      {projet.categorie}
                    </span>
                    {projet.sousCategorie && (
                      <span
                        className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${projet.sousBadgeCouleur}`}
                      >
                        {projet.sousCategorie}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#7B899D] leading-relaxed mb-4">
                    {projet.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#243042]">
                    <span className="text-xs text-[#7B899D]">
                      {projet.secteur}
                    </span>
                    <button className="inline-flex items-center gap-1 text-xs font-semibold text-[#2D9BD2] hover:underline">
                      En savoir plus
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 12h14M12 5l7 7-7 7"
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
      {/* Stats Section */}
      <section className="py-16 bg-[#0B1119]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "LayoutGrid",
                value: "8",
                label: "Projets développés & incubés",
              },
              { icon: "Globe", value: "5", label: "Secteurs couverts" },
              { icon: "Users", value: "100+", label: "Utilisateurs actifs" },
              {
                icon: "TrendingUp",
                value: "2",
                label: "Startups levant des fonds",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-2xl border border-[#243042] bg-[#202C3C]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2D9BD2]/10 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="h-6 w-6 text-[#2D9BD2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        stat.icon === "LayoutGrid"
                          ? "M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z"
                          : stat.icon === "Globe"
                            ? "M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20"
                            : stat.icon === "Users"
                              ? "M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.128a4 4 0 010 7.744M22 21v-2a4 4 0 00-3-3.87"
                              : "M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"
                      }
                    />
                  </svg>
                </div>
                <div className="text-3xl font-black text-[#2D9BD2] mb-1 font-heading">
                  {stat.value}
                </div>
                <div className="text-sm text-[#7B899D]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA
        headTitle={"Startup Studio Benilab"}
        Title={"Vous avez une idée de produit ?"}
        sub={
          "Benilab co-crée des startups de A à Z. Rejoignez le Startup Studio et transformons votre idée en produit numérique à impact."
        }
        btn1Text={"Rejoindre le Startup Studio"}
        btn2Text={"Voir nos pôles d'expertise"}
        btn1link={"/connexion"}
        btn2link={"/poles"}
      />
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default ProjetsPage;
