import useTimer from "../hooks/useTimer";

const Timer = () => {
	const { time } = useTimer("timer", new Date("2022-10-16 16:52:30"));

	return (
		<div>
			{time && (
				<>
					{time.diffDay}일 {time.diffHour}시 {time.diffMin}분 {time.diffSec}초
				</>
			)}
		</div>
	);
};

export default Timer;
