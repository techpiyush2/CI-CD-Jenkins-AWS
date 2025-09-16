"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Navbar = () => {
	// Add state to track scroll position
	const [showScrollButton, setShowScrollButton] = useState(false);

	// Add scroll event listener
	useEffect(() => {
		const handleScroll = () => {
			// Show button when user scrolls down 300px
			setShowScrollButton(window.scrollY > 300);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Scroll to top function
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="shadow-lg bg-white sticky top-0 z-50 rounded-b-lg"
		>
			<div className="navbar container mx-auto">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<Link href="#home">Home</Link>
							</li>
							<li>
								<Link href="#projects">Projects</Link>
							</li>
							<li>
								<Link href="#work">Work</Link>
							</li>
						</ul>
					</div>
					<a className="text-xl">
						<span className="font-bold">LUKE </span>A COLEMAN
					</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 text-base">
						<li>
							<Link href="#home">Home</Link>
						</li>
						<li>
							<Link href="#projects">Projects</Link>
						</li>
						<li>
							<Link href="#work">Work</Link>
						</li>
					</ul>
				</div>
				<motion.div
					initial={{ rotate: 0 }}
					whileHover={{ rotate: -1 }}
					transition={{ duration: 0.5 }}
					className="navbar-end"
				>
					<Link
						href="mailto:lukecoleman123@gmail.com"
						className="py-2 px-6 bg-luke-green hover:bg-luke-hover transition-colors duration-300 text-white font-bold rounded-3xl shadow cursor-pointer"
					>
						Contact Me
					</Link>
				</motion.div>
			</div>
			{/* Scroll to top button */}
			{showScrollButton && (
				<button
					onClick={scrollToTop}
					className="fixed bottom-8 right-8 p-4 bg-luke-green hover:bg-luke-hover text-white rounded-full shadow-lg transition-all duration-300 z-50"
					aria-label="Scroll to top"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 10l7-7m0 0l7 7m-7-7v18"
						/>
					</svg>
				</button>
			)}
		</motion.div>
	);
};

export default Navbar;
