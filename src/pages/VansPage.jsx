import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export function VansPage() {
	const [vans, setVans] = useState([]);
	useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data) => setVans(data.vans));
	}, []);

	const vanItem = vans.map((van) => {
		return (
			<div key={van.id} className="van-tile">
				<Link to={`/vans/${van.id}`}>
					<img src={van.imageUrl} alt={van.name} />
					<div className="van-info">
						<h3>{van.name}</h3>
						<p>
							${van.price}
							<span>/day</span>
						</p>
					</div>
					<i className={`van-type ${van.type} selected`}>{van.type}</i>
				</Link>
			</div>
		);
	});

	return (
		<div className="van-list-container">
			<h1>Explore ou van options</h1>
			<div className="van-list">{vanItem}</div>
		</div>
	);
}
