import Footer from "../components/Footer";
import Header from "../components/Nav";
import CTA from "../components/NewsletterSection";

// Section Hero / Services
const ServicePage = () => {
  return (
    <>
      <section className="bg-hero-pattern relative py-24 lg:py-32 bg-[#0A1F29]">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/8 backdrop-blur-sm text-sm text-slate-300 mb-6">
            Solutions IT pour l'Afrique
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
            Nos{" "}
            <span className="bg-gradient-to-r from-[#F97015] to-[#F99E1F] bg-clip-text text-transparent">
              Services IT
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Des solutions technologiques complètes et sur mesure pour
            accompagner les entreprises et organisations béninoises dans leur
            transformation numérique.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Développement",
              "Infrastructure",
              "Cybersécurité",
              "Formation",
              "Marketing",
              "Conseil",
            ].map((item, idx) => (
              <a
                key={idx}
                href={`/services#${item.toLowerCase()}`}
                className="px-4 py-2 bg-white/8 border border-white/15 rounded-full text-sm text-slate-300 hover:bg-white/15 hover:text-[#2D9BD2] transition-all duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="px-10">
        <DevWebMobileSection />
        <InfrastructureSection />
        <CybersecuriteSection />
        <FormationSection />
        <MarketingSection />
        <ConseilSection />
      </div>
      <ProcessusSection />

      {/* Footer */}
      <CTA
        Title={"Prêt à démarrer votre projet ?"}
        sub={
          "Contactez notre équipe pour un diagnostic gratuit. Nous étudions votre besoin et vous proposons une solution adaptée à votre budget."
        }
        btn1Text={"Obtenir un Devis Gratuit"}
        btn2Text={"Nous Appeler"}
      />
    </>
  );
};

// Section Développement Web & Mobile
const DevWebMobileSection = () => {
  return (
    <div id="web-mobile" className="scroll-mt-24 ">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-orange-50 border border-orange-200">
            <svg
              className="lucide lucide-code-xml h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"
                strokeWidth="2"
              />
            </svg>
            Sites vitrine, e-commerce & applications
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Développement Web & Mobile
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Nous concevons des solutions numériques modernes et performantes —
            des sites vitrines professionnels aux applications mobiles
            multiplateformes — adaptées aux entreprises béninoises et
            africaines.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Sites vitrine & landing pages optimisés SEO",
              "Applications e-commerce avec paiement Mobile Money",
              "Applications mobiles Flutter & React Native",
              "Dashboards & ERP sur mesure",
              "Progressive Web Apps (PWA)",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 flex-shrink-0"
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
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "React",
              "Vue.js",
              "Laravel",
              "Flutter",
              "Node.js",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-transparent bg-[#202C3C] px-2.5 py-0.5 text-xs font-medium text-[#B6BEC9]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#202C3C] rounded-xl px-4 py-3">
              <p className="text-xs text-[#7B899D] font-medium">À partir de</p>
              <p className="text-lg font-bold text-[#2D9BD2]">
                50 000 – 500 000 FCFA
              </p>
            </div>
            <a
              href="/devis"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Demander un Devis
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
        <div className="relative rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 p-1 shadow-xl">
          <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-6 shadow-lg">
              <svg
                className="lucide lucide-code-xml h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Développement Web & Mobile
            </h3>
            <p className="text-sm text-[#7B899D] mb-6">
              Sites vitrine, e-commerce & applications
            </p>
            <div className="space-y-2">
              {[
                "Sites vitrine & landing pages optimisés SEO",
                "Applications e-commerce avec paiement Mobile Money",
                "Applications mobiles Flutter & React Native",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-sm text-[#7B899D]"
                >
                  <svg
                    className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] flex-shrink-0"
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
            <div className="mt-6 pt-6 border-t border-[#202C3C] flex items-center justify-between">
              <span className="text-sm font-semibold text-white">
                Tarif indicatif
              </span>
              <span className="text-sm font-bold text-[#2D9BD2]">
                50 000 – 500 000 FCFA
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-20" />
    </div>
  );
};

// Section Infrastructure Réseau
const InfrastructureSection = () => {
  return (
    <div id="reseau" className="scroll-mt-24 mt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-blue-50 border border-blue-200">
            <svg
              className="lucide lucide-network h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="16" y="16" width="6" height="6" rx="1" strokeWidth="2" />
              <rect x="2" y="16" width="6" height="6" rx="1" strokeWidth="2" />
              <rect x="9" y="2" width="6" height="6" rx="1" strokeWidth="2" />
              <path
                d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"
                strokeWidth="2"
              />
            </svg>
            LAN, WAN, WiFi & câblage structuré
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Infrastructure Réseau & Télécom
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Conception, déploiement et maintenance d'infrastructures réseau
            robustes pour entreprises, institutions et hôpitaux. Du câblage
            structuré à la fibre optique.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Architecture LAN/WAN & VLAN sécurisés",
              "Déploiement WiFi professionnel Ubiquiti/Cisco",
              "VPN & accès distants sécurisés",
              "Câblage structuré Cat6/Cat6A & fibre optique",
              "Supervision réseau & maintenance préventive",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 flex-shrink-0"
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
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Cisco",
              "Ubiquiti",
              "Fortinet",
              "pfSense",
              "VMware",
              "Fibre",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-transparent bg-[#202C3C] px-2.5 py-0.5 text-xs font-medium text-[#B6BEC9]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#202C3C] rounded-xl px-4 py-3">
              <p className="text-xs text-[#7B899D] font-medium">À partir de</p>
              <p className="text-lg font-bold text-[#2D9BD2]">
                150 000 – 2 000 000 FCFA
              </p>
            </div>
            <a
              href="/devis"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Demander un Devis
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
          <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="lucide lucide-network h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect
                    x="16"
                    y="16"
                    width="6"
                    height="6"
                    rx="1"
                    strokeWidth="2"
                  />
                  <rect
                    x="2"
                    y="16"
                    width="6"
                    height="6"
                    rx="1"
                    strokeWidth="2"
                  />
                  <rect
                    x="9"
                    y="2"
                    width="6"
                    height="6"
                    rx="1"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Infrastructure Réseau & Télécom
              </h3>
              <p className="text-sm text-[#7B899D] mb-6">
                LAN, WAN, WiFi & câblage structuré
              </p>
              <div className="space-y-2">
                {[
                  "Architecture LAN/WAN & VLAN sécurisés",
                  "Déploiement WiFi professionnel Ubiquiti/Cisco",
                  "VPN & accès distants sécurisés",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] flex-shrink-0"
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
              <div className="mt-6 pt-6 border-t border-[#202C3C] flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  Tarif indicatif
                </span>
                <span className="text-sm font-bold text-[#2D9BD2]">
                  150 000 – 2 000 000 FCFA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-20" />
    </div>
  );
};

// Section Cybersécurité
const CybersecuriteSection = () => {
  return (
    <div id="cybersecurite" className="scroll-mt-24 mt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-red-50 border border-red-200">
            <svg
              className="lucide lucide-shield-check h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12l2 2 4-4"
                strokeWidth="2"
              />
            </svg>
            Audit, protection & conformité
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Cybersécurité
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Protégez vos actifs numériques avec nos services de cybersécurité
            complets — de l'audit de vulnérabilités au déploiement de solutions
            SIEM, en passant par la sensibilisation des équipes.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Audit de sécurité & test de pénétration (pentest)",
              "Déploiement SIEM & SOC managé",
              "Antivirus entreprise & EDR centralisé",
              "Formation & sensibilisation des équipes",
              "Conformité RGPD & politiques de sécurité",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 flex-shrink-0"
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
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Nessus",
              "Metasploit",
              "Wazuh",
              "Splunk",
              "Fortinet",
              "Sophos",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-transparent bg-[#202C3C] px-2.5 py-0.5 text-xs font-medium text-[#B6BEC9]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#202C3C] rounded-xl px-4 py-3">
              <p className="text-xs text-[#7B899D] font-medium">À partir de</p>
              <p className="text-lg font-bold text-[#2D9BD2]">
                100 000 – 800 000 FCFA
              </p>
            </div>
            <a
              href="/devis"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Demander un Devis
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
          <div className="relative rounded-3xl bg-gradient-to-br from-red-500 to-rose-500 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-rose-500 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="lucide lucide-shield-check h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zM9 12l2 2 4-4"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Cybersécurité
              </h3>
              <p className="text-sm text-[#7B899D] mb-6">
                Audit, protection & conformité
              </p>
              <div className="space-y-2">
                {[
                  "Audit de sécurité & test de pénétration (pentest)",
                  "Déploiement SIEM & SOC managé",
                  "Antivirus entreprise & EDR centralisé",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] flex-shrink-0"
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
              <div className="mt-6 pt-6 border-t border-[#202C3C] flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  Tarif indicatif
                </span>
                <span className="text-sm font-bold text-[#2D9BD2]">
                  100 000 – 800 000 FCFA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-20" />
    </div>
  );
};

// Section Formation IT
const FormationSection = () => {
  return (
    <div id="formation" className="scroll-mt-24 mt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-green-50 border border-green-200">
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
            Certifiante, pratique & adaptée
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Formation IT
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Des programmes de formation IT certifiants adaptés au marché
            africain — du débutant à l'expert. En présentiel, en ligne ou en
            mode hybride selon vos contraintes.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Formations certifiantes Cisco, Microsoft, AWS",
              "Ateliers pratiques & bootcamps intensifs",
              "Cours particuliers & coaching personnalisé",
              "E-learning & classes virtuelles",
              "Formations intra-entreprise sur mesure",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 flex-shrink-0"
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
          <div className="flex flex-wrap gap-2 mb-8">
            {["Cisco CCNA", "AWS", "Azure", "Linux", "Python", "React.js"].map(
              (tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center rounded-full border border-transparent bg-[#202C3C] px-2.5 py-0.5 text-xs font-medium text-[#B6BEC9]"
                >
                  {tech}
                </span>
              ),
            )}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#202C3C] rounded-xl px-4 py-3">
              <p className="text-xs text-[#7B899D] font-medium">À partir de</p>
              <p className="text-lg font-bold text-[#2D9BD2]">
                35 000 – 150 000 FCFA
              </p>
            </div>
            <a
              href="/devis"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Demander un Devis
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
          <div className="relative rounded-3xl bg-gradient-to-br from-green-500 to-emerald-500 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shadow-lg">
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
              <h3 className="text-xl font-bold text-white mb-2">
                Formation IT
              </h3>
              <p className="text-sm text-[#7B899D] mb-6">
                Certifiante, pratique & adaptée
              </p>
              <div className="space-y-2">
                {[
                  "Formations certifiantes Cisco, Microsoft, AWS",
                  "Ateliers pratiques & bootcamps intensifs",
                  "Cours particuliers & coaching personnalisé",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] flex-shrink-0"
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
              <div className="mt-6 pt-6 border-t border-[#202C3C] flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  Tarif indicatif
                </span>
                <span className="text-sm font-bold text-[#2D9BD2]">
                  35 000 – 150 000 FCFA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-20" />
    </div>
  );
};

// Section Marketing Digital
const MarketingSection = () => {
  return (
    <div id="marketing" className="scroll-mt-24 mt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-purple-50 border border-purple-200">
            <svg
              className="lucide lucide-trending-up h-3.5 w-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17" strokeWidth="2" />
            </svg>
            SEO, réseaux sociaux & publicité
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Marketing Digital & Communication
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Développez votre présence digitale et boostez votre croissance avec
            nos stratégies marketing 360° adaptées au contexte béninois et aux
            marchés africains.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Stratégie SEO & référencement naturel",
              "Gestion réseaux sociaux & community management",
              "Campagnes Google Ads & Meta Ads",
              "Création de contenu & brand storytelling",
              "Emailing & marketing automation",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 flex-shrink-0"
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
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Google Ads",
              "Meta Ads",
              "SEMrush",
              "Mailchimp",
              "Canva",
              "Analytics",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-transparent bg-[#202C3C] px-2.5 py-0.5 text-xs font-medium text-[#B6BEC9]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#202C3C] rounded-xl px-4 py-3">
              <p className="text-xs text-[#7B899D] font-medium">À partir de</p>
              <p className="text-lg font-bold text-[#2D9BD2]">
                50 000 – 300 000 FCFA/mois
              </p>
            </div>
            <a
              href="/devis"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Demander un Devis
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
          <div className="relative rounded-3xl bg-gradient-to-br from-purple-500 to-violet-500 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-violet-500 flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="lucide lucide-trending-up h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 7h6v6M22 7l-8.5 8.5-5-5L2 17" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Marketing Digital & Communication
              </h3>
              <p className="text-sm text-[#7B899D] mb-6">
                SEO, réseaux sociaux & publicité
              </p>
              <div className="space-y-2">
                {[
                  "Stratégie SEO & référencement naturel",
                  "Gestion réseaux sociaux & community management",
                  "Campagnes Google Ads & Meta Ads",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] flex-shrink-0"
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
              <div className="mt-6 pt-6 border-t border-[#202C3C] flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  Tarif indicatif
                </span>
                <span className="text-sm font-bold text-[#2D9BD2]">
                  50 000 – 300 000 FCFA/mois
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[#202C3C] mt-20" />
    </div>
  );
};

// Section Conseil & Consulting
const ConseilSection = () => {
  return (
    <div id="conseil" className="scroll-mt-24 mt-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="lg:order-2">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 bg-yellow-50 border border-yellow-200">
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
            Audit digital & stratégie SI
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Conseil & Consulting IT
          </h2>
          <p className="text-[#7B899D] leading-relaxed mb-6">
            Bénéficiez de l'expertise de nos consultants pour accélérer votre
            transformation numérique — de l'audit de votre système d'information
            à la conduite du changement.
          </p>
          <ul className="space-y-3 mb-6">
            {[
              "Audit digital & diagnostic système d'information",
              "Stratégie de transformation numérique",
              "AMOA & assistance à maîtrise d'ouvrage",
              "Conduite du changement & formation",
              "Schéma directeur informatique",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <svg
                  className="lucide lucide-circle-check-big h-5 w-5 text-[#28BD5F] mt-0.5 flex-shrink-0"
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
          <div className="flex flex-wrap gap-2 mb-8">
            {["ITIL", "COBIT", "Agile", "Scrum", "TOGAF", "PMI"].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-transparent bg-[#202C3C] px-2.5 py-0.5 text-xs font-medium text-[#B6BEC9]"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="bg-[#202C3C] rounded-xl px-4 py-3">
              <p className="text-xs text-[#7B899D] font-medium">À partir de</p>
              <p className="text-lg font-bold text-[#2D9BD2]">
                75 000 – 500 000 FCFA
              </p>
            </div>
            <a
              href="/devis"
              className="inline-flex items-center justify-center h-9 px-4 py-2 bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold rounded-md gap-2 text-sm"
            >
              Demander un Devis
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
          <div className="relative rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-400 p-1 shadow-xl">
            <div className="bg-[#0B1119] rounded-[calc(1.5rem-4px)] p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-orange-400 flex items-center justify-center mb-6 shadow-lg">
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
              <h3 className="text-xl font-bold text-white mb-2">
                Conseil & Consulting IT
              </h3>
              <p className="text-sm text-[#7B899D] mb-6">
                Audit digital & stratégie SI
              </p>
              <div className="space-y-2">
                {[
                  "Audit digital & diagnostic système d'information",
                  "Stratégie de transformation numérique",
                  "AMOA & assistance à maîtrise d'ouvrage",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-[#7B899D]"
                  >
                    <svg
                      className="lucide lucide-chevron-right h-4 w-4 text-[#2D9BD2] flex-shrink-0"
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
              <div className="mt-6 pt-6 border-t border-[#202C3C] flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  Tarif indicatif
                </span>
                <span className="text-sm font-bold text-[#2D9BD2]">
                  75 000 – 500 000 FCFA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Section Processus
const ProcessusSection = () => {
  const steps = [
    {
      icon: "search",
      title: "Diagnostic",
      desc: "Analyse approfondie de vos besoins, contraintes et objectifs pour comprendre votre contexte.",
    },
    {
      icon: "settings",
      title: "Proposition",
      desc: "Élaboration d'une solution sur mesure avec planning, budget détaillé et choix technologiques.",
    },
    {
      icon: "zap",
      title: "Réalisation",
      desc: "Développement agile avec points d'avancement réguliers et implication continue de votre équipe.",
    },
    {
      icon: "check",
      title: "Livraison",
      desc: "Déploiement, formation des utilisateurs, documentation et support post-livraison inclus.",
    },
  ];

  const getIcon = (iconName) => {
    const icons = {
      search: (
        <svg
          className="lucide lucide-search h-8 w-8 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="m21 21-4.34-4.34M11 11a8 8 0 1 0-8 8 8 8 0 0 0 8-8z"
            strokeWidth="2"
          />
        </svg>
      ),
      settings: (
        <svg
          className="lucide lucide-settings h-8 w-8 text-[#2D9BD2]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="3" strokeWidth="2" />
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
    <section className="bg-[#202C3C]/30 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Notre Processus de Travail
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
                <div className="hidden lg:block absolute top-10 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-0.5 bg-gradient-to-r from-[#2D9BD2]/40 to-transparent"></div>
              )}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-[#2D9BD2]/10 border-2 border-[#2D9BD2]/20 flex items-center justify-center mx-auto mb-4">
                  {getIcon(step.icon)}
                </div>
                <div className="text-4xl font-black text-[#2D9BD2]/20 font-heading -mt-2 mb-2">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
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

export default ServicePage;
