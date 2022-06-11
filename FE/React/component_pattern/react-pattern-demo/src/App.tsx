import React from "react";
import Spinner from "./components/vac/Spinner";
import Calendar from "./components/toss/Calendar";
import AmazingButton from "./components/toss/AmazingButton";
import FrameworkSelect from "./components/toss/FrameworkSelect";
import "./App.css";
import RFselect from "./components/toss/RFselect";

function App() {
	return (
		<div className='App'>
			{/* <Spinner /> */}
			{/* <Calendar /> */}
			{/* <AmazingButton /> */}
			{/* <FrameworkSelect /> */}
			<div>
				<RFselect />
			</div>
			<FrameworkSelect />
		</div>
	);
}

export default App;
