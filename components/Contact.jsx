"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

const Contact = () => {
	return (
		<section
			id="contact"
			className="pt-10 pb-20 text-white relative overflow-hidden bg-luke-white"
		>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.3 }}
				viewport={{ once: true }}
				className="shadow max-w-[800px] py-10 bg-gradient-to-r from-luke-dark-blue to-luke-light-blue mx-8 md:mx-auto flex flex-col items-center rounded-xl relative z-10"
			>
				<h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
					Contact Me
				</h2>
				<p className="w-[80%] text-center mx-auto mb-10">
					I'm always open to exploring new opportunities within web
					development. Whether you have a potential job offer or
					simply want to connect, I'd love to hear from you. Feel free
					to reach out using the button below.
				</p>
				<motion.div
					initial={{ rotate: 0, y: 0 }}
					whileHover={{ rotate: -2 }}
					transition={{ duration: 0.5 }}
					className="origin-left"
				>
					<Link
						href="mailto:lukecoleman123@gmail.com"
						className="py-2 px-6 bg-luke-green hover:bg-luke-hover transition-colors duration-300 text-white font-bold rounded-3xl shadow cursor-pointer"
					>
						Get in Touch
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Contact;
