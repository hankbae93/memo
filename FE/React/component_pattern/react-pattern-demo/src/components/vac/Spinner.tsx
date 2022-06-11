import { useState, useCallback, useRef } from "react";
import SpinBoxView from "./SpinBoxView";

const Spinner = () => {
	const [value, setValue] = useState<number>(0);
	const step = useRef<number>(1);

	const handleClick = (n: number) => setValue(n);

	const onDecrease = useCallback(() => {
		handleClick(value - step.current);
	}, [value]);
	const onIncrease = useCallback(() => {
		handleClick(value + step.current);
	}, [value]);

	const props = {
		value,
		disabledDecrease: value < 1,
		disabledIncrease: value > 9,
		onDecrease,
		onIncrease,
	};

	return <SpinBoxView {...props} />;
};

export default Spinner;
