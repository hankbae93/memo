import React, { ReactNode } from "react";
import { DropdownItemWrapper } from "./Dropdown.style";

const DropdownItem = ({ children }: { children: ReactNode }) => {
	return <DropdownItemWrapper>{children}</DropdownItemWrapper>;
};

export default DropdownItem;
