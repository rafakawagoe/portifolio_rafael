import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import SocialSection from "../../components/SocialSection/SocialSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default HomePage;
