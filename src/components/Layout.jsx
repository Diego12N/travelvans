import {Outlet} from "react-router-dom";
import {Header} from "./Header";
import {Footer} from "./Footer";

export function Layout() {
	return (
		<>
			<Header />
			<main>
				<Outlet /> {/* RENDERIZA LAS RUTAS CHILDREN */}
			</main>
			<Footer />
		</>
	);
}
