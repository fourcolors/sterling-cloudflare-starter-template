import { Authenticator } from "remix-auth";
import { v4 as uuidv4 } from "uuid";
import { user, type User } from "../schema";
import { getSessionStorage } from "../services/session.server";
import { type Env } from "~/models/env";
import { GoogleStrategy } from "remix-auth-google";
import { drizzle } from "drizzle-orm/d1";
import { sql } from "drizzle-orm";
import { raise } from "~/utils/error";

let isAuthInitialized = false;
let authenticator = new Authenticator<User>(getSessionStorage());

const getGoogleStrategy = (env: Env) =>
	new GoogleStrategy<User>(
		{
			clientID: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
			callbackURL: env.GOOGLE_CALLBACK_URL,
		},
		async ({ accessToken, refreshToken, extraParams, profile }) => {
			console.log(
				JSON.stringify({ accessToken, refreshToken, extraParams, profile })
			);
			const email =
				profile.emails?.[0]?.value?.toLowerCase() ?? raise("no email found");
			const firstName = profile.name?.givenName ?? null;
			const lastName = profile.name?.familyName ?? null;
			const db = drizzle(env.DB);
			try {
				const [existingUser] = await db
					.select()
					.from(user)
					.where(sql`email = ${email}`)
					.limit(1);

				if (existingUser) {
					console.debug(
						"returning existing user",
						JSON.stringify(existingUser)
					);
					return existingUser;
				}
				const publicId = uuidv4();
				const [newUser] = await db
					.insert(user)
					.values({
						email,
						firstName,
						lastName,
						publicId,
						createdAt: sql`datetime('now')`,
						updatedAt: sql`datetime('now')`,
						deletedAt: null,
					})
					.returning()
					.all();
				console.debug("returning new user", JSON.stringify(newUser));
				return newUser;
			} catch (err) {
				console.error(err);
				throw err;
			}
		}
	);

export const setAuthStrategies = (env: Env): Authenticator<User> => {
	if (isAuthInitialized) {
		return authenticator;
	}

	authenticator.use(getGoogleStrategy(env)) as Authenticator<User>;

	isAuthInitialized = true;
	return authenticator;
};

export { authenticator };
