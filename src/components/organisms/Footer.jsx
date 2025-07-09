import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <ApperIcon name="Wand2" size={20} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold font-display">
              <span className="text-white">Meta</span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Magic</span>
            </h3>
          </div>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Generate SEO-optimized meta descriptions in seconds. Perfect for content creators, marketers, and developers who want to improve their search engine rankings.
          </p>

          <div className="flex items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-400">
              <ApperIcon name="Zap" size={16} />
              <span className="text-sm">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <ApperIcon name="Shield" size={16} />
              <span className="text-sm">Privacy First</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <ApperIcon name="Heart" size={16} />
              <span className="text-sm">Made with Love</span>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} MetaMagic. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;