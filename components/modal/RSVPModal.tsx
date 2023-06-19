"use client";

import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Modal from "./Modal";
import useRSVP from "@/hooks/useRSVP";
import Heading from "../Heading";
import Input from "../input/Input";
import OTP from "../input/OTP";
import Checkbox from "../input/Checkbox";
import { useEffect } from "react";
enum STEPS {
  CODE = 0,
  NAME = 1,
  MENU = 2,
  MORE = 3,
}

const RSVPModal = () => {
  const router = useRouter();
  const rsvpModal = useRSVP();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CODE);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      status: "",
      dietaryRestrictions: "",
      mealChoice: "",
    },
  });

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const status = watch("status");
  const dietaryRestrictions = watch("dietaryRestrictions");
  const mealChoice = watch("mealChoice");

  useEffect(() => {
    if (otp === "1234") {
      setStep(STEPS.NAME);
    }
  }, [otp]);

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    if (step === STEPS.CODE && otp !== "1234") {
      setOtpError(true);
      return;
    }

    setStep((value) => value + 1);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.MORE) {
      return onNext();
    }

    setIsLoading(true);
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
      <div className="flex flex-col gap-8">
        <Heading title="Please enter your name" subtitle="" />
        <Input
          id="Name"
          label="first name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="Last Name"
          label="last name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
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
      onClose={rsvpModal.onClose}
      body={bodyContent}
    />
  );
};

export default RSVPModal;
