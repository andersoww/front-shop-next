"use client";
import { IFile } from "@/components/FormFile";
import { Text } from "@/components/Text";
import { FileBox, UploadCloud } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { FieldValues, UseFormSetValue } from "react-hook-form";

interface IDropzone {
  setValue: UseFormSetValue<FieldValues>;
  onDrop: (acceptedFiles: any) => void;
  files: IFile[];
}

function MyDropzone({ onDrop, files }: IDropzone) {
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
      className="p-4 border-2 border-dashed border-[#2C2C2F] rounded-lg cursor-pointer flex justify-center gap-x-2 items-center flex-col"
    >
      {files[0] ? (
        <div className="flex gap-4 items-center">
          <FileBox className="h-6 w-6" />
          <Text>{files[0].path}</Text>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <UploadCloud className="h-6 w-6" />
          <Text>Selecione para importar as rotas.</Text>
        </div>
      )}

      <input {...getInputProps()} />
    </div>
  );
}

export { MyDropzone };
