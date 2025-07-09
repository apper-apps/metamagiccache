import { motion } from "framer-motion";
import HeroSection from "@/components/organisms/HeroSection";
import GeneratorTool from "@/components/organisms/GeneratorTool";
import FeaturesSection from "@/components/organisms/FeaturesSection";
import Footer from "@/components/organisms/Footer";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <HeroSection />
      <GeneratorTool />
      <FeaturesSection />
      <Footer />
    </motion.div>
  );
};

export default HomePage;