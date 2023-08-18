import { useState, Dispatch, SetStateAction, useEffect } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ButtonGroup } from "@material-tailwind/react";

import Heading from "../Heading";
import DietaryOptions from "../input/DietaryOptions";
import Input from "../input/Input";
import YesButton from "../input/YesButton";
import NoButton from "../input/NoButton";
import Checkbox from "../input/Checkbox";

import { FormData } from "@/types/FormData";

interface GuestFormProps {
  plusOne: boolean;
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
  setValue: any;
  setPlusOne: Dispatch<SetStateAction<boolean>>;
  displayPlusOne: boolean;
  hasError: boolean;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

const GuestForm: React.FC<GuestFormProps> = ({
  register,
  errors,
  setValue,
  setPlusOne,
  displayPlusOne,
  hasError,
  setHasError,
}) => {
  const [going, setGoing] = useState(false);
  const [notGoing, setNotGoing] = useState(false);

  useEffect(() => {
    setGoing(false);
    setNotGoing(false);
  }, [displayPlusOne]);

  const handleGoingClick = () => {
    setGoing((prev) => !prev);
    setNotGoing(false);
    setHasError(false);
    if (displayPlusOne) {
      setValue("attending", "yes");
    } else {
      setValue("plusoneAttending", "yes");
    }
  };

  const handleNotGoingClick = () => {
    setNotGoing((prev) => !prev);
    setGoing(false);
    setHasError(false);
    if (displayPlusOne) {
      setValue("attending", "no");
    } else {
      setValue("plusoneAttending", "no");
    }
  };

  const handleTogglePlusOne = () => {
    setPlusOne((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <Heading title="Will you be attending?" />
      <ButtonGroup className="w-full gap-2">
        <YesButton
          hasError={hasError}
          toggle={going}
          label="Going"
          styles="bg-greenGradient text-white w-[50%] yes border border-red-500"
          onClick={handleGoingClick}
        />
        <NoButton
          hasError={hasError}
          toggle={notGoing}
          label="Not Going"
          styles="text-black w-[50%] hover:opacity-90 no"
          onClick={handleNotGoingClick}
        />
      </ButtonGroup>
      <Heading title="Please enter your name" />
      <Input
        id={displayPlusOne ? "firstName" : "plusoneFirstName"}
        label="first name"
        register={register}
        errors={errors}
        required
      />
      <Input
        id={displayPlusOne ? "lastName" : "plusoneLastName"}
        label="last name"
        register={register}
        errors={errors}
        required
      />
      <div>
        <Heading subtitle="Please select any dietary requirements" />
        <DietaryOptions
          register={register}
          plusOne={!displayPlusOne}
          errors={errors}
        />
      </div>
      {displayPlusOne && (
        <div className="border-t pt-2" onClick={handleTogglePlusOne}>
          <Checkbox
            id="plusone"
            label="Do you have a plus one?"
            register={register}
          />
        </div>
      )}
    </div>
  );
};

export default GuestForm;
