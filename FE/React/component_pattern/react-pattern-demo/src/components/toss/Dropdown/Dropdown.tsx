import React, { ReactNode } from "react";
import DropdownTrigger from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import { DropdownWrapper } from "./Dropdown.style";

interface DropdownPropsTypes {
	children: ReactNode;
	label?: any;
	value?: any;
	onChange?: any;
}

const Dropdown = ({ children, label, value, onChange }: DropdownPropsTypes) => {
	return <DropdownWrapper>{children}</DropdownWrapper>;
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
