import React from "react";
import { cn } from "@/utils/cn";

const Slider = React.forwardRef(({ 
  className, 
  value, 
  min = 0, 
  max = 100, 
  step = 1,
  ...props 
}, ref) => {
  const percentage = ((value - min) / (max - min)) * 100;
  
  return (
    <div className="relative w-full">
      <input
        ref={ref}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        className={cn(
          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-thumb",
          className
        )}
        style={{
          background: `linear-gradient(to right, #4361ee 0%, #4361ee ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`
        }}
        {...props}
      />
      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4361ee;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          transition: all 0.2s ease;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 8px rgba(67, 97, 238, 0.3);
        }
        
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #4361ee;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
});

Slider.displayName = "Slider";

export default Slider;