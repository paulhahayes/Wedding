"use client";

import { toast } from "react-hot-toast";
import { useEffect, useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, ButtonGroup } from "@material-tailwind/react";
import Heading from "../Heading";
import DietaryOptions from "../input/DietaryOptions";
import Input from "../input/Input";
import OTP from "../input/OTP";
import useRSVP from "@/hooks/useRSVP";
import Modal from "./Modal";
import Checkbox from "../input/Checkbox";

enum STEPS {
  CODE = 0,
  NAME = 1,
  GUEST = 2,
  MENU = 3,
  MORE = 4,
}

const RSVPModal = () => {
  const rsvpModal = useRSVP();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CODE);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const [isChecked, setChecked] = useState(false);
  const [dietaryRestrictions, setDietaryRestrictions] = useState({
    vegetarian: false,
    lactoseIntolerant: false,
    glutenIntolerant: false,
    nutAllergy: false,
    shellfishAllergy: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      attending: "",
      firstName: "",
      lastName: "",
      dietaryRestrictions: {
        vegetarian: false,
        lactoseIntolerant: false,
        glutenIntolerant: false,
        nutAllergy: false,
        shellfishAllergy: false,
      },
    },
  });

  const resetModal = () => {
    reset();
    setStep(STEPS.CODE);
    setOtp("");
    setOtpError(false);
    setIsLoading(false);
    setChecked(false);
  };

  useEffect(() => {
    if (rsvpModal.isOpen === false) {
      resetModal();
    }
  }, [rsvpModal.isOpen]);

  useEffect(() => {
    if (otp === "1234") {
      setStep(STEPS.NAME);
    }
  }, [otp]);

  const onBack = () => {
    if (!isChecked && step === STEPS.MENU) {
      setStep(STEPS.NAME);
    } else {
      setStep((value) => value - 1);
    }
  };

  const onNext = () => {
    if (step === STEPS.CODE && otp !== "1234") {
      setOtpError(true);
      return;
    }
    if (isChecked && step === STEPS.NAME) {
      setStep(STEPS.GUEST);
    } else if (
      (isChecked && step === STEPS.GUEST) ||
      (!isChecked && step === STEPS.NAME)
    ) {
      setStep(STEPS.MENU);
    } else {
      setStep((value) => value + 1);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.MORE) {
      return onNext();
    }

    setIsLoading(true);
    console.log(data);
    // axios
    //   .post("/api/listings", data)
    //   .then(() => {
    //     toast.success("Listing created!");
    //     router.refresh();
    //     reset();
    //     setStep(STEPS.CATEGORY);
    //     rentModal.onClose();
    //   })
    //   .catch(() => {
    //     toast.error("Something went wrong.");
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.MORE) {
      return "Submit";
    }

    return "Next";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CODE) {
      return undefined;
    }

    return "Back";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8 ">
      <Heading title="Please enter the verification code" subtitle="" />
      <div
        className="
          grid 
          grid-cols-1
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        <div onClick={() => setOtpError(false)} className="overflow-hidden">
          <OTP value={otp} onChange={setOtp} hasError={otpError} />
        </div>
      </div>
    </div>
  );

  if (step === STEPS.NAME) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading title="Will you be attending?" />
        <ButtonGroup className="w-full gap-2">
          <Button className="w-[50%] bg-blue-300 hover:opacity-70">
            Going
          </Button>
          <Button className="w-[50%] border-neutral-300 text-neutral-600 bg-white border hover:opacity-70">
            Not going
          </Button>
        </ButtonGroup>
        <Heading title="Please enter your name" />
        <Input
          id="firstName"
          label="first name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="lastName"
          label="last name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <div>
          <Heading subtitle="Please select any dietary requirements" />
          <DietaryOptions />
        </div>
        <div className="border-t pt-2">
          <Checkbox
            label="Do you have a plus one?"
            isChecked={isChecked}
            setIsChecked={setChecked}
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.GUEST) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading title="Will you be attending?" />
        <ButtonGroup className="w-full gap-2">
          <Button className="w-[50%] bg-blue-300 hover:opacity-70">
            Going
          </Button>
          <Button className="w-[50%] border-neutral-300 text-neutral-600 bg-white border hover:opacity-70">
            Not going
          </Button>
        </ButtonGroup>
        <Heading title="Please enter second name" />
        {/* <Input
          // id="secondFirstName"
          label="first name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="secondLastName"
          label="last name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        /> */}
        <div>
          <Heading subtitle="Please select any dietary requirements" />
          <DietaryOptions />
        </div>
        <div className="border-t pt-2">
          <Checkbox
            label="Do you have a plus one?"
            isChecked={isChecked}
            setIsChecked={setChecked}
          />
        </div>
      </div>
    );
  }

  if (step === STEPS.MENU) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Please select a meal"
          subtitle="Add any meal requirements"
        />
      </div>
    );
  }

  return (
    <Modal
      disabled={isLoading}
      isOpen={rsvpModal.isOpen}
      title="RSVP"
      actionLabel={actionLabel}
      onSubmit={handleSubmit(onSubmit)}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CODE ? undefined : onBack}
      onClose={() => {
        rsvpModal.onClose();
        resetModal();
      }}
      body={bodyContent}
    />
  );
};

export default RSVPModal;
