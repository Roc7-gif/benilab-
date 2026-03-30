import { Link } from "react-router-dom";

const CTA = ({headTitle,Title,sub ,btn1Text,btn2Text , btn1link , btn2link }) => {
  return (<>
    <section className="py-20 bg-linear-to-r from-[#1C74A0] to-[#1D5672]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-sm text-white mb-6 font-medium">
          <svg
            className="lucide lucide-map-pin h-4 w-4"
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
          {headTitle||"Lokossa, Bénin — Afrique de l'Ouest"}
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-4">
          
          {Title||"Prêt à transformer votre entreprise ?"}

        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
          Contactez nos experts pour un diagnostic gratuit de vos besoins IT.
          Devis sous 48h, réponse garantie.
          {sub||`Contactez nos experts pour un diagnostic gratuit de vos besoins IT.
          Devis sous 48h, réponse garantie.`}
          
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={btn1link||"/devis"}
            className="inline-flex items-center justify-center whitespace-nowrap transition-colors h-11 text-base bg-white text-[#2D9BD2] hover:bg-white/90 font-bold px-8 py-3 rounded-xl shadow-lg"
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
            
          {btn1Text||"Demander un Devis Gratuit"}

          </Link>
          <Link
            to={btn2link||"/contact"}
            className="inline-flex items-center justify-center whitespace-nowrap transition-colors border border-white/40 bg-transparent h-11 text-base text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-xl"
          >
           
          {btn2Text||"Nous Contacter"}

          </Link>
        </div>
      </div>
    </section>
  </>)
}
export default CTA;
