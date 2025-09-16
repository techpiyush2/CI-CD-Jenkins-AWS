import "./globals.css";
import Script from "next/script";

export const metadata = {
	title: "Luke Andrew Coleman | Portfolio Website",
	description: "Personal portfolio website | Luke Andrew Coleman",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<script
					defer
					src="https://umami.lukeacoleman.com/script.js"
					data-website-id="25691578-5f04-453d-ba51-aa8eb36527fe"
				></script>
			</head>
			<body className={`antialiased relative`}>{children}</body>
		</html>
	);
}
