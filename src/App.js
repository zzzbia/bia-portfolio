import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import Skills from "./components/sections/Skills";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import Contact from "./components/sections/Contact";
import Resume from "./components/sections/Resume";

function App() {
	return (
		<>
			<Header />
			<HeroSection />
			<Routes>
				<Route path="/" element={<About />} />
				<Route path="projects" element={<Projects />} />
				<Route path="skills" element={<Skills />} />
				<Route path="contact" element={<Contact />} />
				<Route path="resume" element={<Skills />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
