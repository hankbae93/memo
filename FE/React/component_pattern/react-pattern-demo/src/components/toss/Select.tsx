import { ReactNode } from "react";
import Dropdown from "./Dropdown";

interface SelectProps {
	label: any;
	trigger?: any;
	value?: any;
	onChange?: any;
	options: (string | ReactNode)[];
}

export default function Select({
	label,
	trigger,
	value,
	onChange,
	options,
}: SelectProps) {
	return (
		<Dropdown label={label} value={value} onChange={onChange}>
			<Dropdown.Trigger as={trigger} />
			<Dropdown.Menu>
				{options.map((option: any) => (
					<Dropdown.Item>{option}</Dropdown.Item>
				))}
			</Dropdown.Menu>
		</Dropdown>
	);
}
