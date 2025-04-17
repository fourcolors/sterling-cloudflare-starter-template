import { type LoaderFunctionArgs } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { Button } from "@radix-ui/themes";
import { authenticator } from "~/services/auth.server";

export const loader = ({ request }: LoaderFunctionArgs) => {
	let url = new URL(request.url);
	let returnTo = url.searchParams.get("returnTo");

	return authenticator.isAuthenticated(request, {
		successRedirect: returnTo ?? "/dashboard",
	});
};

export default function Login() {
	return (
		<Form action="/auth/google" method="post">
			<Button>Login with Google</Button>
		</Form>
	);
}
