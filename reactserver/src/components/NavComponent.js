import {NavLink} from "react-router-dom";

export default function NavComponent() {
	return (
		<nav
			className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start p-3 bg-dark text-white">
			<NavLink className="d-flex align-items-center me-4 mb-2 mb-lg-0 text-light text-decoration-none"
			         to="/index">Home</NavLink>
			<NavLink className="d-flex align-items-center me-4 mb-2 mb-lg-0 text-light text-decoration-none"
			         to="/placeholder">Placeholder</NavLink>
			<NavLink className="d-flex align-items-center me-4 mb-2 mb-lg-0 text-light text-decoration-none"
			         to="/createobject">Create Object</NavLink>
		</nav>
	)
}