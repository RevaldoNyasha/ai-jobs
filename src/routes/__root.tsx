import { TanStackDevtools } from "@tanstack/react-devtools";
import { ClerkProvider } from "@clerk/tanstack-react-start";
import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import Crosshair from "./../components/Crosshair";
import Navbar from "./../components/Navbar";

import TanStackQueryDevtools from "../integrations/tanstack-query/devtools";
import { PostHogProvider } from "../integrations/posthog/provider";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Skilled Jobs",
			},
			{
				name: "description",
				content: "Find skilled jobs easyly",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="font-sans antialiased wrap-anywhere">
				<PostHogProvider>
				<ClerkProvider>
					<div id="root-layout">
						<header>
							<div className="frame">
								<Navbar />
								<Crosshair />
								<Crosshair />
							</div>
						</header>
						<main>
							<div className="frame">{children}</div>
						</main>
					</div>

					<TanStackDevtools
						config={{
							position: "bottom-right",
						}}
						plugins={[
							{
								name: "Tanstack Router",
								render: <TanStackRouterDevtoolsPanel />,
							},
							TanStackQueryDevtools,
						]}
					/>
				</ClerkProvider>
				</PostHogProvider>
				<Scripts />
			</body>
		</html>
	);
}
