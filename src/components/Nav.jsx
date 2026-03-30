import { NavLink, Link } from "react-router-dom";

const Header = () => {
  // Fonction pour centraliser le style des liens
  const linkStyles = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
      isActive
        ? "text-[#2D9BD2] font-semibold bg-[#202C3C]/50" // Style actif
        : "text-[#DCE0E5] hover:text-[#2D9BD2] hover:bg-[#202C3C]" // Style normal
    }`;

  return (
    <>
      <header className="fixed bg-[#0B1119] top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#2D9BD2] flex items-center justify-center shadow-md flex-shrink-0">
                <span className="text-white font-bold text-sm tracking-wider">
                  BL
                </span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base tracking-tight text-white">
                  BENILAB
                </span>
                <span className="text-xs font-medium tracking-widest text-[#2D9BD2]">
                  SERVICES
                </span>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-0.5">
              <NavLink title="Accueil" to="/" className={linkStyles} end>
                Accueil
              </NavLink>
              <NavLink title="Services" to="/services" className={linkStyles}>
                Services
              </NavLink>

              {/* Note: Pour le bouton "Pôles", NavLink est préférable à un bouton navigate si c'est un lien direct */}
              <NavLink title="Pôles" to="/poles" className={linkStyles}>
                Pôles d'expertise
              </NavLink>

              <NavLink
                title="Programmes"
                to="/programmes"
                className={linkStyles}
              >
                Programmes
              </NavLink>
              <NavLink
                title="Formations"
                to="/formations"
                className={linkStyles}
              >
                Formations
              </NavLink>
              <NavLink title="Projets" to="/projets" className={linkStyles}>
                Projets
              </NavLink>
              <NavLink title="À Propos" to="/a-propos" className={linkStyles}>
                À Propos
              </NavLink>
              <NavLink title="Blog" to="/blog" className={linkStyles}>
                Blog
              </NavLink>
              <NavLink title="Contact" to="/contact" className={linkStyles}>
                Contact
              </NavLink>
            </nav>

            {/* Boutons Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <NavLink to="/connexion" className={linkStyles}>
                Connexion
              </NavLink>
              <Link
                to="/devis"
                className="inline-flex items-center justify-center rounded-md h-8 text-xs bg-[#2D9BD2] text-white hover:bg-[#2D9BD2]/90 shadow-md font-semibold px-5 transition-colors"
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </header>
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;
