import { Button } from "@radix-ui/themes";
import { usePublicUser } from "./user.$publicId";
import { useCurrentUserContext } from "~/context/CurrentUserContext";
import { type User } from "~/schema";
import useMode, { MODE } from "~/hooks/useMode";

export default function Profile() {
	const { mode, toggleMode } = useMode();
	const { user, isPublicUserCurrentUser } = usePublicUser();
	const { currentUser } = useCurrentUserContext();

	const isEdit = mode === MODE.EDIT;

	return (
		<>
			{isPublicUserCurrentUser && (
				<Button onClick={toggleMode}>{`${
					isEdit ? "View" : "Edit"
				} My Profile`}</Button>
			)}

			{!isEdit && (
				<div>This is {user.firstName ?? "a user"}'s profile page!</div>
			)}

			{isEdit && (
				<>
					<div>
						Hello {(currentUser as User).firstName}! You can edit your profile
						page here
					</div>
					<pre>{JSON.stringify(currentUser, null, 4)}</pre>
				</>
			)}
		</>
	);
}
