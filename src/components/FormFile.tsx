"use client";

import { exportXlsx } from "@/services/exportXlsx";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { MyDropzone } from "./Dropzone";

function FormFile() {
  const [files, setFiles] = useState<any[]>([]);
  const [url, setUrl] = useState("");

  const { handleSubmit, setValue } = useForm();

  const resetFile = useCallback(() => {
    setValue("file", []);
    setFiles([]);
  }, [setValue]);

  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      const allFiles = [...acceptedFiles];
      setFiles(allFiles);
      setValue("file", allFiles[0]);
    },
    [setValue]
  );

  const onSubmit = useCallback(
    async (data: any) => {
      const body = new FormData();
      body.append("file", data.file);
      await exportXlsx(body)
        .then((res) => {
          if (res.res) {
            const buffer = Buffer.from(res.res);
            const blob = new Blob([buffer]);

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            document.body.appendChild(a);
            a.href = url;
            a.download = "filename.xlsx";
            a.click();
            window.URL.revokeObjectURL(url);
          }
        })
        .catch((err) => err.response);

      setUrl(url);
    },
    [url]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Divider />

      <div className="flex flex-col m-4 gap-4">
        <MyDropzone setValue={setValue} onDrop={onDrop} />

        {files[0] && (
          <ol className="">
            {files.map((item, index) => (
              <li key={index}>{item.path}</li>
            ))}
          </ol>
        )}
      </div>

      {url && (
        <a className="m-4" href={url} download="download" target="_blank">
          Download
        </a>
      )}

      <div className="p-4 w-full justify-between flex gap-4">
        <Button variant="clear" onClick={() => resetFile()}>
          Limpar
        </Button>
        <Button type="submit" disabled={!files[0]}>
          Salvar
        </Button>
      </div>
    </form>
  );
}

export { FormFile };
