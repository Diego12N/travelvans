import "./App.css";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage";
import {HomePage} from "./pages/HomePage";
import {VansPage} from "./pages/VansPage";
import "./server.js";
import {VanDetail} from "./pages/VanDetail";
import {Layout} from "./components/Layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					{/* Al no definir un path, el componente matchea con todas las rutas, por ende siempre se muestra  */}
					<Route path="/" element={<HomePage />} />
					<Route path="/vans" element={<VansPage />} />
					<Route path="/vans/:id" element={<VanDetail />} />
					<Route path="/about" element={<AboutPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
