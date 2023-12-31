"use client";
import React, { useState, ChangeEvent, DragEvent } from "react";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImageInput from "../input/ImageInput";
import toast, { Toaster } from "react-hot-toast";
import useTranslate from "@/hooks/useTranslate";
type UploadModalProps = {
  onClose: () => void;
  isOpen: boolean;
  handleUpdate: () => void;
};

const UploadModal: React.FC<UploadModalProps> = ({
  onClose,
  isOpen,
  handleUpdate,
}) => {
  const { lang } = useTranslate();
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      socialMedia: "",
      file: {},
    },
  });

  const handleDragOver = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (): void => {
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    displayPreview(file);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("file", file);
      displayPreview(file);
    }
  };

  const displayPreview = (file: File): void => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setSelectedImage(reader.result);
      }
    };
  };

  const handleClose = (): void => {
    setSelectedImage("");
    reset();
    onClose();
  };

  const handleClear = (): void => {
    setSelectedImage("");
    reset();
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const formData = new FormData();
    const tags = [data.socialMedia];
    formData.append("file", data.file);
    formData.append("tags", tags.join(","));
    formData.append("upload_preset", "wedding");
    setLoading(true);
    const result = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    ).then((res) => res.json());

    setLoading(false);
    if (result.asset_id) {
      toast.success(
        lang === "en" ? "Image uploaded!" : "Imagen subida con éxito"
      );
    } else {
      toast.error(lang === "en" ? "Something went wrong" : "Algo salió mal");
    }
    handleUpdate();
    handleClose();
  };

  const bodyContent = (
    <>
      <Toaster />

      <form className="flex flex-col gap-8 ">
        <div
          className={`w-full h-72 relative border-2 border-gray-300 border-dashed rounded-lg p-6 ${
            isDragging ? "border-indigo-600" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex w-full h-screen items-center justify-center bg-grey-lighter">
              {!selectedImage && (
                <label className="w-72 flex flex-col items-center px-4 py-12 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue-300">
                  <img
                    className="mx-auto h-12 w-12"
                    src="https://www.svgrepo.com/show/357902/image-upload.svg"
                    alt=""
                  ></img>
                  <span className="mt-2 text-base leading-normal">
                    {lang === "en"
                      ? "Select or drag an Image"
                      : "Selecciona o arrastra una imagen"}
                  </span>
                  <input
                    id="file"
                    accept=".jpg, .jpeg, .png"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              )}
              {selectedImage && (
                <img
                  src={selectedImage}
                  className="my-2 mx-auto max-h-64 rounded-lg shadow-md"
                  alt="Preview"
                />
              )}
            </div>
          </div>
        </div>
        <ImageInput
          id="socialMedia"
          label={
            lang === "en"
              ? "Add Social Media (not required)"
              : "Agregar redes sociales (no requerido)"
          }
          register={register}
          errors={errors}
        />
        {loading && (
          <div className="mx-auto animate-spin">
            <svg
              fill="none"
              height="20"
              viewBox="0 0 20 20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 3C6.13401 3 3 6.13401 3 10C3 10.2761 2.77614 10.5 2.5 10.5C2.22386 10.5 2 10.2761 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5C9.5 17.2239 9.72386 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3Z"
                fill="#212121"
              />
            </svg>
          </div>
        )}
      </form>
    </>
  );

  return (
    <Modal
      title={lang === "en" ? "Upload an Image" : "Subir una imagen"}
      actionLabel={lang === "en" ? "Upload" : "Subir"}
      secondaryAction={handleClear}
      secondaryActionLabel={lang === "en" ? "Clear" : "Limpiar"}
      isOpen={isOpen}
      onSubmit={handleSubmit(onSubmit)}
      onClose={handleClose}
      body={bodyContent}
    />
  );
};

export default UploadModal;
