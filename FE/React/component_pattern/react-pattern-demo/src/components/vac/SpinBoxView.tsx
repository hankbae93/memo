interface SpinBoxViewPropsTypes {
	value: number;
	disabledDecrease: boolean;
	disabledIncrease: boolean;
	onDecrease: () => void;
	onIncrease: () => void;
}

const SpinBoxView = ({
	value,
	onIncrease,
	onDecrease,
	disabledDecrease,
	disabledIncrease,
}: SpinBoxViewPropsTypes) => {
	return (
		<div>
			<button disabled={disabledDecrease} onClick={onDecrease}>
				-
			</button>
			<span>{value}</span>
			<button
				disabled={disabledIncrease}
				className='round'
				onClick={onIncrease}
			>
				+
			</button>
		</div>
	);
};
export default SpinBoxView;
