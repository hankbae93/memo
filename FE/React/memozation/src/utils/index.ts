export const getAvgPerHour = (totalList: string[]) => {
	console.log("getAvgPerHour 함수");
	if (totalList.length === 0) return 0;
	return 60 / totalList.length;
};
