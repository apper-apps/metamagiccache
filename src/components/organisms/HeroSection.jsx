import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg"
            >
              <ApperIcon name="Wand2" size={32} className="text-white" />
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black font-display">
              <span className="gradient-text">Meta</span>
              <span className="gradient-magical">Magic</span>
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-700 font-medium mb-8"
          >
            Generate SEO-optimized meta descriptions in seconds
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-lg text-gray-600"
          >
            <div className="flex items-center gap-2">
              <ApperIcon name="Zap" size={20} className="text-warning" />
              <span>Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <ApperIcon name="Target" size={20} className="text-success" />
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <ApperIcon name="Sparkles" size={20} className="text-accent" />
              <span>AI Powered</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur opacity-20" />
          <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
            <div className="bg-gradient-primary rounded-xl p-4 text-white text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ApperIcon name="MousePointer" size={20} />
                <span className="text-sm font-medium">Try it below</span>
              </div>
              <div className="text-xs opacity-75">
                Enter your content and watch the magic happen
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;