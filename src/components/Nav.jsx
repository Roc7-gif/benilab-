import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Style dynamique pour les liens
  const linkStyles = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      isActive
        ? "text-[#2D9BD2] font-semibold bg-[#202C3C]/50 lg:bg-transparent" // Style Actif
        : "text-[#DCE0E5] hover:text-[#2D9BD2] hover:bg-[#202C3C]" // Style Normal
    }`;

  // Liens de navigation centraux
  const navLinks = [
    { name: "Accueil", path: "/", end: true },
    { name: "Services", path: "/services" },
    {
      name: "Pôles d'expertise",
      path: "/poles",
      hasIcon: true,
    },
    { name: "Programmes", path: "/programmes" },
    { name: "Formations", path: "/formations" },
    { name: "Projets", path: "/projets" },
    { name: "À Propos", path: "/a-propos" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed bg-black top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 z-50">
              <div className="w-10 h-10 rounded-full bg-[#2D9BD2] flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">BL</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base text-white">BENILAB</span>
                <span className="text-xs font-medium text-[#2D9BD2]">SERVICES</span>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.end}
                  className={linkStyles}
                >
                  <span className="flex items-center gap-1.5">
                    {link.name}
                    {link.hasIcon && (
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m6 9 6 6 6-6"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    )}
                  </span>
                </NavLink>
              ))}
            </nav>

            {/* Boutons Desktop (Connexion & Devis) */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/connexion"
                className="text-[#DCE0E5] hover:text-[#2D9BD2] text-sm font-medium px-3 transition-colors"
              >
                Connexion
              </Link>
              <Link
                to="/devis"
                className="bg-[#2D9BD2] text-white text-xs font-semibold px-5 py-2 rounded-md hover:bg-[#2D9BD2]/90 transition-colors shadow-md"
              >
                Demander un Devis
              </Link>
            </div>

            {/* Mobile Toggler Button (Uniquement SVG) */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-[#DCE0E5] hover:text-white transition-colors z-50 focus:outline-none"
              aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isOpen ? (
                // SVG Icône CROIX
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // SVG Icône MENU (Hamburger)
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`lg:hidden fixed inset-0 bg-black transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ paddingTop: "5rem" }} // Aligne le menu mobile sous le header fixe
        >
          <nav className="flex flex-col px-6 gap-2 h-full overflow-y-auto pb-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={() => setIsOpen(false)} // Ferme le menu au clic
                className={({ isActive }) =>
                  `text-lg py-4 border-b border-white/5 font-medium transition-colors ${
                    isActive ? "text-[#2D9BD2]" : "text-[#DCE0E5]"
                  }`
                }
              >
                <span className="flex items-center gap-2">
                  {link.name}
                  {link.hasIcon && (
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m6 9 6 6 6-6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  )}
                </span>
              </NavLink>
            ))}
            
            {/* Boutons Mobiles */}
            <div className="mt-8 flex flex-col gap-4">
              <Link
                to="/connexion"
                onClick={() => setIsOpen(false)}
                className="text-center py-3 text-[#DCE0E5] border border-[#2D9BD2] rounded-md transition-colors hover:bg-[#202C3C]"
              >
                Connexion
              </Link>
              <Link
                to="/devis"
                onClick={() => setIsOpen(false)}
                className="text-center py-3 bg-[#2D9BD2] text-white rounded-md font-bold transition-colors hover:bg-[#2D9BD2]/90 shadow-md"
              >
                Demander un Devis
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Spacer pour compenser le header fixe */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;