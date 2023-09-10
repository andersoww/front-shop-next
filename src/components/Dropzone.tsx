"use client";
import { UploadCloud } from "lucide-react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FieldValues, UseFormSetValue } from "react-hook-form";

interface IDropzone {
  setValue: UseFormSetValue<FieldValues>;
  onDrop: (acceptedFiles: any) => void;
}

function MyDropzone({ onDrop }: IDropzone) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 1,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="p-4 border border-[#2C2C2F] rounded-lg cursor-pointer flex justify-center gap-x-2"
    >
      <UploadCloud />

      <input {...getInputProps()} />
      <p>Selecione para importar as rotas.</p>
    </div>
  );
}

export { MyDropzone };
