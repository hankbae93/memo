interface InputButtonProps {
	label?: string;
	value: string;
}

export default function InputButton({ value }: InputButtonProps) {
	return (
		<label htmlFor='inputButton'>
			React Framewrok
			<div>
				<input id='inputButton' value={value} />
			</div>
		</label>
	);
}
