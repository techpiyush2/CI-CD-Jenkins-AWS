"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Image Imports
import Arrow from "@/public/arrow-logo-white.png";
import Alveo from "@/public/alveo-logo-white.png";
import Ugp from "@/public/ugp-white-logo.png";
import Springfield from "@/public/springfield-white-logo.png";
import Christeyns from "@/public/christeyns-logo-white.png";

const Clients = () => {
	// Carousel settings
	const settings = {
		dots: true,
		dotsClass: "slick-dots custom-dots",
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className="px-4 md:px-0 bg-gradient-to-l from-luke-dark-blue to-luke-light-blue">
			<div className="container mx-auto rounded-xl  py-20 relative">
				<div className="flex flex-col items-center relative z-10">
					<h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">
						Clients Worked With
					</h2>
					<div className="w-full max-w-4xl px-10">
						<Slider {...settings}>
							<div className="px-4">
								<Image
									src={Arrow}
									alt="Arrow"
									height={20}
									className="mx-auto"
								/>
							</div>
							<div className="px-4">
								<Image
									src={Alveo}
									alt="Alveo"
									height={30}
									className="mx-auto"
								/>
							</div>
							<div className="px-4">
								<Image
									src={Ugp}
									alt="UGP"
									height={40}
									className="mx-auto"
								/>
							</div>
							<div className="px-4">
								<Image
									src={Springfield}
									alt="Springfield"
									height={40}
									className="mx-auto"
								/>
							</div>
							<div className="px-4">
								<Image
									src={Christeyns}
									alt="Christeyns"
									height={30}
									className="mx-auto"
								/>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Clients;
