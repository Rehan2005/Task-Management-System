import React from "react";
import clsx from "clsx";

const Button = ({ 
  icon, 
  className, 
  label, 
  type = "button", 
  variant = "primary", 
  onClick = () => {} 
}) => {
  const baseStyles = "px-5 py-2 rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-300",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-300",
    signup: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-2 focus:ring-purple-300",
  };

  return (
    <button
      type={type}
      className={clsx(baseStyles, variants[variant], className)}
      onClick={onClick}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{label}</span>
    </button>
  );
};

export default Button;
