import {Route, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import {AboutPage} from "../pages/AboutPage";
import {HomePage} from "../pages/HomePage";
import {VansPage, loader as vanPageLoader} from "../pages/Vans/VansPage";
import {VanDetail} from "../pages/Vans/VanDetail";
import {Layout} from "../components/Layout";
import {HostLayout} from "../components/HostLayout";
import {NotFound} from "../pages/NotFound";

import {Dashboard, HostVanInfo, HostVanPhotos, HostVanPricing, HostVans, HostVansDetail, Income, Reviews} from "../pages/Host/index";
import {Error} from "../components/Error";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Layout />}>
			<Route index element={<HomePage />} />
			<Route path="about" element={<AboutPage />} />

			{/* En este caso no necesito un elemente que renderizar ya que las rutas no comparten UI */}
			<Route path="vans">
				<Route index element={<VansPage />} errorElement={<Error />} loader={vanPageLoader} />
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
	)
);
