"use client";
// TODO LOADER!
import React, { Suspense } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button } from "@material-tailwind/react";
import { RiFileCopyLine } from "react-icons/ri";
import { sendContactForm } from "@/lib/api";
import useTranslate from "@/hooks/useTranslate";
import LoadingCircle from "./loadingCircle";

const Contact = () => {
  const { lang } = useTranslate();
  const [loading, setingLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setingLoading(true);
    const result: any = await sendContactForm(data);
    if (result.ok) {
      toast.success("Your message was sent successfully!");
    } else {
      toast.error("Something went wrong");
    }
    setingLoading(false);
  };

  const copied = () => toast("Copied ✅");

  return (
    <div className=" min-[390px]:pb-14 sm:pb-8">
      {loading && <LoadingCircle />}
      <Toaster />
      <div className="flex min-[390px]:flex-col sm:flex-row gap-8 min-[330px]:mx-4 min-[330px]:justify-center">
        <div className="flex-1 sm:h-[600px] flex flex-col gap-[20px] items-end ">
          <span className="text-lime w-full text-start text-[22px] font-bold">
            Ximena Cáceres
          </span>

          <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full h-32 flex items-center flex-row px-8 gap-3 backdrop-blur-3xl rounded bg-slate-700/30 border-white border text-white sm:text-[20px] min-[330px]:text-[12px] font-bold">
              <CopyToClipboard text="0424977821" onCopy={copied}>
                <div
                  className="relative 
                              group 
                              flex 
                              items-center 
                              rounded-md 
                              w-full
                            
                              h-[64px]
                              bg-neutral-100/10 
                              cursor-pointer 
                              hover:bg-neutral-100/20 
                              transition 
                              pr-4"
                >
                  <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                      className="object-cover rounded-l"
                      src="/c.png"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={1}
                      alt="Image"
                    />
                  </div>
                  <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                      className="object-cover rounded-l"
                      src="/bride.png"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      quality={1}
                      alt="Image"
                    />
                  </div>
                  <p className="text-[20px] font-bold truncate py-5">
                    0424 977 821
                  </p>
                  <div
                    className="
                  absolute 
                  transition 
                  opacity-0 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-blue-300 
                  p-4 
                  drop-shadow-md 
                  right-5
                  group-hover:opacity-100 
                  hover:scale-110
                  "
                  >
                    <RiFileCopyLine />
                  </div>
                </div>
              </CopyToClipboard>
            </div>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full h-32 flex items-center flex-row px-8 gap-3 backdrop-blur-3xl rounded bg-slate-700/30 border-white border text-white text-[20px] font-bold">
              <CopyToClipboard text="giseth21@gmail.com" onCopy={copied}>
                <div
                  className="relative 
                              group 
                              flex 
                              items-center 
                              rounded-md 
                              w-full
                              h-[64px]
                              bg-neutral-100/10 
                              cursor-pointer 
                              hover:bg-neutral-100/20 
                              transition 
                              pr-4"
                >
                  <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                      className="object-cover rounded-l"
                      src="/email.png"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      alt="Image"
                    />
                  </div>
                  <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                      className="object-cover rounded-l"
                      src="/bride.png"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      alt="Image"
                    />
                  </div>
                  <p className="sm:text-[20px] min-[390px]:text-[18px] font-bold truncate py-5">
                    giseth21@gmail.com
                  </p>
                  <div
                    className="
                  absolute 
                  transition 
                  opacity-0 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-blue-300 
                  p-4 
                  drop-shadow-md 
                  right-5
                  group-hover:opacity-100 
                  hover:scale-110
                  "
                  >
                    <RiFileCopyLine />
                  </div>
                </div>
              </CopyToClipboard>
            </div>
          </Suspense>
          <span className="text-lime w-full text-start text-[22px] font-bold">
            Paul Hayes
          </span>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full h-32 flex items-center flex-row px-8 gap-3 backdrop-blur-3xl rounded bg-slate-700/30 border-white border text-white text-[20px] font-bold">
              <CopyToClipboard text="0402502689" onCopy={copied}>
                <div
                  className="relative 
                              group 
                              flex 
                              items-center 
                              rounded-md 
                              w-full
                              h-[64px]
                              bg-neutral-100/10 
                              cursor-pointer 
                              hover:bg-neutral-100/20 
                              transition 
                              pr-4"
                >
                  <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                      className="object-cover rounded-l"
                      src="/c.png"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      alt="Image"
                    />
                  </div>
                  <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                      className="object-cover rounded-l"
                      src="/groom2.png"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      alt="Image"
                    />
                  </div>
                  <p className="sm:text-[20px] min-[390px]:text-[18px] font-bold truncate py-5">
                    0402 502 689
                  </p>
                  <div
                    className="
                  absolute 
                  transition 
                  opacity-0 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-blue-300 
                  p-4 
                  drop-shadow-md 
                  right-5
                  group-hover:opacity-100 
                  hover:scale-110
                  "
                  >
                    <RiFileCopyLine />
                  </div>
                </div>
              </CopyToClipboard>
            </div>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <div className="w-full h-32 flex items-center flex-row px-8 gap-3 backdrop-blur-3xl rounded bg-slate-700/30 border-white border text-white text-[20px] font-bold">
              <CopyToClipboard text="paul.hayes.k@gmail.com" onCopy={copied}>
                <div
                  className="relative 
                              group 
                              flex 
                              items-center 
                              rounded-md 
                              w-full
                              h-[64px]
                              bg-neutral-100/10 
                              cursor-pointer 
                              hover:bg-neutral-100/20 
                              transition 
                              pr-4"
                >
                  <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                      className="object-cover rounded-l"
                      src="/email.png"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      alt="Image"
                    />
                  </div>
                  <div className="relative min-h-[64px] min-w-[64px]">
                    <Image
                      className="object-cover rounded-l"
                      src="/groom2.png"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      fill
                      alt="Image"
                    />
                  </div>
                  <p className="sm:text-[20px] min-[390px]:text-[18px] font-bold truncate py-5">
                    paul.hayes.k@gmail.com
                  </p>
                  <div
                    className="
                  absolute 
                  transition 
                  opacity-0 
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  bg-blue-300 
                  p-4 
                  drop-shadow-md 
                  right-5
                  group-hover:opacity-100 
                  hover:scale-110
                  "
                  >
                    <RiFileCopyLine />
                  </div>
                </div>
              </CopyToClipboard>
            </div>
          </Suspense>
        </div>

        <div className="sm:h-[600px] border"></div>

        <form
          className="flex-1 flex flex-col gap-[20px] h-[600px] "
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className="text-lime text-start text-[22px] font-bold">
            {lang === "en" ? "Send us a message" : "Envíanos un mensaje"}
          </span>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder={lang === "en" ? "Your Name" : "Tu Nombre"}
            className="p-[20px] placeholder-white backdrop-blur-3xl rounded bg-slate-700/30 border-none outline-none text-white text-[20px] font-bold"
          />
          {errors.name && (
            <span>
              {lang === "en"
                ? "This field is required"
                : "Este campo es obligatorio"}
            </span>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            placeholder={lang === "en" ? "Your Email" : "Tu Correo"}
            className="p-[20px] backdrop-blur-3xl  placeholder-white rounded bg-slate-700/30 border-none outline-none text-white text-[20px] font-bold "
          />
          {errors.email && (
            <span>
              {lang === "en"
                ? "This field is required"
                : "Este campo es obligatorio"}
            </span>
          )}
          <input
            type="text"
            {...register("subject", { required: true })}
            placeholder={lang === "en" ? "Subject" : "Asunto"}
            className="p-[20px] placeholder-white backdrop-blur-3xl rounded bg-slate-700/30 border-none outline-none text-white text-[20px] font-bold"
          />
          {errors.name && <span>This field is required</span>}
          <textarea
            {...register("message", { required: true })}
            className="p-[20px] h-[400px] backdrop-blur-3xl rounded placeholder-white bg-slate-700/30 border-none outline-none text-white text-[20px] font-bold"
            placeholder={lang === "en" ? "Message" : "Mensaje"}
          ></textarea>
          {errors.message && (
            <span>
              {lang === "en"
                ? "This field is required"
                : "Este campo es obligatorio"}
            </span>
          )}

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-slate-700/70 hover:hover:bg-neutral-100/20 py-2 px-6 w-[50%] mt-2 border-2 border-white"
            >
              {lang === "en" ? "Send" : "Enviar"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
