import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const CharacterCounter = ({ count, limit = 160, className }) => {
  const getColor = () => {
    if (count < 140) return "text-success";
    if (count <= 160) return "text-warning";
    return "text-error";
  };

  const getIcon = () => {
    if (count < 140) return "CheckCircle";
    if (count <= 160) return "AlertCircle";
    return "XCircle";
  };

  const percentage = Math.min((count / limit) * 100, 100);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex-1">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              count < 140 ? "bg-success" : count <= 160 ? "bg-warning" : "bg-error"
            )}
            style={{ width: `${percentage}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
          />
        </div>
      </div>
      <div className={cn("flex items-center gap-1 text-sm font-medium", getColor())}>
        <ApperIcon name={getIcon()} size={16} />
        <span>{count}/{limit}</span>
      </div>
    </div>
  );
};

export default CharacterCounter;