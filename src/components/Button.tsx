import React from "react";

interface Props {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button = ({ onClick, children, className }: Props) => {
  const childArray = React.Children.toArray(children);

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden border-2 border-white rounded-md group hover:bg-[#3D8BFF] text-[18px] ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 mb-[2px] z-10 group-hover:-translate-y-full">
        <span>{childArray[0]}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-full group-hover:translate-y-0">
        <span>{childArray[1]}</span>
      </div>
    </button>
  );
};

export default Button;
