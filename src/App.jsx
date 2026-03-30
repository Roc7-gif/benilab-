import HomePage from "./page/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ServicePage from "./page/Service";
import ProgrammesPage from "./page/Programmes";
import FormationsPage from "./page/Formations";
import PolesExpertisePage from "./page/PolesExpertise";
import ProjetsPage from "./page/Projects";
import LoginPage from "./page/Conexion";
import AProposPage from "./page/Apropos";
import ContactPage from "./page/Contact";
import BlogPage from "./page/BlogPage";
import Layout from "./page/MainLayout";
import DevisPage from "./page/Devis";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
       {
    index: true,
    element: <HomePage />,
  },
  {
    path: "/services",
    element: <ServicePage />,
  },
  {
    path: "/programmes",
    element: <ProgrammesPage />,
  },
  {
    path: "/formations",
    element: <FormationsPage />,
  },
  {
    path: "/poles",
    element: <PolesExpertisePage />,
  },
  {
    path: "/projets",
    element: <ProjetsPage />,
  },
  {
    path: "/connexion",
    element: <LoginPage />,
  },
  {
    path: "/a-propos",
    element: <AProposPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
      },
   {
    path: "/devis",
    element: <DevisPage />,
  },
    ]
}
 
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
