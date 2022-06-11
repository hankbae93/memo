import React from "react";
import useCalendar from "./useCalendar";

const Calendar = () => {
	const { headers, body } = useCalendar();

	return (
		<table>
			<thead>
				<tr>
					{headers.map((v, i) => (
						<th key={v + i}>{v}</th>
					))}
				</tr>
			</thead>
			<tbody>
				<tr>
					{body.map((v) => {
						return <td>{v}</td>;
					})}
				</tr>
			</tbody>
		</table>
	);
};

export default Calendar;
