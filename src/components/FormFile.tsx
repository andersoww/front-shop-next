"use client";

import { exportXlsx } from "@/services/exportXlsx";
import { Download, FileText, Info, Trash, Upload } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { MyDropzone } from "./Dropzone";

interface IFile {
  path: string;
  size: number;
  type: string;
}

function FormFile() {
  const [files, setFiles] = useState<IFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [pathname, setPathName] = useState("");
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const { handleSubmit, setValue } = useForm();

  const resetFile = useCallback(() => {
    setValue("file", []);
    setFiles([]);
    setUrl("");
    setPathName("");
  }, [setValue]);

  const onDrop = useCallback(
    (acceptedFiles: any[]) => {
      const allFiles = [...acceptedFiles];
      setFiles(allFiles);
      setValue("file", allFiles[0]);
    },
    [setValue]
  );

  const onSubmit = useCallback(async (data: any) => {
    const name = data.file.path.replace(".pdf", "");

    setIsLoading(true);
    const body = new FormData();
    body.append("file", data.file);
    await exportXlsx(body)
      .then((res) => {
        if (res.res) {
          const buffer = Buffer.from(res.res);
          const blob = new Blob([buffer]);

          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");

          downloadRef.current = a;
          a.href = url;
          setIsLoading(false);
          setUrl(url);
          setPathName(name + ".xlsx");
          // window.URL.revokeObjectURL(url);
        }
      })
      .catch((err) => err.response);
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Divider />

      <div className="flex flex-col m-4 gap-4">
        <div>
          <MyDropzone setValue={setValue} onDrop={onDrop} />

          <div className="flex pt-2 gap-1">
            <Info className="stroke-purple-600 h-5 w-5" />
            <p className="text-xs mt-[2px]">
              Certifique se o arquivo selecionado, é mesmo o arquivo com os
              endereços das rotas.
            </p>
          </div>
        </div>
      </div>

      {files[0] && (
        <div>
          <h1 className="px-4 py-2 font-semibold">Seus arquivos</h1>
          <Divider />
          <ol className="p-4">
            {files.map((item, index) => {
              const name = item.path.replace(".pdf", "");

              return (
                <li key={index} className="flex w-full justify-between">
                  <div className="flex gap-2">
                    <FileText />
                    <p>{name}</p>
                  </div>
                  <Trash onClick={() => setFiles([])} />
                </li>
              );
            })}
          </ol>
        </div>
      )}

      <div className="p-4 w-full flex gap-4">
        {!url ? (
          <Button
            type="submit"
            disabled={!files[0]}
            isLoading={isLoading}
            loadingText="Processando"
            iconLeft={<Upload className="w-4 h-4" />}
          >
            Processar
          </Button>
        ) : (
          <div className="flex w-full justify-end gap-2">
            <Button
              type="button"
              onClick={() => {
                resetFile();
              }}
            >
              Novo Consulta
            </Button>
            <a ref={downloadRef} href={url} download={pathname} target="_blank">
              <Button type="button" iconLeft={<Download className="h-5 w-5" />}>
                Download
              </Button>
            </a>
          </div>
        )}
      </div>
    </form>
  );
}

export { FormFile };
