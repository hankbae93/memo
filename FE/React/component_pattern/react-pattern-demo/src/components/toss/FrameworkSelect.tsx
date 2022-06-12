import React, { useState } from "react";
import InputButton from "./InputButton";
import Select from "./Select";

function useFrameworks() {
	//fetch로가져오던 멀하던
	const result = {
		data: {
			frameworks: ["Next.js", "Remix", "GatsBy"],
		},
	};
	return result;
}

const FrameworkSelect = () => {
	const {
		data: { frameworks },
	} = useFrameworks();

	const [selected, onChange] = useState("");

	return (
		<Select
			label='React FrameWork'
			trigger={<InputButton value={selected} />}
			options={frameworks}
			value={selected}
			onChange={onChange}
		/>
	);
};

export default FrameworkSelect;
