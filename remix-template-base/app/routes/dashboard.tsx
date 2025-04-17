import { json, type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/d1";
import "@radix-ui/themes/styles.css";
import { isAuthenticated } from "~/utils/authentication";
import { useLoaderData } from "@remix-run/react";
import { type Env } from "~/models/env";
import { user } from "~/schema";

export async function loader({ request, context }: LoaderFunctionArgs) {
	const { id: userId } = await isAuthenticated(request);
	const env = context.env as Env;

	const db = drizzle(env.DB);
	const [currentUser] = await db
		.select()
		.from(user)
		.where(eq(user.id, userId))
		.limit(1);

	return json({ currentUser });
}

export default function Dashboard() {
	const { currentUser } = useLoaderData<typeof loader>();

	return `Welcome, ${currentUser?.firstName} ${currentUser?.lastName}!`;
}
