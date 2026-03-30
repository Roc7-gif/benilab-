
const Footer = () => {
  return (
      <>
             <footer className="text-slate-300 bg-[#081525]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Logo et infos */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-full bg-[#2D9BD2] flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-white font-bold text-sm font-heading">
                    BL
                  </span>
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="font-bold text-base text-white font-heading tracking-tight">
                    BENILAB
                  </span>
                  <span className="text-xs font-medium text-[#2D9BD2] tracking-widest">
                    SERVICES
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                Votre partenaire technologique en Afrique. Nous accompagnons les
                entreprises dans leur transformation numérique avec des
                solutions IT innovantes et adaptées.
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2.5 text-sm text-slate-400">
                  <svg
                    className="lucide lucide-map-pin h-4 w-4 text-[#2D9BD2] mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
                      strokeWidth="2"
                    ></path>
                    <circle cx="12" cy="10" r="3" strokeWidth="2"></circle>
                  </svg>
                  <span>Lokossa, Mono, Bénin</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-400">
                  <svg
                    className="lucide lucide-phone h-4 w-4 text-[#2D9BD2] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <a
                    href="tel:+22995000000"
                    className="hover:text-[#2D9BD2] transition-colors"
                  >
                    +229 95 00 00 00
                  </a>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-400">
                  <svg
                    className="lucide lucide-mail h-4 w-4 text-[#2D9BD2] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"
                      strokeWidth="2"
                    ></path>
                    <rect
                      x="2"
                      y="4"
                      width="20"
                      height="16"
                      rx="2"
                      strokeWidth="2"
                    ></rect>
                  </svg>
                  <a
                    href="mailto:contact@benilab.bj"
                    className="hover:text-[#2D9BD2] transition-colors"
                  >
                    contact@benilab.bj
                  </a>
                </li>
              </ul>
              <div className="flex items-center gap-2 mt-6">
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#2D9BD2]/20 hover:text-[#2D9BD2] text-slate-400 flex items-center justify-center transition-all duration-200 text-xs font-bold"
                >
                  FB
                </a>
                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#2D9BD2]/20 hover:text-[#2D9BD2] text-slate-400 flex items-center justify-center transition-all duration-200 text-xs font-bold"
                >
                  LI
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#2D9BD2]/20 hover:text-[#2D9BD2] text-slate-400 flex items-center justify-center transition-all duration-200 text-xs font-bold"
                >
                  IG
                </a>
                <a
                  href="https://youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#2D9BD2]/20 hover:text-[#2D9BD2] text-slate-400 flex items-center justify-center transition-all duration-200 text-xs font-bold"
                >
                  YT
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#2D9BD2]/20 hover:text-[#2D9BD2] text-slate-400 flex items-center justify-center transition-all duration-200 text-xs font-bold"
                >
                  X
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5 font-heading">
                Services
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="/services"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Développement Web & Mobile
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Infrastructure Réseau
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Cybersécurité
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Marketing Digital
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Conseil & Consulting
                  </a>
                </li>
              </ul>
            </div>

            {/* Formations */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5 font-heading">
                Formations
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="/formations"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Développement Web
                  </a>
                </li>
                <li>
                  <a
                    href="/formations"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Administration Réseau
                  </a>
                </li>
                <li>
                  <a
                    href="/formations"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Sécurité Informatique
                  </a>
                </li>
                <li>
                  <a
                    href="/formations"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Linux & Open Source
                  </a>
                </li>
                <li>
                  <a
                    href="/formations"
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-[#2D9BD2] transition-colors duration-150 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </span>{" "}
                    Cloud Computing
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-5 font-heading">
                Newsletter
              </h3>
              <p className="text-sm text-slate-400 mb-4 leading-relaxed">
                Recevez nos actualités, conseils IT et offres spéciales
                directement dans votre boîte mail.
              </p>
              <form className="space-y-2">
                <input
                  className="flex h-9 w-full rounded-md border border-white/10 px-3 py-1 text-sm bg-white/8 text-white placeholder:text-slate-500 focus:border-[#2D9BD2] focus:ring-[#2D9BD2] shadow-sm"
                  placeholder="votre@email.com"
                  required
                  type="email"
                />
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors h-9 px-4 py-2 w-full bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 font-semibold gap-2"
                  type="submit"
                >
                  <svg
                    className="lucide lucide-send h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zM21.854 2.147l-10.94 10.939"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  S'abonner
                </button>
              </form>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <svg
                    className="lucide lucide-shield h-3.5 w-3.5 text-[#2D9BD2]/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <span>Certifié ISO 27001</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <svg
                    className="lucide lucide-award h-3.5 w-3.5 text-[#2D9BD2]/70"
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
                  <span>Partenaire Microsoft</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-500">
                  <svg
                    className="lucide lucide-circle-check h-3.5 w-3.5 text-[#2D9BD2]/70"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
                    <path d="m9 12 2 2 4-4" strokeWidth="2"></path>
                  </svg>
                  <span>Cisco Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              ©&nbsp;2026&nbsp;
              <span className="text-[#2D9BD2] font-semibold">
                BENILAB SERVICES
              </span>
              &nbsp;— KLC NET IT Africa | Lokossa, Bénin
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/contact"
                className="hover:text-slate-300 transition-colors"
              >
                Mentions légales
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <a
                href="/contact"
                className="hover:text-slate-300 transition-colors"
              >
                Politique de confidentialité
              </a>
              <span className="w-1 h-1 rounded-full bg-slate-600"></span>
              <a
                href="/connexion"
                className="hover:text-slate-300 transition-colors"
              >
                Admin
              </a>
            </div>
          </div>
        </div>
      </footer>
      </>
  );
};

export default Footer;
