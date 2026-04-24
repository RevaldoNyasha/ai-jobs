import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import posthog from "posthog-js";

const POSTHOG_KEY = import.meta.env.VITE_PUBLIC_POSTHOG_KEY as string;
const POSTHOG_HOST = import.meta.env.VITE_PUBLIC_POSTHOG_HOST as string;

function PostHogPageviewTracker() {
	const location = useRouterState({ select: (s) => s.location });

	useEffect(() => {
		posthog.capture("$pageview", { $current_url: window.location.href });
	}, [location.pathname]);

	return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		posthog.init(POSTHOG_KEY, {
			api_host: POSTHOG_HOST,
			capture_pageview: false,
			capture_pageleave: true,
		});
	}, []);

	return (
		<>
			<PostHogPageviewTracker />
			{children}
		</>
	);
}
