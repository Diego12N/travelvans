import {useRouteError} from "react-router-dom";

export function Error() {
	const error = useRouteError();
	console.log(error);

	return (
		<section>
			<h1>{error.message}</h1>
			<pre>{error.status}</pre>
		</section>
	);
}
