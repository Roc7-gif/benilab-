import Header from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      className="flex flex-col min-h-screen bg-[#0B1119] text-[#DCE0E5] font-sans"
      style={{ letterSpacing: "-0.16px" }}
    >
          {/* Header */}
          <Header/>
   


          <main className="flex-1">
              <Outlet/>
            </main>

      {/* Footer */}
    <Footer/>
    </div>
  );
};

export default Layout;
