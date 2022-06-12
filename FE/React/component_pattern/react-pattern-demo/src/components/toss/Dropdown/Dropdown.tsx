import React, { createContext, ReactNode, useContext } from "react";
import useBoolean from "../useBoolean";
import {
	DropdownItemWrapper,
	DropdownMenuWrapper,
	DropdownWrapper,
	Modal,
} from "./Dropdown.style";

interface DropdownPropsTypes {
	children: ReactNode;
	label?: any;
	value?: any;
	onChange?: any;
}

const initialState = {
	label: "",
	value: "",
	onChange: (value: string) => {},
	open: () => {},
	close: () => {},
	isOpen: false,
};

const DropdownContext = createContext(initialState);

const Dropdown = ({ children, label, value, onChange }: DropdownPropsTypes) => {
	const [isOpen, open, close] = useBoolean();
	return (
		<DropdownContext.Provider
			value={{ value, onChange, label, isOpen, open, close }}
		>
			<DropdownWrapper>{children}</DropdownWrapper>
		</DropdownContext.Provider>
	);
};

const DropdownTrigger = ({ as }: { as: JSX.Element }) => {
	const { label, open } = useContext(DropdownContext);

	return (
		<div onClick={open}>
			<p>{label}</p>
			{as}
		</div>
	);
};

const DropdownMenu = ({ children }: { children: ReactNode }) => {
	const { isOpen } = useContext(DropdownContext);

	return <>{isOpen && <DropdownMenuWrapper>{children}</DropdownMenuWrapper>}</>;
};

const DropdownItem = ({ children }: { children: string }) => {
	const { onChange, close } = useContext(DropdownContext);
	const handleSelect = () => {
		onChange(children);
		close();
	};

	return (
		<DropdownItemWrapper onClick={handleSelect}>{children}</DropdownItemWrapper>
	);
};

const DropdownModal = ({
	controls,
	children,
}: {
	controls: ReactNode;
	children: ReactNode;
}) => {
	return (
		<Modal>
			{children}
			<div>{controls}</div>
		</Modal>
	);
};

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;
Dropdown.Modal = DropdownModal;
export default Dropdown;
