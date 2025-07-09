import React from "react";
import { cn } from "@/utils/cn";

const Card = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-200 hover:shadow-xl", className)}
      {...props}
    />
  );
});

Card.displayName = "Card";

export default Card;