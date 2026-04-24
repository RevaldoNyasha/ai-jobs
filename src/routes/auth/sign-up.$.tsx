import { SignIn } from "@clerk/clerk-react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-up/$")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section id="sign-up">
			<SignIn
				routing="path"
				path="/sign-up"
				signInUrl="/sign-in"
				fallbackRedirectUrl="/"
			/>
		</section>
	);
}
