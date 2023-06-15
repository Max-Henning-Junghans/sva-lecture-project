import { NavLink } from "react-router-dom";

export default function FooterComponent() {
	return (
		<nav className="d-flex flex-wrap align-items-center justify-content-center py-3 bg-dark">
			<NavLink to="/placeholder" className="text-light text-decoration-none">Placeholder</NavLink>
		</nav>
	)
}