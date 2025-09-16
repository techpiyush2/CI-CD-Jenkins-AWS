"use client";
import React from "react";
import Image from "next/image";
import recipeImage from "@/public/recipehub.png";
import codeSnippetsImage from "@/public/codesnippets-new.png";
import smartRecipeImage from "@/public/smartrecipeai.jpeg";
import todoImage from "@/public/todoapp.png";
import Link from "next/link";
import { motion } from "motion/react";

const Projects = () => {
	const projects = [
		{
			title: "SmartRecipe AI",
			description:
				"SmartRecipe AI is a website that uses AI to generate recipes based on a selected cuisine. The website features a clean and intuitive interface where users can generate recipes by selecting a cuisine, the website uses Google Gemini to generate the recipes. The website is hosted on a VPS with Coolify and uses Appwrite for reliable data storage and authentication.",
			image: smartRecipeImage,
			technologies: ["NextJS", "Tailwind", "Appwrite", "Google Gemini"],
			link: "https://smartrecipeai.com",
			github: "https://github.com/LukeAndrewColeman/ai-recipe-app",
		},
		{
			title: "Code Snippets",
			description:
				"Code Snippets is a website that provides a way of organising all your code snippets for various programming languages. The website features a clean and intuitive interface where users can create, edit and delete code snippets. Each snippet can be categorized by programming language and tagged for easy searching. The website includes syntax highlighting for better code readability and a copy-to-clipboard functionality for quick access. The website is hosted on a VPS with Coolify and uses a MySQL database for reliable data storage and retrieval.",
			image: codeSnippetsImage,
			technologies: ["NextJS", "Tailwind", "Prisma", "MySQL"],
			link: "https://codesnippets.lukeacoleman.com",
			github: "https://github.com/LukeAndrewColeman/code-snippets-nextjs",
		},
		{
			title: "Recipe Hub",
			description:
				"Recipe Hub is a website that provides a way of organizing all your recipes, which can be filtered and organized by cuisine. The website features a clean and intuitive interface where users can create, edit and delete recipes. Each recipe includes detailed ingredients, step-by-step instructions, cooking times, and difficulty levels. Users can also categorize recipes by meal type, dietary restrictions, and cooking method. The website is hosted on a shared server and uses Craft CMS for content management.",
			image: recipeImage,
			technologies: ["Craft CMS", "JavaScript", "Twig", "Tailwind"],
			link: "https://recipeapp.lukeacoleman.com",
			github: "https://github.com/LukeAndrewColeman/recipeapp",
		},
		{
			title: "Todo App",
			description:
				"Todo App is a JavaScript application that helps users organize their daily tasks and to-do lists. The app provides a clean and intuitive interface where users can create new tasks, filter them by status, mark items as complete, and delete completed tasks. It features local storage functionality to persist todos between sessions, ensuring users never lose their task lists. The minimalist design focuses on usability while maintaining a modern aesthetic.",
			image: todoImage,
			technologies: ["HTML & CSS", "JavaScript", "GitHub Pages"],
			link: "https://lukeandrewcoleman.github.io/Todo-List",
			github: "https://github.com/LukeAndrewColeman/Todo-List",
		},
	];

	return (
		<section
			id="projects"
			className="py-24 scroll-mt-20 bg-gradient-to-b from-transparent to-luke-light-blue/5"
		>
			<div className="container mx-auto px-4 relative z-10">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-luke-light-blue tracking-tight">
					Featured Projects
				</h2>
				<div className="space-y-24 max-w-7xl mx-auto">
					{projects.map((project, index) => (
						<div
							key={index}
							className="flex flex-col lg:flex-row lg:gap-8 items-center"
						>
							{/* Image Container */}
							<motion.div
								initial={{ opacity: 0, y: 20, rotate: 10 }}
								whileInView={{ opacity: 1, y: 0, rotate: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								viewport={{ once: true }}
								className={`w-full lg:w-3/5 shadow-lg rounded-lg overflow-hidden origin-left ${
									index % 2 === 1 ? "lg:order-2" : ""
								}`}
							>
								<div className="mockup-browser border-gray-200 border shadow-lg rounded-lg overflow-hidden">
									<div className="mockup-browser-toolbar">
										<div className="input !bg-white border-gray-200 border">
											{project.link}
										</div>
									</div>
									<div className="border-gray-200 border-t relative">
										<div className="relative aspect-video rounded-lg overflow-hidden">
											<Image
												src={project.image}
												alt={project.title}
												fill
												sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw"
												className="object-cover rounded-lg"
												priority={index === 0}
											/>
										</div>
									</div>
								</div>
							</motion.div>

							{/* Content Container */}
							<div
								className={`w-full lg:w-2/5 ${
									index % 2 === 1 ? "lg:order-1" : ""
								}`}
							>
								<div className="p-8">
									<div className="flex items-start justify-between mb-4">
										<h3 className="text-2xl font-bold text-luke-light-blue">
											{project.title}
										</h3>
										<div className="flex gap-3">
											<Link
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 hover:bg-luke-light-blue/10 transition-all duration-200 rounded-full text-luke-green text-sm font-semibold underline"
												aria-label={`GitHub repository for ${project.title}`}
											>
												View Code
											</Link>
											<Link
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 hover:bg-luke-light-blue/10 transition-all duration-200 rounded-full text-luke-green text-sm font-semibold underline"
												aria-label={`Visit ${project.title} website`}
											>
												Visit Site
											</Link>
										</div>
									</div>
									<p className="text-luke-dark-blue/80 mb-6 leading-relaxed">
										{project.description}
									</p>
									<div className="flex flex-wrap gap-2 pt-4">
										{project.technologies.map((tech, i) => (
											<span
												key={i}
												className="bg-luke-green/10 text-luke-green px-4 py-1.5 rounded-full text-sm font-medium"
											>
												{tech}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
