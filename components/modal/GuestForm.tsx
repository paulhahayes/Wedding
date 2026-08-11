"use client";
import { useState, Dispatch, SetStateAction } from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { ButtonGroup } from "@material-tailwind/react";
import useTranslate from "@/hooks/useTranslate";
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
  const { lang } = useTranslate();

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
      <Heading
        title={lang === "en" ? "Will you be attending?" : "¿Asistirás?"}
      />
      <ButtonGroup className="w-full gap-2">
        <YesButton
          hasError={hasError}
          toggle={going}
          label={lang === "en" ? "Going" : "Sí"}
          styles="bg-greenGradient text-white w-[50%] yes"
          onClick={handleGoingClick}
        />
        <NoButton
          hasError={hasError}
          toggle={notGoing}
          label={lang === "en" ? "Not Going" : "No"}
          styles="text-black w-[50%] hover:opacity-90 no"
          onClick={handleNotGoingClick}
        />
      </ButtonGroup>
      <Heading
        title={
          lang === "en"
            ? "Please enter your name"
            : "Por favor, ingresa tu nombre"
        }
      />
      <Input
        id="firstName"
        label={lang === "en" ? "First name" : "Nombre"}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="lastName"
        label={lang === "en" ? "Last name" : "Apellido"}
        register={register}
        errors={errors}
        required
      />
      <div>
        <Heading
          subtitle={
            lang === "en"
              ? "Please select any dietary requirements"
              : "Por favor, selecciona cualquier requerimiento dietético"
          }
        />
        <DietaryOptions register={register} errors={errors} />
      </div>
    </div>
  );
};

export default GuestForm;
