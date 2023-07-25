import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Outlet /> {/* RENDERIZA LAS RUTAS CHILDREN */}
      </main>
      <Footer />
    </div>
  );
}
