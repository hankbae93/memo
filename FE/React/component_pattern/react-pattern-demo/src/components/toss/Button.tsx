import React from "react";

export interface ButtonProps {
	onKeyDown?: (e: React.KeyboardEvent) => void;
	onKeyUp?: (e: React.KeyboardEvent) => void;
	onMouseDown?: (e: React.MouseEvent) => void;
	onCilck: (e: React.MouseEvent) => void;
}

const Button = ({ onCilck, onKeyDown, onMouseDown, onKeyUp }: ButtonProps) => {
	return (
		<button
			onClick={onCilck}
			onKeyDown={onKeyDown}
			onKeyUp={onKeyUp}
			onMouseDown={onMouseDown}
		>
			Button
		</button>
	);
};

export default Button;
