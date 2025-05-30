import "~/styles/tailwind.css";
import "@radix-ui/themes/styles.css";
import {
	type LoaderFunctionArgs,
	json,
} from "@remix-run/cloudflare";
import {
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData,
} from "@remix-run/react";
import { Theme } from "@radix-ui/themes";
import { authenticator } from "~/services/auth.server";
import { CurrentUserContext } from "./context/CurrentUserContext";
import Nav from "./components/Nav";

export async function loader({ request }: LoaderFunctionArgs) {
	return json({ currentUser: await authenticator.isAuthenticated(request) });
}

export default function App() {
	const { currentUser } = useLoaderData<typeof loader>();
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
			</head>
			<body>
				<Theme>
					<CurrentUserContext.Provider value={{ currentUser }}>
						<Nav />
						<Outlet />
					</CurrentUserContext.Provider>
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</Theme>
			</body>
		</html>
	);
}
