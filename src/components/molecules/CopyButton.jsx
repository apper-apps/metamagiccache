import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";

const CopyButton = ({ text, className, ...props }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="secondary"
      size="sm"
      className={className}
      disabled={!text}
      {...props}
    >
      <motion.div
        key={copied ? "check" : "copy"}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <ApperIcon name={copied ? "Check" : "Copy"} size={16} />
      </motion.div>
      <span className="ml-2">{copied ? "Copied!" : "Copy"}</span>
    </Button>
  );
};

export default CopyButton;