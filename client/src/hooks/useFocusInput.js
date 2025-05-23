import { useEffect, useRef } from "react";

export const useFocusInput = () => {
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current?.focus();
	}, []);

	return inputRef;
};
