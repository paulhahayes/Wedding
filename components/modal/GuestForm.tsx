import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { FormData } from "@/types/FormData";
import Input from "../input/Input";
import { FieldErrors } from "react-hook-form";
import DietaryOptions from "../input/DietaryOptions";
import { ButtonGroup, Button } from "@material-tailwind/react";

interface GuestFormProps {
  guest: FormData;
  setGuest: (guest: FormData) => void;
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
}

const GuestForm: FC<GuestFormProps> = ({
  guest,
  setGuest,
  register,
  errors,
}) => {
  const { firstName, lastName, attending, dietaryRestrictions } = guest;
  return (
    <div className="flex flex-col gap-4">
      <ButtonGroup className="w-full gap-2">
        <Button
          className={`w-[50%] ${
            attending
              ? "bg-blue-300"
              : "border-neutral-300 text-neutral-600 bg-white"
          } hover:opacity-70`}
          onClick={() => setGuest({ ...guest, attending: true })}
        >
          Going
        </Button>
        <Button
          className={`w-[50%] ${
            !attending
              ? "bg-blue-300"
              : "border-neutral-300 text-neutral-600 bg-white"
          } hover:opacity-70`}
          onClick={() => setGuest({ ...guest, attending: false })}
        >
          Not going
        </Button>
      </ButtonGroup>
      <Input
        id={`${firstName}-firstName`}
        label="first name"
        register={register}
        errors={errors}
        required
      />
      <Input
        id={`${lastName}-lastName`}
        label="last name"
        register={register}
        errors={errors}
        required
      />
      <div>
        <DietaryOptions
          checkedState={dietaryRestrictions}
          setCheckedState={(updatedRestrictions) =>
            setGuest({ ...guest, dietaryRestrictions: updatedRestrictions })
          }
        />
      </div>
    </div>
  );
};

export default GuestForm;
