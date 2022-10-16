import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { MILLISECONDS_A_SECOND } from "../constants/time";
import duration from "dayjs/plugin/duration";
import { useEffect, useState } from "react";
dayjs.extend(duration);

const useTimer = (unique: string, endDate: Date) => {
	const [expired, setExpired] = useState(false);
	const { data: time } = useQuery(
		[`time-${unique}`],
		() => createStopwatch(endDate),
		{
			refetchInterval: 1000,
			cacheTime: 0,
			staleTime: 0,
			enabled: !expired,
		}
	);

	useEffect(() => {
		if (checkExpired(endDate)) {
			setExpired(true);
		}
	}, [time, endDate]);

	return { time };
};

export default useTimer;

export function checkExpired(endDate: Date) {
	const now = dayjs();
	const endTime = dayjs(endDate);
	const diff = endTime.diff(now);

	return diff <= MILLISECONDS_A_SECOND;
}

export function createStopwatch(endDate: Date) {
	const now = dayjs();
	const endTime = dayjs(endDate);
	const duration = dayjs.duration(endTime.diff(now));

	const diffDay = duration.days().toString().padStart(2, "0");
	const diffHour = duration.hours().toString().padStart(2, "0");
	const diffMin = duration.minutes().toString().padStart(2, "0");
	const diffSec = duration.seconds().toString().padStart(2, "0");

	return {
		diffDay,
		diffHour,
		diffMin,
		diffSec,
	};
}
