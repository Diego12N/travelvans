import {Link, Outlet} from "react-router-dom";

export function HostLayout() {
	return (
		<section>
			<nav className="host-nav">
				<Link to="/host">Dashboard</Link>
				<Link to="/host/income">Income</Link>
				<Link to="/host/reviews">Reviews</Link>
			</nav>
			<Outlet></Outlet>
		</section>
	);
}
