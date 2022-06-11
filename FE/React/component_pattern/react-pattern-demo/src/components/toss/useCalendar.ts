const useCalendar = () => {
	const headers = ["월", "화", "수", "목", "금", "토", "일"];

	const body = Array(31)
		.fill(null)
		.map((v, i) => i + 1);

	return {
		headers,
		body,
	};
};

export default useCalendar;
