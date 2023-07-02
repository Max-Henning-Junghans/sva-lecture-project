import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NavComponent from "./components/NavComponent";
import HomeComponent from "./pages/HomeComponent";
import FooterComponent from "./components/FooterComponent";
import CreateObjectsComponent from "./pages/CreateObjectsComponent";
import SearchComponent from "./pages/SearchComponent";

function App() {



	return (
		<Router>
			<div className="d-flex flex-column justify-content-between" style={{"minHeight": "100vh"}}>
				<div>
					<NavComponent/>
					<Routes>
						<Route path="/" element={<HomeComponent/>}/>
						<Route path="/index" element={<HomeComponent/>}/>
						<Route path="/search" element={<SearchComponent/>}/>
						<Route path="/createobject" element={<CreateObjectsComponent/>}/>
					</Routes>
				</div>
				<FooterComponent/>
			</div>
		</Router>
	);
}

export default App;
