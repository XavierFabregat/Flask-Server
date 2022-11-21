// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import { UserForm } from "./components/Form/userForm";

function App() {
	// usestate for setting a javascript
	// object for storing and using data
	const [data, setdata] = useState({
		name: "",
		age: 0,
		date: "",
		programming: "",
	});


	const [user, setUser] = useState({
        userName: '',
        user_id: ''
    })


  async function getDefRoot() {
    try {
      const response = await fetch("http://localhost:5000/", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

	// Using useEffect for single rendering
	useEffect(() => {
		// Using fetch to fetch the api from
		// flask server it will be redirected to proxy
		fetch("/data").then((res) =>
			res.json().then((data) => {
				// Setting a data from api
				setdata({
					name: data.Name,
					age: data.Age,
					date: data.Date,
					programming: data.programming,
				});
			})
		);
    getDefRoot();
	}, []);

	useEffect(() => {
		console.log(user);
	}, [user])

	return (
		<>
		<div className="App">
			<header className="App-header">
				<h1>React and flask</h1>
				{/* Calling a data from setdata for showing */}
				<p>{data.name}</p>
				<p>{data.age}</p>
				<p>{data.date}</p>
				<p>{data.programming}</p>

			</header>
		<UserForm setUser={setUser}/>
		</div>
		</>

	);
}

export default App;
