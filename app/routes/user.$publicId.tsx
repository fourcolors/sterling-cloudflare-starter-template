import {
	json,
	type SerializeFrom,
	type LoaderFunctionArgs,
} from "@remix-run/cloudflare";
import { Outlet, useLoaderData, useOutletContext, useParams } from "@remix-run/react";
import { sql } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import { type Env } from "~/models/env";
import { response } from "~/utils/response";
import { user } from "~/schema";
import { useCurrentUserContext } from "~/context/CurrentUserContext";

export async function loader({ context, params }: LoaderFunctionArgs) {
	const db = drizzle((context.env as Env).DB);

	const [publicUser] = await db
		.select({ firstName: user.firstName, lastName: user.lastName })
		.from(user)
		.where(sql`publicId = ${params.publicId}`)
		.limit(1);

	if (!publicUser) {
		throw response(404, "Not Found");
	}

	return json(publicUser);
}

export default function PublicUser() {
	const userWithProfile = useLoaderData<typeof loader>();
	const { currentUser } = useCurrentUserContext();
	const params = useParams();
	const isPublicUserCurrentUser = params.publicId === currentUser?.publicId;

	return <Outlet context={{ user: userWithProfile, isPublicUserCurrentUser }} />;
}

export function usePublicUser() {
	return useOutletContext<{ user: SerializeFrom<typeof loader>, isPublicUserCurrentUser: boolean }>();
}
