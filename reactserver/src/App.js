import {useEffect, useState} from 'react';

function App() {

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
		<div className="App">
			<header className="App-header">
					{posts}
			</header>
		</div>
	);
}

export default App;
