"use client";

import React from "react";
import { motion } from "motion/react";

const workExperience = [
	{
		title: "Web Developer",
		company: "EXTREME MARKETING",
		period: "March 2024 - Present",
		description:
			"Responsible for developing client websites while following best practices in coding and design. Implemented responsive design strategies to improve user experience on different devices, ensuring cross-browser compatibility and optimizing site performance for smooth interactions.",
	},
	{
		title: "Front End Developer",
		company: "WISH AGENCY",
		period: "April 2022 - March 2024",
		description:
			"Assisted in the development of client websites, adhering to best practices in coding and design principles. Implemented responsive design techniques to enhance user experience across various devices and ensured cross-browser compatibility and optimized website performance for seamless user experiences. I continuously learn and develop my skills to stay current with evolving web technologies.",
	},
	{
		title: "Programmer / Designer / AV Engineer",
		company: "FINITE SOLUTIONS",
		period: "September 2014 - April 2022",
		description:
			"Responsible for comprehensive system design, documentation, installation, and testing of cutting-edge smart home control systems and intelligent lighting solutions. Led cinema design initiatives and crafted compelling proposals for both cinema and complete smart home systems.",
	},
	{
		title: "Electrician",
		company: "J&R ELECTRICAL",
		period: "October 2013 - September 2014",
		description:
			"Installation and meticulous testing of electrical systems, encompassing power, lighting, and data provisions for both residential and commercial settings ensuring that every aspect adheres to the most stringent standards, guaranteeing excellence in both functionality and safety.",
	},
];

const Work = () => {
	return (
		<section id="work" className="scroll-mt-40">
			<div className="container mx-auto my-20 px-10 lg:px-32 relative z-10">
				<h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-luke-light-blue">
					Work Experience
				</h2>
				<ol className="max-w-[90%] mx-auto relative border-s border-luke-light-blue text-luke-dark-blue">
					{workExperience.map((job, index) => (
						<li key={index} className="mb-10 ms-4">
							<div className="absolute w-3 h-3 bg-luke-green rounded-full mt-1.5 -start-1.5 border border-luke-green"></div>
							<motion.h3
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.3 }}
								viewport={{ once: true }}
								className="text-lg font-semibold text-luke-light-blue"
							>
								{job.title} - {job.company}
							</motion.h3>
							<time className="mb-1 text-sm text-luke-green">
								{job.period}
							</time>
							<p className="mb-4 mt-4">{job.description}</p>
						</li>
					))}
				</ol>
			</div>
		</section>
	);
};

export default Work;
