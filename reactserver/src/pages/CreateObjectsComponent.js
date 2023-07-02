import {useState, useEffect} from "react";

export default function CreateObjectsComponent() {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");


	const handleSubmit = (event) => {
		event.preventDefault();

		fetch("http://127.0.0.1:5000/v1/createobject", {
			method: "POST",
			headers: {
				"Accept": "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: name,
				date: date,
			}),
		})
			.then((response) => {
				// Handle the response from the server
				if (response.ok) {
					// Request successful, do something
				} else {
					// Request failed, handle the error
				}
			})
			.catch((error) => {
				// Handle any network errors
			});
	};

	return (
		<div className="d-flex justify-content-center pt-5">
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="nameOfObject" className="form-label">
						Name of Object
					</label>
					<input type="text"
					       className="form-control"
					       id="nameOfObject"
					       aria-describedby="nameHelp"
					       value={name}
					       onChange={(event) => setName(event.target.value)}/>
					<div id="nameHelp" className="form-text">
						Be creative.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="objectDate" className="form-label">Date you received the Object</label>
					<input type="date"
					       className="form-control"
					       id="objectDate"
					       value={date}
					       onChange={(event) => setDate(event.target.value)}/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	)
}