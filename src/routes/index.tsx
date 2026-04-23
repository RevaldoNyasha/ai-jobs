import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Home,
});
function Home() {
	return (
		<main>
			<h1>Home hello from tanstack starter 🎶</h1>
		</main>
	);
}
