import React from "react";
import Button from "./Button";

function useAmazingButton() {
	return {
		onKeyDown: (e: React.KeyboardEvent) => console.log("onKeyDown"),
		onKeyUp: (e: React.KeyboardEvent) => console.log("onKeyUp"),
		onMouseDown: (e: React.MouseEvent) => console.log("onMouseDown"),
		onCilck: (e: React.MouseEvent) => console.log("onCilck"),
	};
}

const AmazingButton = () => {
	const amazingProps = useAmazingButton();

	return <Button {...amazingProps} />;
};

export default AmazingButton;
