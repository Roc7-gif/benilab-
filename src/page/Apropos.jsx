import React, {  useEffect } from "react";

const AProposPage = () => {



  // Animation au scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      id: 1,
      label: "Projets Livrés",
      value: "30+",
      icon: "FolderOpen",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      id: 2,
      label: "Clients Satisfaits",
      value: "25+",
      icon: "Users",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      id: 3,
      label: "Diplômés Formés",
      value: "100+",
      icon: "GraduationCap",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      id: 4,
      label: "Années d'Expérience",
      value: "6+",
      icon: "Clock",
      color: "text-amber-400",
      bgColor: "bg-amber-400/10",
    },
  ];

  const timelineEvents = [
    {
      year: "2018",
      title: "Création de KLC NET IT Africa",
      description:
        "Fondation de KLC NET IT Africa à Lokossa, Bénin, avec la vision de démocratiser les technologies numériques en Afrique de l'Ouest.",
      color: "primary",
      icon: "Building",
    },
    {
      year: "2019",
      title: "Premiers contrats institutionnels",
      description:
        "Premiers contrats avec des institutions locales et des PME béninoises. Mise en place des premières infrastructures réseau.",
      color: "blue",
      icon: "Handshake",
    },
    {
      year: "2020",
      title: "Lancement du centre de formation IT",
      description:
        "Ouverture du centre de formation IT à Lokossa. Premiers programmes certifiants en développement web et administration réseau.",
      color: "accent",
      icon: "GraduationCap",
    },
    {
      year: "2021",
      title: "Expansion cloud & cybersécurité",
      description:
        "Extension des services vers le cloud computing et la cybersécurité. Recrutement de spécialistes certifiés CEH et AWS.",
      color: "violet",
      icon: "Shield",
    },
    {
      year: "2022",
      title: "Partenariats Cisco & Microsoft",
      description:
        "Obtention des accréditations partenaires certifiants Cisco Academy et Microsoft Learn. Programme CCNA et Azure officiels.",
      color: "amber",
      icon: "BadgeCheck",
    },
    {
      year: "2023",
      title: "Transformation en BENILAB SERVICES HUB",
      description:
        "Rebranding et transformation en BENILAB SERVICES HUB — hub technologique intégrant services IT, formation et conseil.",
      color: "rose",
      icon: "Rocket",
    },
    {
      year: "2024",
      title: "30+ projets livrés, 25 clients",
      description:
        "Plus de 30 projets livrés avec succès, 25 clients satisfaits dans 9 secteurs. Reconnaissance comme référence tech au Bénin.",
      color: "primary",
      icon: "Star",
    },
  ];

  const values = [
    { name: "Excellence", color: "amber" },
    { name: "Innovation", color: "amber" },
    { name: "Proximité", color: "amber" },
    { name: "Intégrité", color: "amber" },
  ];

  const partners = [
    {
      name: "Cisco",
      color: "blue",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Microsoft",
      color: "sky",
      textColor: "text-sky-600",
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
    },
    {
      name: "Google",
      color: "red",
      textColor: "text-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      name: "AWS",
      color: "amber",
      textColor: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      name: "OVHcloud",
      color: "blue",
      textColor: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      name: "Moov Africa",
      color: "green",
      textColor: "text-accent",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
  ];

  const differences = [
    {
      title: "Innovation",
      description:
        "Nous intégrons les technologies les plus récentes pour des solutions avant-gardistes adaptées au contexte africain.",
      icon: "Lightbulb",
      color: "amber",
    },
    {
      title: "Proximité",
      description:
        "Présents à Lokossa, nous comprenons les enjeux locaux. Un interlocuteur dédié pour chaque projet.",
      icon: "MapPin",
      color: "primary",
    },
    {
      title: "Prix Compétitifs",
      description:
        "Des tarifs adaptés au marché béninois et africain, sans compromis sur la qualité des livrables.",
      icon: "Wallet",
      color: "accent",
    },
    {
      title: "Certifications",
      description:
        "Équipe certifiée Cisco, Microsoft, Google et AWS. Des garanties de compétences reconnues internationalement.",
      icon: "BadgeCheck",
      color: "blue",
    },
    {
      title: "Support Continu",
      description:
        "Maintenance proactive, support 7j/7 et formation des équipes pour assurer la pérennité de vos solutions.",
      icon: "LifeBuoy",
      color: "violet",
    },
    {
      title: "Garantie Qualité",
      description:
        "98% de satisfaction client. Chaque projet est livré dans les délais avec des tests approfondis.",
      icon: "ThumbsUp",
      color: "rose",
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      Building: () => (
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 12h4M10 8h4M14 21v-3a2 2 0 00-4 0v3M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-2M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16"
          />
        </svg>
      ),
      Handshake: () => (
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 17l2 2a1 1 0 103-3l-3.88-3.88a3 3 0 00-4.24 0l-.88.88a1 1 0 11-3-3l2.81-2.81a5.79 5.79 0 017.06-.87l.47.28a2 2 0 001.42.25L21 4M21 3l1 11h-2M3 3L2 14l6.5 6.5a1 1 0 103-3M3 4h8"
          />
        </svg>
      ),
      GraduationCap: () => (
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21.42 10.922a1 1 0 00-.019-1.838L12.83 5.18a2 2 0 00-1.66 0L2.6 9.08a1 1 0 000 1.832l8.57 3.908a2 2 0 001.66 0zM22 10v6M6 12.5V16a6 3 0 0012 0v-3.5"
          />
        </svg>
      ),
      Shield: () => (
        <svg
          className="h-5 w-5 text-white"
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
      BadgeCheck: () => (
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3.85 8.62a4 4 0 014.78-4.77 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.77 4.78 4 4 0 01-6.75 0 4 4 0 01-4.78-4.77 4 4 0 010-6.76zM9 12l2 2 4-4"
          />
        </svg>
      ),
      Rocket: () => (
        <svg
          className="h-5 w-5 text-white"
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
      Star: () => (
        <svg
          className="h-5 w-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.525 2.295a.53.53 0 01.95 0l2.31 4.679a2.123 2.123 0 001.595 1.16l5.166.756a.53.53 0 01.294.904l-3.736 3.638a2.123 2.123 0 00-.611 1.878l.882 5.14a.53.53 0 01-.771.56l-4.618-2.428a2.122 2.122 0 00-1.973 0L6.396 21.01a.53.53 0 01-.77-.56l.881-5.139a2.122 2.122 0 00-.611-1.879L2.16 9.795a.53.53 0 01.294-.906l5.165-.755a2.122 2.122 0 001.597-1.16z"
          />
        </svg>
      ),
      FolderOpen: () => (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 14l1.5-2.9A2 2 0 019.24 10H20a2 2 0 011.94 2.5l-1.54 6a2 2 0 01-1.95 1.5H4a2 2 0 01-2-2V5a2 2 0 012-2h3.9a2 2 0 011.69.9l.81 1.2a2 2 0 001.67.9H18a2 2 0 012 2v2"
          />
        </svg>
      ),
      Users: () => (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.128a4 4 0 010 7.744M22 21v-2a4 4 0 00-3-3.87M9 7a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
      ),
      Clock: () => (
        <svg
          className="h-6 w-6"
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
      ),
      Lightbulb: () => (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"
          />
        </svg>
      ),
      MapPin: () => (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 01-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0116 0z"
          />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      Wallet: () => (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7V4a1 1 0 00-1-1H5a2 2 0 000 4h15a1 1 0 011 1v4h-3a2 2 0 000 4h3a1 1 0 001-1v-2a1 1 0 00-1-1M3 5v14a2 2 0 002 2h15a1 1 0 001-1v-4"
          />
        </svg>
      ),
      LifeBuoy: () => (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.93 4.93l4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24M12 12a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
      ),
      ThumbsUp: () => (
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 5.88L14 10h5.83a2 2 0 011.92 2.56l-2.33 8A2 2 0 0117.5 22H4a2 2 0 01-2-2v-8a2 2 0 012-2h2.76a2 2 0 001.79-1.11L12 2a3.13 3.13 0 013 3.88zM7 10v12"
          />
        </svg>
      ),
      Heart: () => (
        <svg
          className="h-5 w-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2 9.5a5.5 5.5 0 019.591-3.676.56.56 0 00.818 0A5.49 5.49 0 0122 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 01-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5z"
          />
        </svg>
      ),
    };
    const IconComponent = icons[iconName] || icons.Star;
    return <IconComponent />;
  };

  const getStatIcon = (iconName) => {
    const icons = {
      FolderOpen: () => (
        <svg
          className="h-6 w-6 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 14l1.5-2.9A2 2 0 019.24 10H20a2 2 0 011.94 2.5l-1.54 6a2 2 0 01-1.95 1.5H4a2 2 0 01-2-2V5a2 2 0 012-2h3.9a2 2 0 011.69.9l.81 1.2a2 2 0 001.67.9H18a2 2 0 012 2v2"
          />
        </svg>
      ),
      Users: () => (
        <svg
          className="h-6 w-6 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.128a4 4 0 010 7.744M22 21v-2a4 4 0 00-3-3.87M9 7a4 4 0 100-8 4 4 0 000 8z"
          />
        </svg>
      ),
      GraduationCap: () => (
        <svg
          className="h-6 w-6 opacity-70"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21.42 10.922a1 1 0 00-.019-1.838L12.83 5.18a2 2 0 00-1.66 0L2.6 9.08a1 1 0 000 1.832l8.57 3.908a2 2 0 001.66 0zM22 10v6M6 12.5V16a6 3 0 0012 0v-3.5"
          />
        </svg>
      ),
      Clock: () => (
        <svg
          className="h-6 w-6 opacity-70"
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
      ),
    };
    return icons[iconName]();
  };

  return (
    <>
      <section
        className="py-20 sm:py-28 relative overflow-hidden"
        style={{
          backgroundColor: "#0A1F29",
          backgroundImage: `radial-gradient(80% 60% at 50% -20%, rgba(28, 116, 160, 0.2) 0%, transparent 60%),
                           radial-gradient(60% 50% at 80% 60%, rgba(249, 112, 21, 0.08) 0%, transparent 50%),
                           radial-gradient(50% 40% at 20% 80%, rgba(27, 157, 74, 0.06) 0%, transparent 50%)`,
        }}
      >
        <div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-[#2D9BD2]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-12 w-80 h-80 rounded-full bg-[#2D9BD2]/8 blur-3xl pointer-events-none"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(rgba(249, 112, 21, 0.8) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-[#2D9BD2]/20 border border-[#2D9BD2]/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <svg
              className="h-3.5 w-3.5 text-[#2D9BD2]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 12h4M10 8h4M14 21v-3a2 2 0 00-4 0v3M6 10H4a2 2 0 00-2 2v7a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2h-2M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16"
              />
            </svg>
            <span className="text-xs font-bold text-[#2D9BD2] uppercase tracking-widest">
              Notre histoire
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-heading tracking-tight mb-5 animate-slide-up">
            À Propos de&nbsp;
            <span className="bg-gradient-to-r from-[#F97015] to-[#F99E1F] bg-clip-text text-transparent">
              BENILAB SERVICES
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-8 animate-slide-up">
            Le hub technologique de référence à Lokossa, Bénin — au cœur de la
            transformation digitale de l'Afrique de l'Ouest depuis 2018.
          </p>
          <div className="flex flex-wrap justify-center gap-3 animate-slide-up">
            <span className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
              <svg
                className="h-3.5 w-3.5 text-[#2D9BD2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
              Fondé en 2018
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
              <svg
                className="h-3.5 w-3.5 text-[#2D9BD2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
              Lokossa, Bénin
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
              <svg
                className="h-3.5 w-3.5 text-[#2D9BD2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
              30+ projets
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
              <svg
                className="h-3.5 w-3.5 text-[#2D9BD2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
              9+ secteurs
            </span>
            <span className="flex items-center gap-1.5 text-sm text-white/80 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
              <svg
                className="h-3.5 w-3.5 text-[#2D9BD2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4"
                />
              </svg>
              Certifié Cisco & Microsoft
            </span>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Valeurs */}
      <section className="py-16 sm:py-20 bg-[#0B1119]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#2D9BD2] uppercase tracking-widest mb-3">
              Ce qui nous guide
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#DCE0E5] font-heading">
              Mission, Vision & Valeurs
            </h2>
            <p className="text-[#7B899D] mt-3 max-w-xl mx-auto">
              Les piliers qui définissent notre identité et notre engagement
              envers nos clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Mission */}
            <div className="relative bg-[#121A26] border border-[#243042] rounded-2xl p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#2D9BD2] rounded-l-2xl"></div>
              <div className="w-14 h-14 bg-[#2D9BD2]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="h-7 w-7 text-[#2D9BD2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#DCE0E5] font-heading mb-3">
                Notre Mission
              </h3>
              <p className="text-[#7B899D] leading-relaxed text-sm">
                Démocratiser l'accès aux technologies numériques en Afrique en
                fournissant des solutions IT sur mesure, accessibles et durables
                aux entreprises, institutions et professionnels béninois et
                ouest-africains.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[#2D9BD2] text-sm font-semibold">
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
                    d="M9 18l6-6-6-6"
                  />
                </svg>
                Accessibilité avant tout
              </div>
            </div>
            {/* Vision */}
            <div className="relative bg-[#121A26] border border-[#243042] rounded-2xl p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#28BD5F] rounded-l-2xl"></div>
              <div className="w-14 h-14 bg-[#28BD5F]/10 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="h-7 w-7 text-[#28BD5F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20M2 12h20" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#DCE0E5] font-heading mb-3">
                Notre Vision
              </h3>
              <p className="text-[#7B899D] leading-relaxed text-sm">
                Devenir le leader africain de l'ingénierie informatique, reconnu
                pour l'excellence de ses solutions, la qualité de ses formations
                et son impact positif sur l'économie numérique du continent.
              </p>
              <div className="mt-5 flex items-center gap-2 text-[#28BD5F] text-sm font-semibold">
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
                    d="M9 18l6-6-6-6"
                  />
                </svg>
                Leadership continental
              </div>
            </div>
            {/* Valeurs */}
            <div className="relative bg-[#121A26] border border-[#243042] rounded-2xl p-8 overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F59E0B] rounded-l-2xl"></div>
              <div className="w-14 h-14 bg-[#FEF3C7] rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                <svg
                  className="h-7 w-7 text-[#D97706]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.477 12.89l1.515 8.526a.5.5 0 01-.81.47l-3.58-2.687a1 1 0 00-1.197 0l-3.586 2.686a.5.5 0 01-.81-.469l1.514-8.526M12 2a6 6 0 100 12 6 6 0 000-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#DCE0E5] font-heading mb-3">
                Nos Valeurs
              </h3>
              <div className="space-y-2.5">
                {values.map((value, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-3.5 w-3.5 text-[#D97706]"
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
                    </div>
                    <span className="text-sm font-semibold text-[#DCE0E5]">
                      {value.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 sm:py-20 bg-[#202C3C]/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#2D9BD2] uppercase tracking-widest mb-3">
              Notre parcours
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#DCE0E5] font-heading">
              Notre Histoire
            </h2>
            <p className="text-[#7B899D] mt-3 text-base max-w-lg mx-auto">
              De KLC NET IT Africa à BENILAB SERVICES HUB — 6 ans de croissance
              et d'impact numérique au Bénin.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2D9BD2]/20 via-[#243042] to-[#2D9BD2]/20"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, idx) => (
                <div
                  key={idx}
                  className={`relative flex items-center gap-0 lg:gap-8 transition-all duration-700 animate-on-scroll opacity-0 translate-y-8 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <div
                    className={`flex-1 bg-[#121A26] border border-[#243042] rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200 ml-12 lg:ml-0 ${idx % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}
                  >
                    <div
                      className={`flex items-center gap-2 mb-2 ${idx % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}
                    >
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                          event.color === "primary"
                            ? "bg-[#2D9BD2]"
                            : event.color === "blue"
                              ? "bg-blue-500"
                              : event.color === "accent"
                                ? "bg-[#28BD5F]"
                                : event.color === "violet"
                                  ? "bg-violet-500"
                                  : event.color === "amber"
                                    ? "bg-amber-500"
                                    : "bg-rose-500"
                        }`}
                      >
                        {event.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#DCE0E5] text-base font-heading mb-1.5">
                      {event.title}
                    </h3>
                    <p className="text-sm text-[#7B899D] leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="hidden lg:flex flex-col items-center flex-shrink-0 w-12">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shadow-md border-4 border-[#0B1119] z-10 ${
                        event.color === "primary"
                          ? "bg-[#2D9BD2]"
                          : event.color === "blue"
                            ? "bg-blue-500"
                            : event.color === "accent"
                              ? "bg-[#28BD5F]"
                              : event.color === "violet"
                                ? "bg-violet-500"
                                : event.color === "amber"
                                  ? "bg-amber-500"
                                  : "bg-rose-500"
                      }`}
                    >
                      {getIcon(event.icon)}
                    </div>
                  </div>
                  <div className="hidden lg:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#0A1F29] to-[#173645] relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#2D9BD2]/15 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#2D9BD2] uppercase tracking-widest mb-3">
              En chiffres
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading">
              BENILAB en quelques chiffres
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center group transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <div className={`${stat.color}`}>
                    {getStatIcon(stat.icon)}
                  </div>
                </div>
                <div
                  className={`text-4xl font-bold font-heading mb-1 ${stat.color}`}
                >
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 sm:py-20 bg-[#202C3C]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#2D9BD2] uppercase tracking-widest mb-3">
              Écosystème technologique
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#DCE0E5] font-heading">
              Nos Partenaires & Technologies
            </h2>
            <p className="text-[#7B899D] mt-3 max-w-lg mx-auto">
              Des partenariats stratégiques avec les leaders technologiques
              mondiaux pour vous offrir les meilleures solutions.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center justify-center p-5 rounded-2xl border-2 ${partner.textColor} ${partner.bgColor} ${partner.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-current/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}
                >
                  <svg
                    className="h-5 w-5 opacity-70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.85 8.62a4 4 0 014.78-4.77 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.77 4.78 4 4 0 01-6.75 0 4 4 0 01-4.78-4.77 4 4 0 010-6.76zM9 12l2 2 4-4"
                    />
                  </svg>
                </div>
                <span className="text-sm font-bold text-center leading-tight">
                  {partner.name}
                </span>
                <span className="text-xs mt-1 opacity-60">Partenaire</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-20 bg-[#0B1119]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#2D9BD2] uppercase tracking-widest mb-3">
              Pourquoi nous choisir
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#DCE0E5] font-heading">
              Ce qui nous différencie
            </h2>
            <p className="text-[#7B899D] mt-3 max-w-xl mx-auto">
              6 raisons pour lesquelles les entreprises béninoises font
              confiance à BENILAB.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differences.map((diff, idx) => (
              <div
                key={idx}
                className="bg-[#121A26] border border-[#243042] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    diff.color === "amber"
                      ? "bg-amber-100 text-amber-600"
                      : diff.color === "primary"
                        ? "bg-[#2D9BD2]/10 text-[#2D9BD2]"
                        : diff.color === "accent"
                          ? "bg-green-100 text-[#28BD5F]"
                          : diff.color === "blue"
                            ? "bg-blue-100 text-blue-600"
                            : diff.color === "violet"
                              ? "bg-violet-100 text-violet-600"
                              : "bg-rose-100 text-rose-600"
                  } group-hover:scale-110 transition-transform duration-200`}
                >
                  {diff.icon === "Lightbulb" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 006 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5M9 18h6M10 22h4"
                      />
                    </svg>
                  )}
                  {diff.icon === "MapPin" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 01-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0116 0z"
                      />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  )}
                  {diff.icon === "Wallet" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7V4a1 1 0 00-1-1H5a2 2 0 000 4h15a1 1 0 011 1v4h-3a2 2 0 000 4h3a1 1 0 001-1v-2a1 1 0 00-1-1M3 5v14a2 2 0 002 2h15a1 1 0 001-1v-4"
                      />
                    </svg>
                  )}
                  {diff.icon === "BadgeCheck" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.85 8.62a4 4 0 014.78-4.77 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.77 4.78 4 4 0 01-6.75 0 4 4 0 01-4.78-4.77 4 4 0 010-6.76zM9 12l2 2 4-4"
                      />
                    </svg>
                  )}
                  {diff.icon === "LifeBuoy" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.93 4.93l4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24M12 12a4 4 0 100-8 4 4 0 000 8z"
                      />
                    </svg>
                  )}
                  {diff.icon === "ThumbsUp" && (
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 5.88L14 10h5.83a2 2 0 011.92 2.56l-2.33 8A2 2 0 0117.5 22H4a2 2 0 01-2-2v-8a2 2 0 012-2h2.76a2 2 0 001.79-1.11L12 2a3.13 3.13 0 013 3.88zM7 10v12"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg font-bold text-[#DCE0E5] font-heading mb-2">
                  {diff.title}
                </h3>
                <p className="text-sm text-[#7B899D] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundColor: "#0A1F29",
          backgroundImage: `radial-gradient(80% 60% at 50% -20%, rgba(28, 116, 160, 0.2) 0%, transparent 60%),
                           radial-gradient(60% 50% at 80% 60%, rgba(249, 112, 21, 0.08) 0%, transparent 50%),
                           radial-gradient(50% 40% at 20% 80%, rgba(27, 157, 74, 0.06) 0%, transparent 50%)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2D9BD2]/5 to-transparent pointer-events-none"></div>
        <div className="absolute -top-12 left-1/4 w-64 h-64 rounded-full bg-[#28BD5F]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-12 right-1/4 w-64 h-64 rounded-full bg-[#2D9BD2]/10 blur-3xl pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="relative inline-flex mb-8">
            <div className="w-20 h-20 bg-[#2D9BD2]/20 rounded-3xl flex items-center justify-center border border-[#2D9BD2]/30">
              <svg
                className="h-10 w-10 text-[#2D9BD2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 00-9.591-3.676.6.6 0 01-.818.001A5.5 5.5 0 002 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 002.879.052 2.12 2.12 0 00-.004-3 2.124 2.124 0 103-3 2.124 2.124 0 003.004 0 2 2 0 000-2.828l-1.881-1.882a2.41 2.41 0 00-3.409 0l-1.71 1.71a2 2 0 01-2.828 0 2 2 0 010-2.828l2.823-2.762"
                />
              </svg>
            </div>
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#28BD5F] rounded-full border-2 border-[#0B1119] animate-pulse"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-heading mb-4">
            Rejoignez l'Aventure&nbsp;
            <span className="bg-gradient-to-r from-[#F97015] to-[#F99E1F] bg-clip-text text-transparent">
              BeniLab
            </span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Que vous soyez client, partenaire ou futur talent — faites partie de
            la révolution digitale au Bénin avec nous.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 text-base bg-gradient-to-br from-[#1C74A0] to-[#1D5672] text-white hover:opacity-90 font-bold shadow-lg shadow-[#2D9BD2]/30 px-8 rounded-xl transition-all"
            >
              {getIcon("Heart")}
              Nous contacter
            </a>
            <a
              href="/formations"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 text-base border border-white/20 text-white bg-white/8 hover:bg-white/15 backdrop-blur-sm font-semibold px-8 rounded-xl transition-all"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21.42 10.922a1 1 0 00-.019-1.838L12.83 5.18a2 2 0 00-1.66 0L2.6 9.08a1 1 0 000 1.832l8.57 3.908a2 2 0 001.66 0zM22 10v6M6 12.5V16a6 3 0 0012 0v-3.5"
                />
              </svg>
              Nos Formations
            </a>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/50 text-xs">
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-[#2D9BD2]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M16 3.128a4 4 0 010 7.744M22 21v-2a4 4 0 00-3-3.87M9 7a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
              25+ clients satisfaits
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-[#28BD5F]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 01-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0116 0z"
                />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Lokossa, Bénin
            </span>
            <span className="w-1 h-1 rounded-full bg-white/30"></span>
            <span className="flex items-center gap-1.5">
              <svg
                className="h-3.5 w-3.5 text-amber-400"
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
              Depuis 2018
            </span>
          </div>
        </div>
      </section>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default AProposPage;
