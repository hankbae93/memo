import { useState } from "react";

type UseBooleanReturnTypes = [boolean, () => void, () => void];
export default function useBoolean(): UseBooleanReturnTypes {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const open = () => setIsOpen(true);

	const close = () => setIsOpen(false);

	return [isOpen, open, close];
}
