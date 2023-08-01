import {RouterProvider} from "react-router-dom";
import "./App.css";
import "./server.js";
import {router} from "./utils/createBrowser";

function App() {
	return <RouterProvider router={router} />;
}

export default App;
