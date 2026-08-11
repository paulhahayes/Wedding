"use client";
import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "@/types/FormData";
import Checkbox from "./Checkbox";
import Input from "./Input";
import useTranslate from "@/hooks/useTranslate";

const options = [
  "Lactose intolerance",
  "Gluten intolerance",
  "Vegetarian",
  "Nut allergy",
  "Shellfish allergy",
  "Other",
];

const spanishOptions = [
  "Intolerancia a la lactosa",
  "Intolerancia al gluten",
  "Vegetariano",
  "Alergia a los frutos secos",
  "Alergia a los mariscos",
  "Otro",
];

interface DietaryOptionsProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
}

const DietaryOptions: React.FC<DietaryOptionsProps> = ({
  register,
  errors,
}) => {
  const { lang } = useTranslate();
  const [displayInput, setDisplayInput] = useState(false);

  const handleOtherInput = () => {
    setDisplayInput((prev) => !prev);
  };

  return (
    <div>
      <div className="w-full grid md:grid-cols-3 gap-4 min-[320px]:grid-cols-2 top-0 mt-2">
        <div className="p-0">
          <Checkbox
            id="lactoseIntolerant"
            register={register}
            label={lang === "en" ? options[0] : spanishOptions[0]}
          />
        </div>
        <div className="p-0">
          <Checkbox
            id="glutenIntolerant"
            register={register}
            label={lang === "en" ? options[1] : spanishOptions[1]}
          />
        </div>
        <div className="p-0">
          <Checkbox
            id="vegetarian"
            register={register}
            label={lang === "en" ? options[2] : spanishOptions[2]}
          />
        </div>
        <div className="p-0">
          <Checkbox
            id="nutAllergy"
            register={register}
            label={lang === "en" ? options[3] : spanishOptions[3]}
          />
        </div>
        <div className="p-0">
          <Checkbox
            id="shellfishAllergy"
            register={register}
            label={lang === "en" ? options[4] : spanishOptions[4]}
          />
        </div>
        <div className="p-0" onClick={handleOtherInput}>
          <Checkbox
            id="other"
            register={register}
            label={lang === "en" ? options[5] : spanishOptions[5]}
          />
        </div>
      </div>
      {displayInput && (
        <Input
          id="otherAllergies"
          label={lang === "en" ? "Other requirements" : "Otros requerimientos"}
          register={register}
          required
          errors={errors}
        />
      )}
    </div>
  );
};

export default DietaryOptions;
