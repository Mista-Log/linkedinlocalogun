import Scrollspy from "react-scrollspy";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/TeamSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/SpeakersSection";
import ContactSection from "@/components/ContactSection";
import RegisterSection from "@/components/RegisterSection";

import Footer from "@/components/Footer";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import Seo from "@/components/Seo";
import Home from "@/components/Home";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Seo />
      <ScrollProgressBar />
      <Scrollspy  currentClassName="active" offset={-50}>
        <RegisterSection />
      </Scrollspy>
      <Footer />
    </div>
  );
};

export default Register;
