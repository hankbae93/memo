import styled from "styled-components";

export const DropdownWrapper = styled.div`
	position: relative;
	display: inline-block;
`;

export const DropdownMenuWrapper = styled.ul`
	position: absolute;
	width: 100%;
	max-height: 200px;
	background-color: red;
	margin: 0;
	margin-top: 10px;
	padding: 0;
	list-style: none;
`;

export const DropdownItemWrapper = styled.li`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 40px;
	border-bottom: 1px solid #ccc;
	cursor: pointer;

	:hover {
		background-color: #c9ddcb;
	}
`;

export const Modal = styled.div`
	position: absolute;
	width: 100%;
	box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
`;
