import React, { ReactNode } from "react";
interface DropdownTriggerProps {
	as: JSX.Element;
}
const DropdownTrigger = ({ as }: DropdownTriggerProps) => {
	return <div>{as}</div>;
};

export default DropdownTrigger;
