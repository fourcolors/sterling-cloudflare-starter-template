import { createContext, useContext } from "react";
import { type User } from "~/schema";

export const CurrentUserContext = createContext<{ currentUser: User | null }>({
	currentUser: null,
});

export const useCurrentUserContext = () => {
	const ctx = useContext(CurrentUserContext);
	return ctx;
};
