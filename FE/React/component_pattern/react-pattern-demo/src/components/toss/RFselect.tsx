import React, { useState } from "react";
import styled from "styled-components";
import InputButton from "./InputButton";
import useBoolean from "./useBoolean";

function useFrameworks() {
	//fetch로가져오던 멀하던
	const result = {
		data: {
			frameworks: ["Next.js", "Remix", "GatsBy"],
		},
	};
	return result;
}

const RFselect = () => {
	const [isOpen, open, close] = useBoolean();
	const [selected, change] = useState("");
	const {
		data: { frameworks: options },
	} = useFrameworks();

	return (
		<div>
			{/* <InputButton label='React Framework' value={selected} onClick={open} />
			{isOpen && (
				<Options onClick={close}>
					{options.map((option) => {
						return (
							<Button
								selected={selected === option}
								onClick={() => change(option)}
							>
								{option}
							</Button>
						);
					})}
				</Options>
			)} */}
		</div>
	);
};

export default RFselect;

const Options = styled.ul``;

const Button = styled.li<{ selected: boolean }>`
	background-color: ${({ selected }) => (selected ? "#fff" : "black")};
	color: ${({ selected }) => (!selected ? "#fff" : "black")};
`;
