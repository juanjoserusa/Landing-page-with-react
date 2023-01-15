import React from "react";
import Nav from "/workspace/Landing-page-with-react/src/js/component/Nav.jsx";
import Card from "/workspace/Landing-page-with-react/src/js/component/Card.jsx";
import Footer from "/workspace/Landing-page-with-react/src/js/component/Footer.jsx";
import Jumbo from  "/workspace/Landing-page-with-react/src/js/component/Jumbo.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-flex">
			
			<div><Nav/></div>
			<div><Jumbo /></div>
			<div><Card/></div>
			<div><Footer/></div>
			
		</div>
	);
}

export default Home;
