interface InputButtonProps {
	label?: string;
	value: string;
	onClick?: () => void;
}

export default function InputButton({
	label,
	value,
	onClick,
}: InputButtonProps) {
	return (
		<label htmlFor='inputButton' onClick={onClick}>
			{label}
			<div>
				<input id='inputButton' value={value} />
			</div>
		</label>
	);
}
