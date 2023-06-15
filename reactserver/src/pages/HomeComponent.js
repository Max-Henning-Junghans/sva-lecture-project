import {useEffect, useState} from "react";

export default function HomeComponent() {
	const [posts, setPosts] = useState("Test1");
	useEffect(() => {
		fetch('http://127.0.0.1:5000/api/v1/helloworld')
			.then((res) => res.json())
			.then((data) => {
				console.log(data[0]["Hello World"]);
				setPosts(data[0]["Hello World"]);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

	return (
		<div className="d-flex justify-content-center pt-5">
			{posts}
		</div>
	)
}