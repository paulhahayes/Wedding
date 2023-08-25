"use client";
import toast, { Toaster } from "react-hot-toast";

import { useEffect, useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Heading from "../Heading";
import OTP from "../input/OTP";
import useRSVP from "@/hooks/useRSVP";
import Modal from "./Modal";
import GuestForm from "./GuestForm";
import confetti from "canvas-confetti";
import { sendRsvpForm } from "@/lib/api";

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
  const [plusOne, setPlusOne] = useState(false);
  const [hasError, setHasError] = useState(false);

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
      plusoneAttending: "",
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
    setPlusOne(false);
  };

  useEffect(() => {
    if (otp === "2023") {
      setStep(STEPS.NAME);
    }
  }, [otp]);

  const onBack = () => {
    if (!plusOne && step === STEPS.CONFIRM) {
      setStep(STEPS.NAME);
    } else {
      setStep((value) => value - 1);
    }
  };

  const onNext = (data: any) => {
    if (step === STEPS.CODE && otp !== "2023") {
      setOtpError(true);
      return;
    }

    if (step === STEPS.NAME) {
      if (data.attending === "") {
        setHasError(true);
      } else if (!hasError) {
        setStep(plusOne ? STEPS.GUEST : STEPS.CONFIRM);
      }
    } else if (step === STEPS.GUEST) {
      if (data.plusoneAttending === "") {
        setHasError(true);
      } else if (!hasError) {
        setStep(STEPS.CONFIRM);
      }
    } else {
      setStep((value) => value + 1);
    }
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (step !== STEPS.CONFIRM) {
      return onNext(data);
    }

    rsvpModal.onClose();
    setIsLoading(true);

    confetti({
      particleCount: 150,
      spread: 60,
    });

    const result: any = await sendRsvpForm(data);
    if (result.ok) {
      toast.success("RSVP sent!");
    } else {
      toast.error("Something went wrong");
    }
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
        register={register}
        errors={errors}
        setValue={setValue}
        plusOne={plusOne}
        setPlusOne={setPlusOne}
        displayPlusOne={true}
        hasError={hasError}
        setHasError={setHasError}
      />
    );
  }

  if (step === STEPS.GUEST) {
    bodyContent = bodyContent = (
      <GuestForm
        plusOne={plusOne}
        setPlusOne={setPlusOne}
        register={register}
        errors={errors}
        setValue={setValue}
        displayPlusOne={false}
        hasError={hasError}
        setHasError={setHasError}
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
    <div>
      <Toaster />
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
    </div>
  );
};

export default RSVPModal;
