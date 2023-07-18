import {Link} from "react-router-dom";

export function Header() {
	return (
		<header>
			<Link to="/">TRAVEL'VANS</Link>
			<nav>
				<Link to="/about">About</Link>
				<Link to="/vans">Vans List</Link>
			</nav>
		</header>
	);
}
