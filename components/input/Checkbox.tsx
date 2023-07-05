import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "@/types/FormData";
interface CheckboxProps {
  label: string;
  register: UseFormRegister<FormData>;
  type?: string;
  id: keyof FormData;
}

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  register,
  id,
  type = "checkbox",
}) => {
  return (
    <div className="inline-flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full p-3"
        htmlFor={String(id)}
      >
        <input
          type={type}
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border 
          border-neutral-300 transition-all before:absolute before:top-2/4 before:left-2/4 bg-white
          before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 
          before:rounded-full before:bg-neutral-300 before:opacity-0 before:transition-opacity 
          checked:border-bg-blue-300 checked:bg-blue-300 checked:before:bg-blue-300 hover:before:opacity-10"
          id={String(id)}
          {...register(id)}
        />

        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </label>
      <span className="ml-2">{label}</span>
    </div>
  );
};

export default Checkbox;
