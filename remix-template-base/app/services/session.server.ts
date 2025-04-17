// app/services/session.server.ts
import {
	type SessionStorage,
	createCookieSessionStorage,
} from "@remix-run/cloudflare";

let sessionStorage: SessionStorage;

export const getSessionStorage = () => {
	if (sessionStorage !== undefined) {
		return sessionStorage;
	}

	sessionStorage = createCookieSessionStorage({
		cookie: {
			name: "_session", // use any name you want here
			sameSite: "lax", // this helps with CSRF
			path: "/", // remember to add this so the cookie will work in all routes
			httpOnly: true, // for security reasons, make this cookie http only
			secrets: ["funf_und_dreisich"], // replace this with an actual secret
			secure: true, // can only be sent over https
		},
	});
	return sessionStorage;
};
