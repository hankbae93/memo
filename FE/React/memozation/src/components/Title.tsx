import React from "react";

interface TitleI {
	title: String;
}

const Title = ({ title }: TitleI) => {
	console.log("Title 렌더");
	return <h1>{title}</h1>;
};

export default React.memo(Title);
