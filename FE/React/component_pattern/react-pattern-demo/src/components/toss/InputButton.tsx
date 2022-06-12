interface InputButtonProps {
	label?: string;
	value: string;
}

export default function InputButton({ value }: InputButtonProps) {
	return <input id='inputButton' value={value} />;
}
