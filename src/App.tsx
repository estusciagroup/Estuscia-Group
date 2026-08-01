import { useState, useEffect } from "react";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/about/AboutSection";
import EcosystemSection from "./components/ecosystem/EcosystemSection";
import ServicesSection from "./components/services/ServicesSection";
import PipelineSection from "./components/pipeline/PipelineSection";
import WhyChooseUs from "./components/about/WhyChooseUs";
import LeadershipSection from "./components/about/LeadershipSection";
import CoreValues from "./components/about/CoreValues";
import IndustriesSection from "./components/industries/IndustriesSection";
import ProcessSection from "./components/process/ProcessSection";
import StatsSection from "./components/stats/StatsSection";
import TestimonialsSection from "./components/testimonials/TestimonialsSection";
import InsightsSection from "./components/insights/InsightsSection";
import FAQSection from "./components/faq/FAQSection";
import ContactSection from "./components/contact/ContactSection";
// import AIConsultant from "./components/common/AIConsultant";

export default function App() {
  // const [theme, setTheme] = useState<"light" | "dark">("light");

  // // Load saved theme on mount
  // useEffect(() => {
  //   const savedTheme = localStorage.getItem("estuscia-theme") as "light" | "dark" | null;
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  // // Update root element classes when theme state changes
  // useEffect(() => {
  //   const root = document.documentElement;
  //   if (theme === "dark") {
  //     root.classList.add("dark");
  //   } else {
  //     root.classList.remove("dark");
  //   }
  //   localStorage.setItem("estuscia-theme", theme);
  // }, [theme]);

  // const toggleTheme = () => {
  //   setTheme((prev) => (prev === "light" ? "dark" : "light"));
  // };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300" id="app-root">
      
      {/* 1. Header Navigation */}
      <Header 
      // theme={theme} toggleTheme={toggleTheme} 
      />

      {/* 2. Main Corporate Layout Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: About Estuscia */}
        <AboutSection />

        {/* Section 3: Our Business Ecosystem */}
        <EcosystemSection />

        {/* Section 4: Services Offered */}
        <ServicesSection />

        {/* Section 5: Startup Financial Planning Pipeline */}
        <PipelineSection />

        {/* Section 6: Why Choose Estuscia Group LLP */}
        <WhyChooseUs />

        {/* Section 7: Leadership & Key Team */}
        <LeadershipSection />

        {/* Section 8: Core Values */}
        <CoreValues />

        {/* Section 9: Industries We Serve */}
        <IndustriesSection />

        {/* Section 10: Our Proven Process */}
        <ProcessSection />

        {/* Section 11: Ecosystem Stats */}
        {/* <StatsSection /> */}

        {/* Section 12: Client Testimonials */}
        {/* <TestimonialsSection /> */}

        {/* Section 13: Insights & News */}
        <InsightsSection />

        {/* Section 14: FAQ */}
        <FAQSection />

        {/* Section 15: Contact & Lead Form */}
        <ContactSection />
      </main>

      {/* Section 16: Footer */}
      <Footer />

      {/* Floating Interactive AI Assistant - Hidden/Commented out for future enablement */}
      {/* <AIConsultant /> */}

    </div>
  );
}
