import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import Loading from "./pages/Loading";

function App() {
	return (
		<section id="app">
			<Header />
			<LoginPage />
			<Footer />
		</section>
	);
}

export default App;
