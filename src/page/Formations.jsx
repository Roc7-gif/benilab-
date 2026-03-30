import React, { useState } from "react";
import CTA from "../components/NewsletterSection";

const FormationsPage = () => {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [searchTerm, setSearchTerm] = useState("");

  const formations = [
    {
      id: 1,
      titre: "Développement Web avec React.js",
      categorie: "Développement",
      duree: "4 semaines",
      niveau: "Intermédiaire",
      places: "15 places",
      modalite: "presentiel",
      description:
        "Maîtrisez React.js et l'écosystème JavaScript moderne pour créer des interfaces web dynamiques et professionnelles.",
      prix: "75 000 FCFA",
      formateur: "M. Koudoufio A.",
      formateurInitiale: "M",
      couleur: "from-orange-500 to-amber-400",
      badgeCouleur: "bg-orange-100 text-orange-700 border-orange-200",
      icon: "Code",
    },
    {
      id: 2,
      titre: "Administration Réseau Cisco CCNA",
      categorie: "Réseaux",
      duree: "3 semaines",
      niveau: "Avancé",
      places: "12 places",
      modalite: "presentiel",
      description:
        "Configurez et administrez des réseaux professionnels avec les équipements Cisco. Préparation à la certification CCNA.",
      prix: "90 000 FCFA",
      formateur: "M. Agossou B.",
      formateurInitiale: "M",
      couleur: "from-blue-600 to-blue-400",
      badgeCouleur: "bg-blue-100 text-blue-700 border-blue-200",
      icon: "Wifi",
    },
    {
      id: 3,
      titre: "Python pour la Data Science",
      categorie: "Développement",
      duree: "3 semaines",
      niveau: "Intermédiaire",
      places: "20 places",
      modalite: "hybride",
      description:
        "Apprenez Python et les bibliothèques de data science pour analyser et visualiser des données réelles.",
      prix: "65 000 FCFA",
      formateur: "Mme. Dangnivo C.",
      formateurInitiale: "M",
      couleur: "from-orange-500 to-amber-400",
      badgeCouleur: "bg-orange-100 text-orange-700 border-orange-200",
      icon: "Code",
    },
    {
      id: 4,
      titre: "Marketing Digital & Réseaux Sociaux",
      categorie: "Marketing",
      duree: "1 semaine",
      niveau: "Débutant",
      places: "25 places",
      modalite: "en_ligne",
      description:
        "Gérez efficacement votre présence en ligne. Meta Ads, Google Ads, content strategy et analyse de performance.",
      prix: "40 000 FCFA",
      formateur: "Mme. Hounsou F.",
      formateurInitiale: "M",
      couleur: "from-purple-600 to-violet-500",
      badgeCouleur: "bg-purple-100 text-purple-700 border-purple-200",
      icon: "TrendingUp",
    },
    {
      id: 5,
      titre: "Cybersécurité Fondamentaux",
      categorie: "Cybersécurité",
      duree: "3 semaines",
      niveau: "Intermédiaire",
      places: "10 places",
      modalite: "presentiel",
      description:
        "Comprenez les menaces informatiques et apprenez à protéger votre système d'information.",
      prix: "80 000 FCFA",
      formateur: "M. Dossou R.",
      formateurInitiale: "M",
      couleur: "from-red-600 to-rose-500",
      badgeCouleur: "bg-red-100 text-red-700 border-red-200",
      icon: "Shield",
    },
    {
      id: 6,
      titre: "Administration Linux Serveur",
      categorie: "Systèmes",
      duree: "2 semaines",
      niveau: "Intermédiaire",
      places: "15 places",
      modalite: "presentiel",
      description:
        "Maîtrisez l'administration de serveurs Linux pour gérer vos infrastructures de production.",
      prix: "55 000 FCFA",
      formateur: "M. Agossou B.",
      formateurInitiale: "M",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 7,
      titre: "DigitalStartGo",
      categorie: "Digital",
      duree: "2 semaines",
      niveau: "Débutant",
      places: "20 places",
      modalite: "presentiel",
      description:
        "Initiation au digital pour entrepreneurs souhaitant lancer leur présence en ligne de zéro. Programme complet pour créer et gérer sa présence digitale.",
      prix: "45 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 8,
      titre: "Virtuose Business",
      categorie: "Business",
      duree: "3 semaines",
      niveau: "Débutant",
      places: "20 places",
      modalite: "hybride",
      description:
        "Formation intensive aux fondamentaux du business et de la gestion d'entreprise. Comptabilité, marketing, stratégie et leadership.",
      prix: "60 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 9,
      titre: "StartupCrushLab",
      categorie: "Startup",
      duree: "4 semaines",
      niveau: "Intermédiaire",
      places: "20 places",
      modalite: "presentiel",
      description:
        "Laboratoire d'accélération pour startups en phase de validation et prototypage rapide. Méthodes lean startup et design thinking appliquées.",
      prix: "80 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 10,
      titre: "AfriLaunch",
      categorie: "Startup",
      duree: "3 semaines",
      niveau: "Intermédiaire",
      places: "20 places",
      modalite: "hybride",
      description:
        "Programme de lancement pensé pour les entrepreneurs africains. Réseau, contexte local et accès aux marchés régionaux africains.",
      prix: "70 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 11,
      titre: "GeekCoding4Kids",
      categorie: "Coding",
      duree: "4 semaines",
      niveau: "Débutant",
      places: "20 places",
      modalite: "presentiel",
      description:
        "Initiation ludique à la programmation pour les jeunes de 8 à 16 ans. Scratch, HTML, Python par le jeu et des projets créatifs.",
      prix: "30 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 12,
      titre: "Coder's4Africa",
      categorie: "Tech",
      duree: "6 semaines",
      niveau: "Intermédiaire",
      places: "20 places",
      modalite: "presentiel",
      description:
        "Formation intensive au développement web et mobile pour la nouvelle génération africaine. React, Node.js, Flutter et déploiement cloud.",
      prix: "90 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 13,
      titre: "SheTech",
      categorie: "Inclusion",
      duree: "4 semaines",
      niveau: "Débutant",
      places: "20 places",
      modalite: "hybride",
      description:
        "Programme dédié aux femmes : coding, entrepreneuriat et leadership dans le numérique. Espace safe et bienveillant pour apprendre et créer.",
      prix: "50 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 14,
      titre: "Level'Up",
      categorie: "Digital",
      duree: "2 semaines",
      niveau: "Intermédiaire",
      places: "20 places",
      modalite: "en ligne",
      description:
        "Upskilling pour professionnels souhaitant monter en compétences sur les outils du digital. Excel, Google Workspace, outils IA et productivité.",
      prix: "40 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 15,
      titre: "Pro2Excel-AI",
      categorie: "Excel & IA",
      duree: "2 semaines",
      niveau: "Intermédiaire",
      places: "20 places",
      modalite: "hybride",
      description:
        "Maîtrise d'Excel augmentée par l'IA — de la base aux tableaux de bord automatisés. Formules avancées, macros VBA et assistants IA.",
      prix: "35 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
    {
      id: 16,
      titre: "AgriBoost",
      categorie: "Agritech",
      duree: "3 semaines",
      niveau: "Débutant",
      places: "20 places",
      modalite: "presentiel",
      description:
        "Accélérateur digital pour agripreneurs : e-commerce agricole et accès aux marchés régionaux. Numérique au service de l'agriculture africaine.",
      prix: "45 000 FCFA",
      formateur: "Équipe BeniLab",
      formateurInitiale: "É",
      couleur: "from-slate-600 to-slate-500",
      badgeCouleur: "bg-gray-100 text-gray-700 border-gray-200",
      icon: "Book",
    },
  ];

  const filters = [
    "Tous",
    "Développement",
    "Réseaux",
    "Bureautique",
    "Marketing",
    "Cybersécurité",
    "Digital",
    "Startup",
    "Tech",
    "Excel & IA",
    "Agritech",
  ];

  const filteredFormations = formations.filter((formation) => {
    const matchesFilter =
      activeFilter === "Tous" || formation.categorie === activeFilter;
    const matchesSearch =
      formation.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // const getModaliteIcon = (modalite) => {
  //   if (modalite === "presentiel") return "presentiel";
  //   if (modalite === "hybride") return "hybride";
  //   return "en_ligne";
  // };

  const getIcon = (iconName) => {
    const icons = {
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
      Wifi: () => (
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
            d="M12 20h.01M2 8.82a15 15 0 0120 0M5 12.859a10 10 0 0114 0M8.5 16.429a5 5 0 017 0"
          />
        </svg>
      ),
      Shield: () => (
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
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1zM9 12l2 2 4-4"
          />
        </svg>
      ),
      Book: () => (
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
    };
    const IconComponent = icons[iconName] || icons.Code;
    return <IconComponent />;
  };

  const getCategoryIcon = (categorie) => {
    const icons = {
      Développement: { icon: "Code", color: "text-orange-600" },
      Réseaux: { icon: "Wifi", color: "text-blue-600" },
      Bureautique: { icon: "Spreadsheet", color: "text-green-700" },
      Marketing: { icon: "TrendingUp", color: "text-purple-700" },
      Cybersécurité: { icon: "Shield", color: "text-red-600" },
      Digital: { icon: "Globe", color: "text-cyan-600" },
      Startup: { icon: "Rocket", color: "text-orange-600" },
      Tech: { icon: "Monitor", color: "text-cyan-600" },
      "Excel & IA": { icon: "Spreadsheet", color: "text-green-600" },
      Agritech: { icon: "Leaf", color: "text-lime-600" },
      Inclusion: { icon: "Users", color: "text-purple-600" },
      Systèmes: { icon: "Monitor", color: "text-gray-600" },
      Coding: { icon: "Code", color: "text-pink-600" },
    };
    return icons[categorie] || { icon: "Code", color: "text-gray-600" };
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative py-20 overflow-hidden"
        style={{
          backgroundColor: "#0A1F29",
          backgroundImage: `radial-gradient(80% 60% at 50% -20%, rgba(28, 116, 160, 0.2) 0%, transparent 60%),
                         radial-gradient(60% 50% at 80% 60%, rgba(249, 112, 21, 0.08) 0%, transparent 50%),
                         radial-gradient(50% 40% at 20% 80%, rgba(27, 157, 74, 0.06) 0%, transparent 50%)`,
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <a
              href="#"
              className="hover:text-[#2D9BD2] transition-colors flex items-center gap-1"
            >
              Accueil
            </a>
            <svg
              className="h-4 w-4 text-slate-600"
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
            <span className="text-[#2D9BD2] font-medium">Nos Formations</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div>
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-[#2D9BD2] bg-[#2D9BD2]/15 rounded-full uppercase mb-5">
                Centre de Formation BENILAB
              </span>
              <h1 className="text-5xl sm:text-6xl font-bold text-white font-heading leading-tight mb-5">
                Nos&nbsp;
                <span className="bg-gradient-to-r from-[#F97015] to-[#F99E1F] bg-clip-text text-transparent">
                  Formations
                </span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Des formations IT pratiques et certifiantes, adaptées au marché
                africain. Dispensées par des experts certifiés à Lokossa, Bénin.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 rounded-xl bg-white/8 border border-white/10">
                  <div className="text-2xl font-bold text-[#2D9BD2]">10+</div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Programmes
                  </div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/8 border border-white/10">
                  <div className="text-2xl font-bold text-[#2D9BD2]">100+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Diplômés</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/8 border border-white/10">
                  <div className="text-2xl font-bold text-[#2D9BD2]">95%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Insertion</div>
                </div>
              </div>
            </div>

            {/* Right Column - Search Card */}
            <div className="lg:pl-8">
              <div className="bg-white/8 border border-white/15 backdrop-blur-sm rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-4 font-heading">
                  Rechercher une formation
                </h3>
                <div className="relative">
                  <svg
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500"
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
                    placeholder="Ex: React, Cisco, Python, Excel..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#2D9BD2] focus:border-[#2D9BD2] text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "React.js",
                    "Cisco CCNA",
                    "Python",
                    "Excel",
                    "Cybersécurité",
                  ].map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300 hover:bg-[#2D9BD2]/30 hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 50L1440 50L1440 15C1200 50 960 0 720 15C480 30 240 0 0 15L0 50Z"
              fill="rgb(11, 17, 25)"
            />
          </svg>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-16 lg:top-20 z-30 bg-[#0B1119] border-b border-[#243042] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <span className="flex items-center gap-1.5 text-sm font-medium text-[#7B899D] flex-shrink-0">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 20a1 1 0 01.553.895l2 1A1 1 0 0014 21v-7a2 2 0 01.517-1.341L21.74 4.67A1 1 0 0021 3H3a1 1 0 00-.742 1.67l7.225 7.989A2 2 0 0110 14z"
                />
              </svg>
              Filtrer :
            </span>
            {filters.map((filter) => {
              const categoryIcon = getCategoryIcon(filter);
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold flex-shrink-0 transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-[#2D9BD2] text-white shadow-md"
                      : "bg-[#202C3C] text-[#7B899D] hover:bg-[#202C3C]/80 hover:text-[#DCE0E5]"
                  }`}
                >
                  {filter !== "Tous" && (
                    <svg
                      className={`h-4 w-4 ${categoryIcon.color}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d={
                          filter === "Développement"
                            ? "M18 16l4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"
                            : filter === "Réseaux"
                              ? "M12 20h.01M2 8.82a15 15 0 0120 0M5 12.859a10 10 0 0114 0M8.5 16.429a5 5 0 017 0"
                              : filter === "Bureautique"
                                ? "M6 22a2 2 0 01-2-2V4a2 2 0 012-2h8a2.4 2.4 0 011.704.706l3.588 3.588A2.4 2.4 0 0120 8v12a2 2 0 01-2 2zM14 2v5a1 1 0 001 1h5M8 13h2M14 13h2M8 17h2M14 17h2"
                                : filter === "Marketing"
                                  ? "M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"
                                  : filter === "Cybersécurité"
                                    ? "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1zM9 12l2 2 4-4"
                                    : filter === "Digital"
                                      ? "M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20"
                                      : filter === "Startup"
                                        ? "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09M9 12a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 01-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"
                                        : filter === "Tech"
                                          ? "M8 21h8M12 3v18M3 3h18"
                                          : filter === "Excel & IA"
                                            ? "M6 22a2 2 0 01-2-2V4a2 2 0 012-2h8a2.4 2.4 0 011.704.706l3.588 3.588A2.4 2.4 0 0120 8v12a2 2 0 01-2 2zM14 2v5a1 1 0 001 1h5M8 13h2M14 13h2M8 17h2M14 17h2"
                                            : filter === "Agritech"
                                              ? "M11 20A7 7 0 019.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10zM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
                                              : ""
                        }
                      />
                    </svg>
                  )}
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 bg-[#202C3C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-[#DCE0E5] font-heading">
                Toutes les formations
              </h2>
              <p className="text-sm text-[#7B899D] mt-0.5">
                {filteredFormations.length} formations disponibles
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFormations.map((formation) => (
              <div
                key={formation.id}
                className="group bg-[#0B1119] border border-[#243042] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Card Header with Gradient */}
                <div
                  className={`h-44 bg-gradient-to-br ${formation.couleur} relative flex items-center justify-center overflow-hidden`}
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
                        formation.categorie === "Développement"
                          ? "M18 16l4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"
                          : formation.categorie === "Réseaux"
                            ? "M12 20h.01M2 8.82a15 15 0 0120 0M5 12.859a10 10 0 0114 0M8.5 16.429a5 5 0 017 0"
                            : formation.categorie === "Cybersécurité"
                              ? "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 01-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 011-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 011.52 0C14.51 3.81 17 5 19 5a1 1 0 011 1zM9 12l2 2 4-4"
                              : formation.categorie === "Marketing"
                                ? "M16 7h6v6M22 7l-8.5 8.5-5-5L2 17"
                                : "M12 7v14M3 18a1 1 0 01-1-1V4a1 1 0 011-1h5a4 4 0 014 4 4 4 0 014-4h5a1 1 0 011 1v13a1 1 0 01-1 1h-6a3 3 0 00-3 3 3 3 0 00-3-3z"
                      }
                    />
                  </svg>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                      {getIcon(formation.icon)}
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${formation.badgeCouleur} bg-white/90`}
                    >
                      {formation.categorie}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex flex-col gap-1">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                        formation.niveau === "Débutant"
                          ? "bg-green-100 text-green-700 border-green-200"
                          : formation.niveau === "Intermédiaire"
                            ? "bg-orange-100 text-orange-700 border-orange-200"
                            : "bg-red-100 text-red-700 border-red-200"
                      } bg-white/90`}
                    >
                      {formation.niveau}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-bold text-[#DCE0E5] text-base leading-snug mb-2 font-heading group-hover:text-[#2D9BD2] transition-colors line-clamp-2">
                    {formation.titre}
                  </h3>
                  <p className="text-[#7B899D] text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
                    {formation.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600">
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
                          d="M12 7v14M3 18a1 1 0 01-1-1V4a1 1 0 011-1h5a4 4 0 014 4 4 4 0 014-4h5a1 1 0 011 1v13a1 1 0 01-1 1h-6a3 3 0 00-3 3 3 3 0 00-3-3z"
                        />
                      </svg>
                      {formation.modalite}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#202C3C] text-xs font-medium text-[#B6BEC9]">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6v6l4 2"
                        />
                      </svg>
                      {formation.duree}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-[#202C3C] text-[#B6BEC9]">
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
                          d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.128a4 4 0 010 7.744M22 21v-2a4 4 0 00-3-3.87"
                        />
                        <circle cx="9" cy="7" r="4" />
                      </svg>
                      {formation.places}
                    </span>
                  </div>

                  {/* Formateur */}
                  <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#243042]">
                    <div className="w-7 h-7 rounded-full bg-[#2D9BD2]/15 flex items-center justify-center flex-shrink-0">
                      <span className="text-[#2D9BD2] font-bold text-xs">
                        {formation.formateurInitiale}
                      </span>
                    </div>
                    <span className="text-xs text-[#7B899D]">
                      {formation.formateur}
                    </span>
                  </div>

                  {/* Price and Button */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-[#7B899D] mb-0.5">
                        À partir de
                      </div>
                      <div className="text-xl font-bold text-[#2D9BD2] font-heading">
                        {formation.prix}
                      </div>
                    </div>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-8 text-xs bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-xl px-4 transition-all">
                      S'inscrire
                      <svg
                        className="h-4 w-4 ml-1"
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

      {/* Why Choose BENILAB Section */}
      <section className="py-16 bg-[#202C3C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#DCE0E5] font-heading">
              Pourquoi choisir BENILAB ?
            </h2>
            <p className="text-[#7B899D] mt-3">
              Un centre de formation pensé pour le marché africain.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "Award",
                title: "Certifications reconnues",
                desc: "Nos formations préparent aux certifications internationales Cisco, CompTIA, Microsoft.",
                color: "bg-amber-100",
                textColor: "text-amber-700",
              },
              {
                icon: "Check",
                title: "Formateurs certifiés",
                desc: "Tous nos formateurs sont des professionnels certifiés avec une expérience terrain.",
                color: "bg-green-100",
                textColor: "text-green-700",
              },
              {
                icon: "Play",
                title: "Pratique avant tout",
                desc: "80% de pratique sur des labs réels et des projets concrets tirés du terrain africain.",
                color: "bg-blue-100",
                textColor: "text-blue-600",
              },
              {
                icon: "Star",
                title: "Accompagnement emploi",
                desc: "Mise en relation avec notre réseau d'entreprises partenaires pour votre insertion professionnelle.",
                color: "bg-purple-100",
                textColor: "text-purple-700",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-[#202C3C]/30 rounded-2xl border border-[#243042] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${item.color} ${item.textColor} mb-4`}
                >
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={
                        item.icon === "Award"
                          ? "M15.477 12.89l1.515 8.526a.5.5 0 01-.81.47l-3.58-2.687a1 1 0 00-1.197 0l-3.586 2.686a.5.5 0 01-.81-.469l1.514-8.526M12 2a4 4 0 100 8 4 4 0 000-8z"
                          : item.icon === "Check"
                            ? "M21.801 10A10 10 0 1117 3.335M9 11l2 2L22 4"
                            : item.icon === "Play"
                              ? "M5 5a2 2 0 013.008-1.728l11.997 6.998a2 2 0 01.003 3.458l-12 7A2 2 0 015 19z"
                              : "M11.525 2.295a.53.53 0 01.95 0l2.31 4.679a2.123 2.123 0 001.595 1.16l5.166.756a.53.53 0 01.294.904l-3.736 3.638a2.123 2.123 0 00-.611 1.878l.882 5.14a.53.53 0 01-.771.56l-4.618-2.428a2.122 2.122 0 00-1.973 0L6.396 21.01a.53.53 0 01-.77-.56l.881-5.139a2.122 2.122 0 00-.611-1.879L2.16 9.795a.53.53 0 01.294-.906l5.165-.755a2.122 2.122 0 001.597-1.16z"
                      }
                    />
                  </svg>
                </div>
                <h3 className="font-bold text-[#DCE0E5] mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-[#7B899D] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA  Title={'Vous ne trouvez pas la formation qu\'il vous faut ?'}
        sub={'Contactez-nous pour une formation sur mesure adaptée à vos équipes et vos besoins spécifiques.'}
        btn1Text={"Formation sur mesure"}
        btn2Text={"Demander un devis"}
      />

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
  );
};

export default FormationsPage;
