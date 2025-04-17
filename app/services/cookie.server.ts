import { type Cookie, createCookie } from "@remix-run/cloudflare";

let returnToCookie: Cookie;

export const getReturnToCookie = () => {
	if (returnToCookie !== undefined) {
		return returnToCookie;
	}

	returnToCookie = createCookie("return-to", {
		path: "/",
		httpOnly: true,
		sameSite: "lax",
		maxAge: 60, // 1 minute because it makes no sense to keep it for a long time
		secure: true,
	});
	return returnToCookie;
};
