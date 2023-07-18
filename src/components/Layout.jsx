import {Outlet} from "react-router-dom";
import {Header} from "./Header";

export function Layout() {
	return (
		<>
			<Header />
			<Outlet /> {/* RENDERIZA LAS RUTAS CHILDREN */}
		</>
	);
}
