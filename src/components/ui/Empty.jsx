import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  title = "No content yet", 
  description = "Start by entering some content to generate your meta description",
  actionText = "Get Started",
  onAction 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center py-12 px-6"
    >
      <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 animate-float">
        <ApperIcon name="Sparkles" size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-8 max-w-md mx-auto text-lg">{description}</p>
      {onAction && (
        <button
          onClick={onAction}
          className="btn-primary inline-flex items-center gap-2"
        >
          <ApperIcon name="Wand2" size={18} />
          {actionText}
        </button>
      )}
    </motion.div>
  );
};

export default Empty;