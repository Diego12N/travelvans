import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { VansPage } from "./pages/Vans/VansPage";
import "./server.js";
import { VanDetail } from "./pages/Vans/VanDetail";
import { Layout } from "./components/Layout";
import { Dashboard } from "./pages/Host/Dashboard";
import { Income } from "./pages/Host/Income";
import { Reviews } from "./pages/Host/Reviews";
import { HostLayout } from "./components/HostLayout";
import { HostVans } from "./pages/Host/HostVans";
import { HostVansDetail } from "./pages/Host/HostVansDetail";
import { HostVanInfo } from "./pages/Host/HostVanInfo";
import { HostVanPricing } from "./pages/Host/HostVanPricing";
import { HostVanPhotos } from "./pages/Host/HostVanPhotos";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />

          {/* En este caso no necesito un elemente que renderizar ya que las rutas no comparten UI */}
          <Route path="vans">
            <Route index element={<VansPage />} />
            <Route path=":id" element={<VanDetail />} /> {/*Ruta absoluta es /vans/:id*/}
          </Route>

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
            <Route path="reviews" element={<Reviews />} />
            {/* Los path no necesitan la ruta absoluta, ya que en este contexto (Anidadas dentro de Host) 
            no requieren su url completa sino que pueden utilizar la relativa es decir /host/income => income */}
            {/* Los links que se añadan en los elements podran usar tambien rutas relativas ya que estan dentro de la ruta anidada */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
