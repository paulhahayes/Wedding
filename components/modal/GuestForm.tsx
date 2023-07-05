import { useState } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ButtonGroup } from "@material-tailwind/react";
import Heading from "../Heading";
import DietaryOptions from "../input/DietaryOptions";
import Input from "../input/Input";
import YesButton from "../input/YesButton";
import NoButton from "../input/NoButton";
import { FormData } from "@/types/FormData";

interface GuestFormProps {
  plusOne: boolean;
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
  setValue: any;
}

const GuestForm: React.FC<GuestFormProps> = ({
  plusOne,
  register,
  errors,
  setValue,
}) => {
  const [going, setGoing] = useState(false);
  const [notGoing, setNotGoing] = useState(false);

  const handleGoingClick = () => {
    setGoing(!going);
    setNotGoing(false);
    setValue("attending", "yes");
  };

  const handleNotGoingClick = () => {
    setNotGoing(!notGoing);
    setGoing(false);
    setValue("attending", "no");
  };

  return (
    <div className="flex flex-col gap-4">
      <Heading title="Will you be attending?" />
      <ButtonGroup className="w-full gap-2">
        <YesButton
          toggle={going}
          label="Going"
          styles="bg-greenGradient text-white w-[50%] yes"
          onClick={handleGoingClick}
        />
        <NoButton
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
        <DietaryOptions register={register} />
      </div>
      {/* {plusOne && (
        <div className="border-t pt-2">
          <Checkbox
            id="plusOne"
            label="Do you have a plus one?"
            isChecked={false}
            setIsChecked={() => {}}
          />
        </div>
      )} */}
    </div>
  );
};

export default GuestForm;
