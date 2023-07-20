import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export function HostVansDetail() {
	const [van, setVan] = useState({});
	const params = useParams();

	useEffect(() => {
		fetch(`/api/host/vans/${params.id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans[0]));

		van ? console.log(van) : console.log("loading");
	}, [params.id]);

	return (
		<section>
			<Link to="/host/vans">Back</Link>
			<div>
				<img src={van.imageUrl} alt="" />
				<div>
					<span>{van.type}</span>
					<h3>{van.name}</h3>
					<span>{van.price}/day</span>
				</div>
			</div>
		</section>
	);
}
