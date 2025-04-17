import { type User } from "~/schema";
import { authenticator } from "~/services/auth.server";

const isAuthenticated = (request: Request): Promise<User> =>
	authenticator.isAuthenticated(request, {
		failureRedirect: "/login",
	});

export { isAuthenticated };
