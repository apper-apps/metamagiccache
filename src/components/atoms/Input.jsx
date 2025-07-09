import React from "react";
import { cn } from "@/utils/cn";

const Input = React.forwardRef(({ 
  className, 
  type = "text", 
  error = false,
  ...props 
}, ref) => {
  const baseStyles = "w-full px-3 py-2 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1";
  
  const variants = {
    default: "border-gray-300 focus:border-primary focus:ring-primary/20",
    error: "border-red-300 focus:border-red-500 focus:ring-red-500/20",
  };

  return (
    <input
      ref={ref}
      type={type}
      className={cn(baseStyles, error ? variants.error : variants.default, className)}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;