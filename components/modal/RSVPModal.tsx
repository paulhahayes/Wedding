"use client";
import { toast } from "react-hot-toast";
import { useEffect, useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../Heading";
import OTP from "../input/OTP";
import useRSVP from "@/hooks/useRSVP";
import Modal from "./Modal";
import GuestForm from "./GuestForm";
import confetti from "canvas-confetti";

enum STEPS {
  CODE = 0,
  NAME = 1,
  GUEST = 2,
  CONFIRM = 3,
}

const RSVPModal = () => {
  const rsvpModal = useRSVP();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CODE);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      attending: "",
      firstName: "",
      lastName: "",
      vegetarian: false,
      lactoseIntolerant: false,
      glutenIntolerant: false,
      nutAllergy: false,
      shellfishAllergy: false,
      other: false,
      otherAllergies: "",
      plusone: false,
      plusoneFirstName: "",
      plusoneLastName: "",
      plusoneVegetarian: false,
      plusoneLactoseIntolerant: false,
      plusoneGlutenIntolerant: false,
      plusoneNutAllergy: false,
      plusoneShellfishAllergy: false,
      plusoneOther: false,
      plusoneOtherAllergies: "",
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
    if (!isChecked && step === STEPS.CONFIRM) {
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
      setStep(STEPS.CONFIRM);
    } else {
      setStep((value) => value + 1);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (step !== STEPS.CONFIRM) {
      return onNext();
    }
    rsvpModal.onClose();
    setIsLoading(true);
    confetti({
      particleCount: 150,
      spread: 60,
    });
    try {
      await fetch("/api/rsvp", {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (error) {}

    // toast.success("RSVP sent!");
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.CONFIRM) {
      return "Submit 🎉";
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
      <GuestForm
        plusOne={true}
        register={register}
        errors={errors}
        setValue={setValue}
      />
    );
  }

  if (step === STEPS.GUEST) {
    bodyContent = bodyContent = (
      <GuestForm
        plusOne={false}
        register={register}
        errors={errors}
        setValue={setValue}
      />
    );
  }

  if (step === STEPS.CONFIRM) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading center title="Please confirm your RSVP" />
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
