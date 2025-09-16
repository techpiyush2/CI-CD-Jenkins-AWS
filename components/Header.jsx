"use client";
import React, { useMemo } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "motion/react";

const Header = () => {
	const socialLinks = useMemo(
		() => [
			{
				Icon: FaGithub,
				href: "https://github.com/LukeAndrewColeman",
				label: "GitHub",
			},
			{
				Icon: FaLinkedin,
				href: "https://www.linkedin.com/in/luke-andrew-coleman/",
				label: "LinkedIn",
			},
			{
				Icon: FaEnvelope,
				href: "mailto:lukecoleman123@gmail.com",
				label: "Email",
			},
		],
		[]
	);

	const SocialIcon = ({ Icon, href, label }) => (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			aria-label={label}
			className="text-white hover:text-luke-green hover:-translate-y-[2px] transition-all duration-300 shadow"
		>
			<Icon className="w-8 h-8" />
		</a>
	);

	return (
		<section id="home" className="scroll-mt-28 text-white">
			<div className="hero min-h-[95vh] bg-gradient-to-r from-luke-dark-blue to-luke-light-blue rounded-b-lg">
				<div className="hero-content text-center">
					<div className="max-w-4xl">
						<motion.h1
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.5 }}
							className="text-5xl md:text-6xl lg:text-8xl font-bold"
						>
							Full Stack Web Developer
						</motion.h1>
						<motion.p
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1 }}
							className="py-6 text-lg md:text-base lg:text-xl max-w-xl mx-auto"
						>
							Hi, I'm Luke Andrew Coleman, a dedicated web
							developer from Bradford, West Yorkshire, with a
							passion for creating innovative and impactful
							digital experiences.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1.5 }}
							className="flex gap-6 justify-center items-center"
						>
							{socialLinks.map(({ Icon, href, label }) => (
								<SocialIcon
									key={label}
									Icon={Icon}
									href={href}
									label={label}
								/>
							))}
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
