import styled from "styled-components";
import Dropdown from "./Dropdown";

interface Props {
	selectedFrameworks: any;
	onFrameworkChange: () => void;
	frameworks: any;
}

const MultiFrameworkSelect = ({
	selectedFrameworks,
	onFrameworkChange,
	frameworks,
}: Props) => {
	return (
		<Dropdown value={selectedFrameworks} onChange={onFrameworkChange}>
			<Dropdown.Trigger
				as={<Button>{String(selectedFrameworks ?? "선택하기")}</Button>}
			/>
			<Dropdown.Modal
				controls={
					<div>
						<Button>초기화</Button>
						<Button>적용하기</Button>
					</div>
				}
			>
				{frameworks.map((framework: string) => {
					return <Dropdown.Item>{framework}</Dropdown.Item>;
				})}
			</Dropdown.Modal>
		</Dropdown>
	);
};

export default MultiFrameworkSelect;

const Button = styled.button``;
