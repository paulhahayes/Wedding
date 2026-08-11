"use client";
import toast, { Toaster } from "react-hot-toast";
import useTranslate from "@/hooks/useTranslate";
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
  CONFIRM = 2,
}

const RSVPModal = () => {
  const { lang } = useTranslate();
  const rsvpModal = useRSVP();
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(STEPS.CODE);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState(false);
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
    },
  });

  const resetModal = () => {
    reset();
    setStep(STEPS.CODE);
    setOtp("");
    setOtpError(false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (otp === "2023") {
      setStep(STEPS.NAME);
    }
  }, [otp]);

  const onBack = () => {
    setStep((value) => value - 1);
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
      toast.success(lang === "en" ? "RSVP sent!" : "¡RSVP enviado!");
    } else {
      toast.error(lang === "en" ? "Something went wrong" : "Algo salió mal");
    }
    resetModal();
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.CONFIRM) {
      const message = lang === "en" ? "Submit 🎉" : "Enviar 🎉";
      return message;
    }
    const message = lang === "en" ? "Next" : "Siguiente";
    return message;
  }, [step, lang]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CODE) {
      return undefined;
    }
    const message = lang === "en" ? "Back" : "Atrás";
    return message;
  }, [step, lang]);

  let bodyContent = (
    <div className="flex flex-col gap-8 ">
      <Heading
        title={
          lang === "en"
            ? "Please enter the verification code"
            : "Porfavor ingrese el codigo de verificacion"
        }
        subtitle=""
      />
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
        hasError={hasError}
        setHasError={setHasError}
      />
    );
  }

  if (step === STEPS.CONFIRM) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          center
          title={
            lang === "en"
              ? "Please confirm your RSVP"
              : "Por favor confirme su asistencia"
          }
        />
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
