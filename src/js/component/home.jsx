import React, {useState} from "react";

import "../../styles/index.css"

//create your first component
const Home = () => {
	const [selected, setSelected] = useState("")

	const colors = ["red","yellow","green"]

	const cycleHandler = () => {
		
		let index = 0;

		setInterval(()=>{
			if (index<3){
				setSelected(colors[index])
			} else {
				index = 0;
				setSelected(colors[index])
			}
			index++
		},2000)
	}

	return (
		<>
		<div className="traffic-light">
			<div className="base"></div>
			<div className="body">
				<div className={`red ${selected == "red" ? "selected" : ""}`} onClick={()=>setSelected("red")}></div>
				<div className={`yellow ${selected == "yellow" ? "selected" : ""}`} onClick={()=>setSelected("yellow")}></div>
				<div className={`green ${selected == "green" ? "selected" : ""}`} onClick={()=>setSelected("green")}></div>
			</div>
		<button onClick={cycleHandler} >Cycle</button>
		</div>
		</>
	);
};

export default Home;
