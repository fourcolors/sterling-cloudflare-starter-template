// app/routes/auth/google/callback.tsx
import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";
import { getReturnToCookie } from "~/services/cookie.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
	// get the returnTo from the cookie
	let returnTo =
		(await getReturnToCookie().parse(request.headers.get("Cookie"))) ?? "/dashboard";

	return authenticator.authenticate("google", request, {
		successRedirect: returnTo,
		failureRedirect: "/login",
	});
};
