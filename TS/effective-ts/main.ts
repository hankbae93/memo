interface ComponentProps {
	onSelectItem: (item: number) => void;
}

function renderSelector(props: ComponentProps) {
	return props.onSelectItem;
}

let selectedId: number = 0;

function handleSelectItem(item: any) {
	selectedId = item.id;
}

console.log(renderSelector({ onSelectItem: handleSelectItem }));
