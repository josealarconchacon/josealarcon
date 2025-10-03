import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}

const Button = ({
  children,
  variant = "primary",
  onClick,
  className = "",
  icon,
}: ButtonProps) => {
  const baseStyles =
    "px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center gap-3";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-100 hover:scale-105",
    secondary:
      "bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:shadow-2xl hover:shadow-purple-600/50 hover:scale-105",
    outline: "border border-gray-700 hover:bg-gray-800 hover:scale-105",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
