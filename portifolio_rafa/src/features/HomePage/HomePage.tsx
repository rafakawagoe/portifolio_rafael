import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import SocialSection from "../../components/SocialSection/SocialSection";
import AboutSection from "../../components/AboutSection/AboutSection";
import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import SEO from "../../components/SEO/SEO";

function HomePage() {
  return (
    <div className="home-page">
      <SEO
        title="Rafael Kawagoe - Software Engineer Portfolio"
        description="Computer Scientist specialized in mobile and web development with React, Flutter, Node.js. Over 10 million users worldwide."
      />
      <Navbar />
      <ErrorBoundary>
        <HeroSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <AboutSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <ProjectsSection />
      </ErrorBoundary>
      <ErrorBoundary>
        <SocialSection />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}

export default HomePage;
