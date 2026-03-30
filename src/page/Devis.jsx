import React, { useState } from "react";

const DevisPage = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    service: "",
    description: "",
    budget: "",
    deadline: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const services = [
    {
      id: "web",
      name: "Développement Web",
      price: "50k – 500k FCFA",
      icon: "globe",
      color: "blue",
    },
    {
      id: "network",
      name: "Infrastructure Réseau",
      price: "150k – 2M FCFA",
      icon: "server",
      color: "slate",
    },
    {
      id: "security",
      name: "Cybersécurité",
      price: "100k – 800k FCFA",
      icon: "shield",
      color: "red",
    },
    {
      id: "training",
      name: "Formation IT",
      price: "35k – 150k FCFA",
      icon: "graduation",
      color: "emerald",
    },
    {
      id: "marketing",
      name: "Marketing Digital",
      price: "50k – 300k/mois FCFA",
      icon: "chart",
      color: "amber",
    },
    {
      id: "consulting",
      name: "Conseil IT",
      price: "75k – 500k FCFA",
      icon: "bulb",
      color: "violet",
    },
    {
      id: "other",
      name: "Autre",
      price: "Sur devis",
      icon: "search",
      color: "gray",
    },
  ];

  const budgets = [
    { value: "lt100k", label: "Moins de 100k FCFA" },
    { value: "100k_500k", label: "100k – 500k FCFA" },
    { value: "500k_2m", label: "500k – 2M FCFA" },
    { value: "gt2m", label: "Plus de 2M FCFA" },
    { value: "flexible", label: "À définir" },
  ];

  const deadlines = [
    { value: "urgent", label: "Urgent (< 2 semaines)" },
    { value: "court", label: "Court terme (1 mois)" },
    { value: "moyen", label: "Moyen terme (3 mois)" },
    { value: "long", label: "Long terme (6 mois+)" },
    { value: "flexible", label: "Flexible" },
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service.id);
    setFormData({ ...formData, service: service.name });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Devis submitted:", formData);
    // Ajoutez votre logique d'envoi ici
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const getIcon = (iconName, _) => {
    const icons = {
      globe: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
          <path d="M2 12h20"></path>
        </svg>
      ),
      server: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <rect width="20" height="8" x="2" y="2" rx="2" ry="2"></rect>
          <rect width="20" height="8" x="2" y="14" rx="2" ry="2"></rect>
          <line x1="6" x2="6.01" y1="6" y2="6"></line>
          <line x1="6" x2="6.01" y1="18" y2="18"></line>
        </svg>
      ),
      shield: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
      graduation: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path>
          <path d="M22 10v6"></path>
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path>
        </svg>
      ),
      chart: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M5 21v-6"></path>
          <path d="M12 21V3"></path>
          <path d="M19 21V9"></path>
        </svg>
      ),
      bulb: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
      ),
      search: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <path d="m21 21-4.34-4.34"></path>
          <circle cx="11" cy="11" r="8"></circle>
        </svg>
      ),
    };
    return icons[iconName];
  };

  const getColorClass = (color) => {
    const colors = {
      blue: "bg-blue-500/15 text-blue-600",
      slate: "bg-slate-500/15 text-slate-600",
      red: "bg-red-500/15 text-red-600",
      emerald: "bg-emerald-500/15 text-emerald-600",
      amber: "bg-amber-500/15 text-amber-600",
      violet: "bg-violet-500/15 text-violet-600",
      gray: "bg-gray-400/15 text-gray-600",
    };
    return colors[color];
  };

  return (
    <main
      className="flex-1"
      style={{
        borderColor: "rgb(36, 48, 66)",
        borderWidth: "0px",
        borderStyle: "solid",
        flex: "1 1 0%",
        color: "rgb(220, 224, 229)",
        fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
        fontSize: "16px",
        letterSpacing: "-0.16px",
      }}
    >
      <div
        className="min-h-screen"
        style={{
          minHeight: "100vh",
          backgroundColor: "rgb(11, 17, 25)",
        }}
      >
        {/* Hero Section */}
        <section
          className="relative py-16 md:py-24 overflow-hidden"
          style={{
            overflow: "hidden",
            paddingTop: "6rem",
            paddingBottom: "6rem",
            backgroundColor: "rgb(10, 31, 41)",
            backgroundImage:
              "radial-gradient(80% 60% at 50% -20%, rgba(28, 116, 160, 0.2) 0%, transparent 60%), radial-gradient(60% 50% at 80% 60%, rgba(249, 112, 21, 0.08) 0%, transparent 50%), radial-gradient(50% 40% at 20% 80%, rgba(27, 157, 74, 0.06) 0%, transparent 50%)",
          }}
        >
          <div
            className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center"
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "48rem",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium mb-6"
              style={{
                borderColor: "rgba(45, 155, 210, 0.3)",
                borderWidth: "1px",
                borderStyle: "solid",
                marginBottom: "1.5rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                padding: "0.375rem 1rem",
                fontSize: "14px",
                lineHeight: "1.65",
                color: "rgb(45, 155, 210)",
              }}
            >
              Gratuit et sans engagement
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              style={{
                fontFamily: '"Space Grotesk", sans-serif',
                letterSpacing: "-0.025em",
                lineHeight: "1",
                fontSize: "3rem",
                marginBottom: "1rem",
                color: "rgb(255, 255, 255)",
              }}
            >
              Demandez un Devis{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, rgb(249, 112, 21), rgb(249, 158, 31))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Gratuit
              </span>
            </h1>
            <p
              className="text-lg text-white/70 max-w-xl mx-auto leading-relaxed"
              style={{
                marginRight: "auto",
                marginLeft: "auto",
                maxWidth: "36rem",
                fontSize: "18px",
                lineHeight: "1.625",
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              Réponse garantie sous 24h — Décrivez votre projet en 3 étapes
              simples et recevez une estimation personnalisée.
            </p>
          </div>
        </section>

        {/* Features Cards */}
        <section
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 -mt-8"
          style={{
            zIndex: 10,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-2rem",
            maxWidth: "56rem",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className="rounded-2xl px-5 py-4 shadow-sm flex items-center gap-4"
              style={{
                borderColor: "rgb(36, 48, 66)",
                borderWidth: "1px",
                borderStyle: "solid",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderRadius: "1rem",
                backgroundColor: "rgb(11, 17, 25)",
                padding: "1rem 1.25rem",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  display: "flex",
                  height: "2.75rem",
                  width: "2.75rem",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "24px",
                  backgroundColor: "rgba(45, 155, 210, 0.1)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  style={{ color: "rgb(45, 155, 210)" }}
                >
                  <path d="M12 7v14"></path>
                  <path d="M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path>
                  <path d="M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5"></path>
                  <rect x="3" y="7" width="18" height="4" rx="1"></rect>
                </svg>
              </div>
              <div>
                <p
                  className="text-sm font-bold leading-tight"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: "14px",
                    lineHeight: "1.25",
                    fontWeight: 700,
                    color: "rgb(220, 224, 229)",
                  }}
                >
                  Gratuit & Sans engagement
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    marginTop: "0.125rem",
                    fontSize: "12px",
                    lineHeight: "1.35",
                    color: "rgb(123, 137, 157)",
                  }}
                >
                  Aucun frais, aucune obligation
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl px-5 py-4 shadow-sm flex items-center gap-4"
              style={{
                borderColor: "rgb(36, 48, 66)",
                borderWidth: "1px",
                borderStyle: "solid",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderRadius: "1rem",
                backgroundColor: "rgb(11, 17, 25)",
                padding: "1rem 1.25rem",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  display: "flex",
                  height: "2.75rem",
                  width: "2.75rem",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "24px",
                  backgroundColor: "rgba(45, 155, 210, 0.1)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  style={{ color: "rgb(45, 155, 210)" }}
                >
                  <line x1="10" x2="14" y1="2" y2="2"></line>
                  <line x1="12" x2="15" y1="14" y2="11"></line>
                  <circle cx="12" cy="14" r="8"></circle>
                </svg>
              </div>
              <div>
                <p
                  className="text-sm font-bold leading-tight"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: "14px",
                    lineHeight: "1.25",
                    fontWeight: 700,
                    color: "rgb(220, 224, 229)",
                  }}
                >
                  Réponse sous 24h
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    marginTop: "0.125rem",
                    fontSize: "12px",
                    lineHeight: "1.35",
                    color: "rgb(123, 137, 157)",
                  }}
                >
                  Garantie sur jours ouvrés
                </p>
              </div>
            </div>
            <div
              className="rounded-2xl px-5 py-4 shadow-sm flex items-center gap-4"
              style={{
                borderColor: "rgb(36, 48, 66)",
                borderWidth: "1px",
                borderStyle: "solid",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                borderRadius: "1rem",
                backgroundColor: "rgb(11, 17, 25)",
                padding: "1rem 1.25rem",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  display: "flex",
                  height: "2.75rem",
                  width: "2.75rem",
                  flexShrink: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "24px",
                  backgroundColor: "rgba(45, 155, 210, 0.1)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  style={{ color: "rgb(45, 155, 210)" }}
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </div>
              <div>
                <p
                  className="text-sm font-bold leading-tight"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    fontSize: "14px",
                    lineHeight: "1.25",
                    fontWeight: 700,
                    color: "rgb(220, 224, 229)",
                  }}
                >
                  Étude personnalisée
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{
                    marginTop: "0.125rem",
                    fontSize: "12px",
                    lineHeight: "1.35",
                    color: "rgb(123, 137, 157)",
                  }}
                >
                  Adapté à votre contexte
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section
          className="max-w-3xl mx-auto px-4 sm:px-6 py-14"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "48rem",
            padding: "3.5rem 1.5rem",
          }}
        >
          {/* Step Indicator */}
          <div className="flex items-center justify-center mb-10">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                    style={{
                      borderColor:
                        step >= 1 ? "rgb(45, 155, 210)" : "rgb(36, 48, 66)",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      display: "flex",
                      height: "2.5rem",
                      width: "2.5rem",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "9999px",
                      backgroundColor:
                        step >= 1 ? "rgb(45, 155, 210)" : "rgb(11, 17, 25)",
                      color:
                        step >= 1 ? "rgb(255, 255, 255)" : "rgb(123, 137, 157)",
                      boxShadow:
                        step >= 1
                          ? "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.4) 0px 1px 3px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px -1px"
                          : "none",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
                      <path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
                      <path d="M10 9H8"></path>
                      <path d="M16 13H8"></path>
                      <path d="M16 17H8"></path>
                    </svg>
                  </div>
                  <span
                    className="text-xs font-medium hidden sm:block transition-colors"
                    style={{
                      color:
                        step >= 1 ? "rgb(45, 155, 210)" : "rgb(123, 137, 157)",
                    }}
                  >
                    Votre projet
                  </span>
                </div>
                <div
                  className="w-16 sm:w-28 h-0.5 mx-2 mb-4 transition-colors duration-300"
                  style={{
                    backgroundColor:
                      step >= 2 ? "rgb(45, 155, 210)" : "rgb(36, 48, 66)",
                  }}
                ></div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                    style={{
                      borderColor:
                        step >= 2 ? "rgb(45, 155, 210)" : "rgb(36, 48, 66)",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      display: "flex",
                      height: "2.5rem",
                      width: "2.5rem",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "9999px",
                      backgroundColor:
                        step >= 2 ? "rgb(45, 155, 210)" : "rgb(11, 17, 25)",
                      color:
                        step >= 2 ? "rgb(255, 255, 255)" : "rgb(123, 137, 157)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <span
                    className="text-xs font-medium hidden sm:block transition-colors"
                    style={{
                      color:
                        step >= 2 ? "rgb(45, 155, 210)" : "rgb(123, 137, 157)",
                    }}
                  >
                    Vos coordonnées
                  </span>
                </div>
                <div
                  className="w-16 sm:w-28 h-0.5 mx-2 mb-4 transition-colors duration-300"
                  style={{
                    backgroundColor:
                      step >= 3 ? "rgb(45, 155, 210)" : "rgb(36, 48, 66)",
                  }}
                ></div>
              </div>
              <div className="flex items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                    style={{
                      borderColor:
                        step >= 3 ? "rgb(45, 155, 210)" : "rgb(36, 48, 66)",
                      borderWidth: "2px",
                      borderStyle: "solid",
                      display: "flex",
                      height: "2.5rem",
                      width: "2.5rem",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "9999px",
                      backgroundColor:
                        step >= 3 ? "rgb(45, 155, 210)" : "rgb(11, 17, 25)",
                      color:
                        step >= 3 ? "rgb(255, 255, 255)" : "rgb(123, 137, 157)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <span
                    className="text-xs font-medium hidden sm:block transition-colors"
                    style={{
                      color:
                        step >= 3 ? "rgb(45, 155, 210)" : "rgb(123, 137, 157)",
                    }}
                  >
                    Confirmation
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div
              className="rounded-2xl shadow-sm overflow-hidden"
              style={{
                borderColor: "rgb(36, 48, 66)",
                borderWidth: "1px",
                borderStyle: "solid",
                overflow: "hidden",
                borderRadius: "1rem",
                backgroundColor: "rgb(11, 17, 25)",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
              }}
            >
              <div
                className="px-7 py-5 border-b"
                style={{
                  borderColor: "rgb(36, 48, 66)",
                  borderWidth: "0px 0px 1px",
                  borderStyle: "solid",
                  backgroundColor: "rgba(32, 44, 60, 0.2)",
                  padding: "1.25rem 1.75rem",
                }}
              >
                <h2
                  className="text-lg font-bold"
                  style={{
                    fontFamily: '"Space Grotesk", sans-serif',
                    letterSpacing: "-0.02em",
                    lineHeight: "1.8",
                    fontSize: "18px",
                    color: "rgb(220, 224, 229)",
                  }}
                >
                  {step === 1 && "Étape 1 — Votre projet"}
                  {step === 2 && "Étape 2 — Vos coordonnées"}
                  {step === 3 && "Étape 3 — Confirmation"}
                </h2>
                <p
                  className="text-sm mt-0.5"
                  style={{
                    marginTop: "0.125rem",
                    fontSize: "14px",
                    lineHeight: "1.65",
                    color: "rgb(123, 137, 157)",
                  }}
                >
                  {step === 1 && "Décrivez ce dont vous avez besoin"}
                  {step === 2 && "Comment pouvons-nous vous contacter ?"}
                  {step === 3 && "Vérifiez vos informations avant envoi"}
                </p>
              </div>
              <div className="px-7 py-7">
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <label
                        className="text-sm font-semibold block mb-3"
                        style={{
                          marginBottom: "0.75rem",
                          fontSize: "14px",
                          lineHeight: "1.65",
                          color: "rgb(220, 224, 229)",
                        }}
                      >
                        Service souhaité{" "}
                        <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            type="button"
                            onClick={() => handleServiceSelect(service)}
                            className="flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 text-left transition-all duration-200"
                            style={{
                              borderColor:
                                selectedService === service.id
                                  ? "rgb(45, 155, 210)"
                                  : "rgb(36, 48, 66)",
                              borderWidth: "2px",
                              borderStyle: "solid",
                              backgroundColor:
                                selectedService === service.id
                                  ? "rgba(45, 155, 210, 0.1)"
                                  : "rgb(11, 17, 25)",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.75rem",
                              borderRadius: "24px",
                              padding: "0.875rem 1rem",
                              cursor: "pointer",
                            }}
                          >
                            <div
                              className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${getColorClass(service.color)}`}
                              style={{
                                display: "flex",
                                height: "2.25rem",
                                width: "2.25rem",
                                flexShrink: 0,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "16px",
                              }}
                            >
                              {getIcon(service.icon, service.color)}
                            </div>
                            <div className="min-w-0">
                              <p
                                className="text-sm font-medium leading-tight"
                                style={{
                                  fontSize: "14px",
                                  lineHeight: "1.25",
                                  color:
                                    selectedService === service.id
                                      ? "rgb(45, 155, 210)"
                                      : "rgb(123, 137, 157)",
                                }}
                              >
                                {service.name}
                              </p>
                              <p
                                className="text-xs mt-0.5"
                                style={{
                                  marginTop: "0.125rem",
                                  fontSize: "12px",
                                  lineHeight: "1.35",
                                  color: "rgb(123, 137, 157)",
                                }}
                              >
                                {service.price}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label
                        className="text-sm font-semibold"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.65",
                          color: "rgb(220, 224, 229)",
                        }}
                      >
                        Description du projet{" "}
                        <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                      </label>
                      <textarea
                        name="description"
                        rows="4"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full rounded-md border px-3 py-2 text-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none transition-colors"
                        placeholder="Décrivez votre projet en détail : objectifs, fonctionnalités souhaitées, contexte…"
                        style={{
                          borderColor: "rgb(36, 48, 66)",
                          borderWidth: "1px",
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: "inherit",
                          fontSize: "14px",
                          marginTop: "6px",
                          padding: "0.5rem 0.75rem",
                          resize: "none",
                          borderRadius: "10px",
                          backgroundColor: "rgb(11, 17, 25)",
                          color: "rgb(220, 224, 229)",
                        }}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          className="text-sm font-semibold flex items-center gap-1.5"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            fontSize: "14px",
                            lineHeight: "1.65",
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                            style={{ color: "rgb(45, 155, 210)" }}
                          >
                            <rect
                              width="20"
                              height="12"
                              x="2"
                              y="6"
                              rx="2"
                            ></rect>
                            <circle cx="12" cy="12" r="2"></circle>
                            <path d="M6 12h.01M18 12h.01"></path>
                          </svg>
                          Budget estimé{" "}
                          <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          style={{
                            borderColor: "rgb(36, 48, 66)",
                            borderWidth: "1px",
                            fontFamily:
                              '"Space Grotesk", "DM Sans", sans-serif',
                            fontSize: "14px",
                            marginTop: "6px",
                            padding: "0.5rem 0.75rem",
                            display: "flex",
                            height: "2.25rem",
                            borderRadius: "10px",
                            boxShadow:
                              "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                            backgroundColor: "transparent",
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          <option
                            value=""
                            style={{ backgroundColor: "rgb(11, 17, 25)" }}
                          >
                            Sélectionner un budget
                          </option>
                          {budgets.map((budget) => (
                            <option
                              key={budget.value}
                              value={budget.value}
                              style={{ backgroundColor: "rgb(11, 17, 25)" }}
                            >
                              {budget.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label
                          className="text-sm font-semibold flex items-center gap-1.5"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.375rem",
                            fontSize: "14px",
                            lineHeight: "1.65",
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3.5 w-3.5"
                            style={{ color: "rgb(40, 189, 95)" }}
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 6v6h4"></path>
                          </svg>
                          Délai souhaité{" "}
                          <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                        </label>
                        <select
                          name="deadline"
                          value={formData.deadline}
                          onChange={handleChange}
                          className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          style={{
                            borderColor: "rgb(36, 48, 66)",
                            borderWidth: "1px",
                            fontFamily:
                              '"Space Grotesk", "DM Sans", sans-serif',
                            fontSize: "14px",
                            marginTop: "6px",
                            padding: "0.5rem 0.75rem",
                            display: "flex",
                            height: "2.25rem",
                            borderRadius: "10px",
                            boxShadow:
                              "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                            backgroundColor: "transparent",
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          <option
                            value=""
                            style={{ backgroundColor: "rgb(11, 17, 25)" }}
                          >
                            Sélectionner un délai
                          </option>
                          {deadlines.map((deadline) => (
                            <option
                              key={deadline.value}
                              value={deadline.value}
                              style={{ backgroundColor: "rgb(11, 17, 25)" }}
                            >
                              {deadline.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="flex justify-end pt-2">
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 gap-2 font-semibold"
                        style={{
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          fontWeight: 600,
                          padding: "0.5rem 1rem",
                          backgroundColor: "rgb(45, 155, 210)",
                          display: "inline-flex",
                          height: "2.25rem",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          borderRadius: "10px",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Suivant
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          className="text-sm font-medium"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.65",
                            fontWeight: 500,
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          Nom complet{" "}
                          <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Jean Dupont"
                          style={{
                            borderColor: "rgb(36, 48, 66)",
                            borderWidth: "1px",
                            transition:
                              "color 0.2s, background-color 0.2s, border-color 0.2s",
                            fontFamily:
                              '"Space Grotesk", "DM Sans", sans-serif',
                            fontSize: "14px",
                            marginTop: "6px",
                            padding: "0.25rem 0.75rem",
                            display: "flex",
                            height: "2.25rem",
                            borderRadius: "10px",
                            boxShadow:
                              "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                            backgroundColor: "transparent",
                            color: "rgb(220, 224, 229)",
                          }}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          className="text-sm font-medium"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.65",
                            fontWeight: 500,
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          Email{" "}
                          <span style={{ color: "rgb(45, 155, 210)" }}>*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="vous@exemple.com"
                          style={{
                            borderColor: "rgb(36, 48, 66)",
                            borderWidth: "1px",
                            transition:
                              "color 0.2s, background-color 0.2s, border-color 0.2s",
                            fontFamily:
                              '"Space Grotesk", "DM Sans", sans-serif',
                            fontSize: "14px",
                            marginTop: "6px",
                            padding: "0.25rem 0.75rem",
                            display: "flex",
                            height: "2.25rem",
                            borderRadius: "10px",
                            boxShadow:
                              "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                            backgroundColor: "transparent",
                            color: "rgb(220, 224, 229)",
                          }}
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label
                          className="text-sm font-medium"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.65",
                            fontWeight: 500,
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="+229 97 XX XX XX"
                          style={{
                            borderColor: "rgb(36, 48, 66)",
                            borderWidth: "1px",
                            transition:
                              "color 0.2s, background-color 0.2s, border-color 0.2s",
                            fontFamily:
                              '"Space Grotesk", "DM Sans", sans-serif',
                            fontSize: "14px",
                            marginTop: "6px",
                            padding: "0.25rem 0.75rem",
                            display: "flex",
                            height: "2.25rem",
                            borderRadius: "10px",
                            boxShadow:
                              "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                            backgroundColor: "transparent",
                            color: "rgb(220, 224, 229)",
                          }}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label
                          className="text-sm font-medium"
                          style={{
                            fontSize: "14px",
                            lineHeight: "1.65",
                            fontWeight: 500,
                            color: "rgb(220, 224, 229)",
                          }}
                        >
                          Entreprise / Organisation
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Votre entreprise"
                          style={{
                            borderColor: "rgb(36, 48, 66)",
                            borderWidth: "1px",
                            transition:
                              "color 0.2s, background-color 0.2s, border-color 0.2s",
                            fontFamily:
                              '"Space Grotesk", "DM Sans", sans-serif',
                            fontSize: "14px",
                            marginTop: "6px",
                            padding: "0.25rem 0.75rem",
                            display: "flex",
                            height: "2.25rem",
                            borderRadius: "10px",
                            boxShadow:
                              "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.3) 0px 1px 2px 0px",
                            backgroundColor: "transparent",
                            color: "rgb(220, 224, 229)",
                          }}
                        />
                      </div>
                    </div>
                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-transparent hover:bg-accent h-9 px-4 py-2 gap-2"
                        style={{
                          borderColor: "rgb(36, 48, 66)",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          fontWeight: 500,
                          padding: "0.5rem 1rem",
                          backgroundColor: "transparent",
                          display: "inline-flex",
                          height: "2.25rem",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          borderRadius: "10px",
                          color: "rgb(220, 224, 229)",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        Précédent
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2"
                        style={{
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          fontWeight: 600,
                          padding: "0.5rem 1rem",
                          backgroundColor: "rgb(45, 155, 210)",
                          display: "inline-flex",
                          height: "2.25rem",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          borderRadius: "10px",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Suivant
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div
                      className="rounded-xl border p-5 space-y-4"
                      style={{
                        borderColor: "rgb(36, 48, 66)",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderRadius: "16px",
                        padding: "1.25rem",
                      }}
                    >
                      <h3
                        className="text-sm font-semibold"
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.65",
                          fontWeight: 600,
                          color: "rgb(45, 155, 210)",
                        }}
                      >
                        Récapitulatif de votre demande
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Service souhaité
                          </p>
                          <p
                            className="text-sm font-medium"
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.65",
                              fontWeight: 500,
                              color: "rgb(220, 224, 229)",
                            }}
                          >
                            {formData.service || "Non renseigné"}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">
                            Description du projet
                          </p>
                          <p
                            className="text-sm"
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.65",
                              color: "rgb(220, 224, 229)",
                            }}
                          >
                            {formData.description || "Non renseignée"}
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Budget estimé
                            </p>
                            <p
                              className="text-sm font-medium"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.65",
                                fontWeight: 500,
                                color: "rgb(220, 224, 229)",
                              }}
                            >
                              {budgets.find((b) => b.value === formData.budget)
                                ?.label || "Non renseigné"}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">
                              Délai souhaité
                            </p>
                            <p
                              className="text-sm font-medium"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.65",
                                fontWeight: 500,
                                color: "rgb(220, 224, 229)",
                              }}
                            >
                              {deadlines.find(
                                (d) => d.value === formData.deadline,
                              )?.label || "Non renseigné"}
                            </p>
                          </div>
                        </div>
                        <div
                          className="pt-3 border-t"
                          style={{
                            borderColor: "rgb(36, 48, 66)",
                            borderWidth: "1px 0px 0px",
                            borderStyle: "solid",
                            paddingTop: "0.75rem",
                          }}
                        >
                          <p className="text-xs text-muted-foreground">
                            Vos coordonnées
                          </p>
                          <p
                            className="text-sm"
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.65",
                              color: "rgb(220, 224, 229)",
                            }}
                          >
                            {formData.name || "Nom non renseigné"}
                          </p>
                          <p
                            className="text-sm"
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.65",
                              color: "rgb(220, 224, 229)",
                            }}
                          >
                            {formData.email || "Email non renseigné"}
                          </p>
                          {formData.phone && (
                            <p
                              className="text-sm"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.65",
                                color: "rgb(220, 224, 229)",
                              }}
                            >
                              {formData.phone}
                            </p>
                          )}
                          {formData.company && (
                            <p
                              className="text-sm"
                              style={{
                                fontSize: "14px",
                                lineHeight: "1.65",
                                color: "rgb(220, 224, 229)",
                              }}
                            >
                              {formData.company}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between pt-2">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-transparent hover:bg-accent h-9 px-4 py-2 gap-2"
                        style={{
                          borderColor: "rgb(36, 48, 66)",
                          borderWidth: "1px",
                          borderStyle: "solid",
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          fontWeight: 500,
                          padding: "0.5rem 1rem",
                          backgroundColor: "transparent",
                          display: "inline-flex",
                          height: "2.25rem",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          borderRadius: "10px",
                          color: "rgb(220, 224, 229)",
                          cursor: "pointer",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        Précédent
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2"
                        style={{
                          transition:
                            "color 0.2s, background-color 0.2s, border-color 0.2s",
                          fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                          fontSize: "14px",
                          fontWeight: 600,
                          padding: "0.5rem 1rem",
                          backgroundColor: "rgb(45, 155, 210)",
                          display: "inline-flex",
                          height: "2.25rem",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.5rem",
                          borderRadius: "10px",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        Envoyer ma demande
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </section>

        {/* Bottom CTA */}
        <section
          className="py-12 border-t"
          style={{
            borderColor: "rgb(36, 48, 66)",
            borderWidth: "1px 0px 0px",
            borderStyle: "solid",
            backgroundColor: "rgba(32, 44, 60, 0.2)",
            paddingTop: "3rem",
            paddingBottom: "3rem",
          }}
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p
              className="text-sm mb-3"
              style={{
                marginBottom: "0.75rem",
                fontSize: "14px",
                lineHeight: "1.65",
                color: "rgb(123, 137, 157)",
              }}
            >
              Vous préférez nous parler directement ?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/contact">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border bg-transparent hover:bg-accent h-9 px-4 py-2 gap-2"
                  style={{
                    borderColor: "rgb(36, 48, 66)",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    transition:
                      "color 0.2s, background-color 0.2s, border-color 0.2s",
                    fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                    fontSize: "14px",
                    fontWeight: 500,
                    padding: "0.5rem 1rem",
                    backgroundColor: "transparent",
                    display: "inline-flex",
                    height: "2.25rem",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    borderRadius: "10px",
                    color: "rgb(220, 224, 229)",
                    cursor: "pointer",
                  }}
                >
                  Contacter l'équipe
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </a>
              <a href="tel:+22997000000">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 gap-2 font-semibold"
                  style={{
                    transition:
                      "color 0.2s, background-color 0.2s, border-color 0.2s",
                    fontFamily: '"Space Grotesk", "DM Sans", sans-serif',
                    fontSize: "14px",
                    fontWeight: 600,
                    padding: "0.5rem 1rem",
                    backgroundColor: "rgb(45, 155, 210)",
                    display: "inline-flex",
                    height: "2.25rem",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                    borderRadius: "10px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Appeler maintenant
                </button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default DevisPage;
