import { useState } from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import AppContent from "./app_content/app_content";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
	const [index, setIndex] = useState("agencies");

	return (
		<div className="App">
			<Sidebar index={index} setIndex={setIndex} />
			<AppContent index={index}></AppContent>
			<Navbar />
		</div>
	);
}

export default App;
