"use client";

import { toast } from "react-hot-toast";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Modal from "./Modal";
import useRSVP from "@/hooks/useRSVP";
import Heading from "../Heading";
import Input from "../input/Input";
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

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      code: "",
      firstName: "",
      lastName: "",
      status: "",
      dietaryRestrictions: "",
      mealChoice: "",
    },
  });

  const code = watch("code");
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const status = watch("status");
  const dietaryRestrictions = watch("dietaryRestrictions");
  const mealChoice = watch("mealChoice");

  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
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
    <div className="flex flex-col gap-8">
      <Heading title="Please enter the secret code" subtitle="check email" />
      <div
        className="
          grid 
          grid-cols-1
          gap-3
          max-h-[50vh]
          overflow-y-auto
        "
      >
        <Input
          id="sercet-code"
          label="code"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    </div>
  );

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
