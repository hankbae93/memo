import { useState } from "react";

const hardCalulate = (num: number): number => {
	console.log("어려운 계산");
	for (let i = 0; i < 999999999999; i++) {} // 연산 시간
	return num + 10000;
};

const App = () => {
	const [hardNumber, sethardNumber] = useState(1);

	const hardSum = hardCalulate(hardNumber);

	const location = {};

	return (
		<>
			<h3>title</h3>
			<input
				type='number'
				value={hardNumber}
				onChange={(e) => sethardNumber(parseInt(e.target.value))}
			/>
			<span> + 10000 = {hardSum} </span>
		</>
	);
};

export default App;
