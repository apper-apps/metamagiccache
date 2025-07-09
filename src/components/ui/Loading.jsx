import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Loading = ({ message = "Generating magic..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-4">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center"
      >
        <ApperIcon name="Wand2" size={24} className="text-white" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 font-medium"
      >
        {message}
      </motion.p>
    </div>
  );
};

export default Loading;