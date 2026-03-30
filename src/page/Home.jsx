import React, { useState } from "react";
import { AllSections } from "../components/HomeComponents";
import CTA from "../components/NewsletterSection";

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A1F29]">
        {/* Background gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(220,224,229,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220,224,229,0.3) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm text-sm text-slate-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></span>
              🌍 Hub Technologique au Bénin
            </div>

            {/* Titre principal */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
              Votre Partenaire pour la
              <br className="hidden sm:block" />
              <span className="bg-linear-to-r from-[#F97015] to-[#F99E1F] bg-clip-text text-transparent">
                Transformation Digitale
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
              BENILAB SERVICES vous accompagne dans votre aventure numérique —
              du développement web à l'infrastructure réseau, en passant par la
              formation et le conseil IT.
            </p>

            {/* Boutons CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="/devis"
                className="inline-flex items-center justify-center whitespace-nowrap transition-colors h-11 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 shadow-lg font-semibold px-8 py-3 rounded-xl text-base animate-pulse"
              >
                <svg
                  className="lucide lucide-zap h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                    strokeWidth="2"
                  ></path>
                </svg>
                Démarrer un Projet
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-white/20 text-white bg-white/8 hover:bg-white/15 backdrop-blur-sm font-semibold px-8 py-3 rounded-xl text-base"
              >
                Découvrir nos Services
                <svg
                  className="lucide lucide-arrow-right h-5 w-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2"></path>
                </svg>
              </a>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#2D9BD2] font-heading">
                  50+
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Projets</div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#2D9BD2] font-heading">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  Satisfaction
                </div>
              </div>
              <div className="bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-[#2D9BD2] font-heading">
                  5+
                </div>
                <div className="text-xs text-slate-400 mt-0.5">Années</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full">
            <path
              d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </section>

      {/* Section Statistiques */}
      <section className="bg-[#0B1119] border-t-4 border-[#2D9BD2] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#202C3C] mb-4 group-hover:bg-[#2D9BD2]/10 transition-colors">
                <svg
                  className="lucide lucide-award h-7 w-7 text-[#2D9BD2]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526M12 2a6 6 0 0 0-6 6c0 1.5.5 3 2 4"
                    strokeWidth="2"
                  ></path>
                  <circle cx="12" cy="8" r="6" strokeWidth="2"></circle>
                </svg>
              </div>
              <div className="text-4xl font-bold font-heading text-[#2D9BD2]">
                <span>0+</span>
              </div>
              <div className="text-[#7B899D] text-sm mt-1 font-medium">
                Projets Réalisés
              </div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#202C3C] mb-4 group-hover:bg-[#2D9BD2]/10 transition-colors">
                <svg
                  className="lucide lucide-users h-7 w-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"
                    strokeWidth="2"
                  ></path>
                  <circle cx="9" cy="7" r="4" strokeWidth="2"></circle>
                </svg>
              </div>
              <div className="text-4xl font-bold font-heading text-blue-600">
                <span>0+</span>
              </div>
              <div className="text-[#7B899D] text-sm mt-1 font-medium">
                Clients Satisfaits
              </div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#202C3C] mb-4 group-hover:bg-[#2D9BD2]/10 transition-colors">
                <svg
                  className="lucide lucide-clock h-7 w-7 text-[#28BD5F]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                  <path d="M12 6v6l4 2" strokeWidth="2"></path>
                </svg>
              </div>
              <div className="text-4xl font-bold font-heading text-[#28BD5F]">
                <span>0+</span>
              </div>
              <div className="text-[#7B899D] text-sm mt-1 font-medium">
                Années d'Expérience
              </div>
            </div>
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#202C3C] mb-4 group-hover:bg-[#2D9BD2]/10 transition-colors">
                <svg
                  className="lucide lucide-circle-check-big h-7 w-7 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M21.801 10A10 10 0 1 1 17 3.335M9 11l3 3L22 4"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
              <div className="text-4xl font-bold font-heading text-green-600">
                <span>0%</span>
              </div>
              <div className="text-[#7B899D] text-sm mt-1 font-medium">
                Taux de Réussite
              </div>
            </div>
          </div>
        </div>
      </section>

      <AllSections />

      {/* Section Appel à l'action */}
      <CTA />
      <NewsletterSection />
    </>
  );
};

export default HomePage;

const NewsletterSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", formData);
  };

  return (
    <main className="flex-1 text-gray-200 font-sans text-base">
      <div className="overflow-x-hidden">
        {/* Newsletter Section */}
        <section className="py-16 bg-linear-to-br from-gray-900 to-gray-800">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/20 mb-6">
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
                className="h-7 w-7 text-blue-500"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Restez informé
            </h2>
            <p className="text-gray-400 text-base mb-8">
              Recevez nos actualités IT, conseils numériques et offres
              exclusives réservés à la communauté BENILAB.
            </p>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md border border-gray-700 px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-white/5 text-white placeholder:text-gray-500"
                  placeholder="Votre prénom"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex h-9 w-full rounded-md border border-gray-700 px-3 py-1 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 flex-1 bg-white/5 text-white placeholder:text-gray-500"
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-6 text-base w-full font-bold rounded-xl bg-blue-500 text-white hover:bg-blue-600"
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
                  className="h-4 w-4 mr-2"
                >
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                  <path d="m21.854 2.147-10.94 10.939"></path>
                </svg>
                S'abonner gratuitement
              </button>
              <p className="text-xs text-gray-600">
                Pas de spam. Désabonnez-vous à tout moment.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};
