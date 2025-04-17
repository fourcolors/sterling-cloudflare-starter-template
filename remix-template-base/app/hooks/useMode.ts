import { useState } from "react";

const MODE = {
	VIEW: 0,
	EDIT: 1,
} as const;

type Mode = (typeof MODE)[keyof typeof MODE];

function useMode(initMode: Mode = MODE.VIEW) {
	const [mode, setMode] = useState<Mode>(initMode);
	
	const toggleMode = () => {
		setMode((m) => (1 - m) as Mode);
	};
	
	return { mode, toggleMode };
}

export { useMode as default, MODE, type Mode }