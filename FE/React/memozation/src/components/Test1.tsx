import { useState, useMemo } from "react";
import Title from "./Title";
import { getAvgPerHour } from "../utils/index";

const Test1 = () => {
	const [list, setList] = useState<string[]>([]);
	const [todo, setTodo] = useState<string>("");

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value);
	};

	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setList([...list, todo]);
		setTodo("");
	};

	const avgPerHour = useMemo(() => getAvgPerHour(list), [list]);

	return (
		<>
			<Title title='1시간 안에 끝내야 할 업무들' />
			<div>
				<form onSubmit={onSubmit}>
					<input value={todo} onChange={onChange} />
				</form>

				<ul>
					{list.map((value, index) => (
						<li key={index}>{value}</li>
					))}
				</ul>
				<div>하나당 최대 걸려야할 시간: {avgPerHour}분</div>
			</div>
		</>
	);
};

export default Test1;
