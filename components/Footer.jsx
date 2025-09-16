import React from "react";

function Footer() {
	return (
		<footer className="footer footer-center rounded-t-lg p-10 bg-luke-dark-blue text-white">
			<aside>
				<p className="text-white">
					Copyright © {new Date().getFullYear()} - All right reserved
					Luke A Coleman
				</p>
			</aside>
		</footer>
	);
}

export default Footer;
