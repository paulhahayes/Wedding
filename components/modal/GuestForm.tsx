import { useState, Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ButtonGroup } from "@material-tailwind/react";

import Heading from "../Heading";
import DietaryOptions from "../input/DietaryOptions";
import Input from "../input/Input";
import YesButton from "../input/YesButton";
import NoButton from "../input/NoButton";

import { FormData } from "@/types/FormData";

interface GuestFormProps {
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
  setValue: any;
  hasError: boolean;
  setHasError: Dispatch<SetStateAction<boolean>>;
}

const GuestForm: React.FC<GuestFormProps> = ({
  register,
  errors,
  setValue,
  hasError,
  setHasError,
}) => {
  const [going, setGoing] = useState(false);
  const [notGoing, setNotGoing] = useState(false);

  const handleGoingClick = () => {
    setGoing((prev) => !prev);
    setNotGoing(false);
    setHasError(false);
    setValue("attending", "yes");
  };

  const handleNotGoingClick = () => {
    setNotGoing((prev) => !prev);
    setGoing(false);
    setHasError(false);
    setValue("attending", "no");
  };

  return (
    <div className="flex flex-col gap-4">
      <Heading title="Will you be attending?" />
      <ButtonGroup className="w-full gap-2">
        <YesButton
          hasError={hasError}
          toggle={going}
          label="Going"
          styles="bg-greenGradient text-white w-[50%] yes"
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
        id="firstName"
        label="first name"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="lastName"
        label="last name"
        register={register}
        errors={errors}
        required
      />
      <div>
        <Heading subtitle="Please select any dietary requirements" />
        <DietaryOptions register={register} errors={errors} />
      </div>
    </div>
  );
};

export default GuestForm;
