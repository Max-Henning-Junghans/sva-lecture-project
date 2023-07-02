import {useState} from "react";
import {Button, Form, InputGroup} from "react-bootstrap";

const SearchComponent = () => {
	const [objects, setObjects] = useState([]);
	const [search, setSearch] = useState('');


	function searchObjects() {
		fetch("http://127.0.0.1:5000/v1/search/" + search, {
			method: "GET",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
		})
			.then((response) => {
				if (response.ok) {
					// Request successful, parse the response JSON
					return response.json();
				} else {
					// Request failed, handle the error
				}
			})
			.then((data) => {
				// Update the objects state with the retrieved data
				console.log(data)
				setObjects(data.data);
			})
			.catch((error) => {
				// Handle any network errors
			});
	}


	return (
		<div className="d-flex flex-column align-items-center pt-5">
			<Form>
				<h1 className={"text-center"}>SEARCH</h1>
				<InputGroup>
					<Form.Control type="search"
					              onChange={(event) => setSearch(event.target.value)}
					              onKeyDown={searchObjects}
					              value={search}/>
					<Button variant="outline-secondary" id="button-addon" onClick={searchObjects}>
						Search
					</Button>
				</InputGroup>
			</Form>


			<h2>Objects</h2>
			<ul>
				{objects.length > 0 ? (
					objects.map((object, index) => (
						<li key={index}>
							<strong>Name:</strong> {object.name}, <strong>Date:</strong>{" "}
							{object.date}
						</li>
					))
				) : (
					<li>No objects found</li>
				)}
			</ul>
		</div>
	);
};

export default SearchComponent;