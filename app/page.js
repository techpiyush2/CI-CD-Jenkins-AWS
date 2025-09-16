import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Navbar from "@/components/NavBar";
import Work from "@/components/Work";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
export default function Home() {
	return (
		<>
			<Navbar />
			<Header />
			<Projects />
			<Clients />
			<Work />
			<Contact />
			<Footer />
		</>
	);
}
