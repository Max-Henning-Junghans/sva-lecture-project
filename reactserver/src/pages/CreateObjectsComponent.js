//import {useState} from "react";

export default function CreateObjectsComponent() {
	//const [posts, setPosts] = useState("Test1");

	return (
		<div className="d-flex justify-content-center pt-5">
			<form>
				<div className="mb-3">
					<label htmlFor="nameOfObject" className="form-label">Name of Object</label>
					<input type="text" className="form-control" id="nameOfObject" aria-describedby="nameHelp"/>
					<div id="nameHelp" className="form-text">Be creative.</div>
				</div>
				<div className="mb-3">
					<label htmlFor="objectDate" className="form-label">Date you received the Object</label>
					<input type="date" className="form-control" id="objectDate"/>
				</div>
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</div>
	)
}