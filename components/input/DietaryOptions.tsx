import { useEffect, useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { FormData } from "@/types/FormData";
import Checkbox from "./Checkbox";
import Input from "./Input";

const options = [
  "Lactose intolerance",
  "Gluten intolerance",
  "Vegetarian",
  "Nut allergy",
  "Shellfish allergy",
  "Other",
];

interface DietaryOptionsProps {
  register: UseFormRegister<FormData>;
  plusOne: boolean;
  errors: FieldErrors;
}

const DietaryOptions: React.FC<DietaryOptionsProps> = ({
  register,
  plusOne,
  errors,
}) => {
  const [displayInput, setDisplayInput] = useState(false);

  const handleOtherInput = () => {
    setDisplayInput((prev) => !prev);
  };

  useEffect(() => {
    if (plusOne) {
      setDisplayInput(false);
    }
  }, [plusOne]);

  return (
    <div>
      <div className="w-full grid md:grid-cols-3 gap-4 min-[320px]:grid-cols-2 top-0 mt-2">
        <div className="p-0">
          <Checkbox
            id={plusOne ? "plusoneLactoseIntolerant" : "lactoseIntolerant"}
            register={register}
            label={options[0]}
          />
        </div>
        <div className="p-0">
          <Checkbox
            id={plusOne ? "plusoneGlutenIntolerant" : "glutenIntolerant"}
            register={register}
            label={options[1]}
          />
        </div>
        <div className="p-0">
          <Checkbox
            id={plusOne ? "plusoneVegetarian" : "vegetarian"}
            register={register}
            label={options[2]}
          />
        </div>
        <div className="p-0">
          <Checkbox
            id={plusOne ? "plusoneNutAllergy" : "nutAllergy"}
            register={register}
            label={options[3]}
          />
        </div>
        <div className="p-0">
          <Checkbox
            id={plusOne ? "plusoneShellfishAllergy" : "shellfishAllergy"}
            register={register}
            label={options[4]}
          />
        </div>
        <div className="p-0" onClick={handleOtherInput}>
          <Checkbox
            id={plusOne ? "plusoneOther" : "other"}
            register={register}
            label={options[5]}
          />
        </div>
      </div>
      {displayInput && (
        <Input
          id={plusOne ? "plusoneOtherAllergies" : "otherAllergies"}
          label="Other requirements"
          register={register}
          required
          errors={errors}
        />
      )}
    </div>
  );
};

export default DietaryOptions;
