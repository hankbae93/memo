import React, { ReactNode } from "react";
import { DropdownMenuWrapper } from "./Dropdown.style";

const DropdownMenu = ({ children }: { children: ReactNode }) => {
	return <DropdownMenuWrapper>{children}</DropdownMenuWrapper>;
};

export default DropdownMenu;
