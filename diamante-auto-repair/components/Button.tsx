import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-sm";
  
  const variants = {
    primary: "bg-brand-red text-white border border-brand-red hover:bg-red-700 hover:border-red-700",
    outline: "bg-transparent text-white border border-white/30 hover:bg-white hover:text-black",
    white: "bg-white text-black border border-white hover:bg-gray-200"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </motion.button>
  );
};