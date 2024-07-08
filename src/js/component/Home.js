import React from "react";
import Footer from "./Footer";
//include images into your bundle
import CardTittle from "./CardTittle";
import Navbar from "./Navbar";
//create your first component
import Cards from "./Cards";
const Home = () => {
	return (

		<div>
			<Navbar />
			<div className="container-fluid">
				<div className="top mx-5">
					<CardTittle />
				</div>
				<div className="bottom mx-5">
					<Cards />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
