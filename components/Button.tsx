"use client";

import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
interface ButtonProps {
  label: string | JSX.Element;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  icon?: IconType;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  styles,
  onClick,
  disabled,
  icon: Icon,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        `
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        bg-white
       text-md
       hover:bg-neutral-200

       hover:border
       hover:border-neutral-400
        py-3
        border-2
      `,
        styles
      )}
    >
      {Icon && (
        <Icon
          size={24}
          className="
            absolute
            left-4
            top-3
          "
        />
      )}
      {label}
    </button>
  );
};

export default Button;
