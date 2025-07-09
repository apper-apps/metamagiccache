import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import { cn } from "@/utils/cn";

const FormField = ({ 
  label, 
  error, 
  helperText, 
  className,
  children,
  ...props 
}) => {
  return (
    <div className={cn("space-y-1", className)}>
      {label && <Label>{label}</Label>}
      {children || <Input error={!!error} {...props} />}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default FormField;