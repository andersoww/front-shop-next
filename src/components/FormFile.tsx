"use client";

import { exportXlsx } from "@/services/exportXlsx";
import {
  Download,
  FileText,
  Info,
  Package,
  TrafficCone,
  Trash,
  Upload,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { MyDropzone } from "./Dropzone";
import { ToggleInput } from "@/components/ToggleInput";

interface IFile {
  path: string;
  size: number;
  type: string;
}

interface IFileResponse {
  stops: number;
  count: number;
  link: string;
}

function FormFile() {
  const downloadRef = useRef<HTMLAnchorElement | null>(null);
  const [files, setFiles] = useState<IFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [verifyToggle, setVerifyToggle] = useState(false);
  const [pathname, setPathName] = useState("");
  const [fileResponse, setFileResponse] = useState<IFileResponse>(
    {} as IFileResponse
  );

  const { handleSubmit, setValue } = useForm();

  const resetFile = useCallback(() => {
    setValue("file", []);
    setFiles([]);
    setPathName("");
    setFileResponse({ count: 0, link: "", stops: 0 });
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
      setIsLoading(true);

      const name = data.file.path.replace(".pdf", "");
      const body = new FormData();

      body.append("file", data.file);
      body.append("verify", String(verifyToggle));

      await exportXlsx(body)
        .then((res) => {
          if (res.res) {
            const buffer = Buffer.from(res.res);
            const blob = new Blob([buffer]);

            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");

            downloadRef.current = a;
            a.href = url;
            setPathName(name + ".xlsx");
            setFileResponse({
              count: res.numberPackages,
              stops: res.stops,
              link: url,
            });
            setIsLoading(false);
          }
        })
        .catch((err) => err.response);
    },
    [verifyToggle]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Divider />

      <div className="flex flex-col m-4 gap-4">
        <div>
          <MyDropzone setValue={setValue} onDrop={onDrop} />

          <div className="flex pt-2 gap-1">
            <Info className="stroke-purple-600 h-5 w-5" />
            <p className="text-xs mt-[2px]">
              Certifique-se o arquivo selecionado, é mesmo o arquivo com os
              endereços das rotas.
            </p>
          </div>
        </div>
      </div>

      {files[0] && (
        <div className="flex flex-col">
          <div className="px-4 py-2 flex justify-between">
            <h1 className=" font-semibold">Seus arquivos</h1>
          </div>
          <Divider />
          <ol className="p-4">
            {files.map((item, index) => {
              const name = item.path.replace(".pdf", "");

              return (
                <li
                  key={index}
                  className="flex flex-col w-full justify-between gap-4"
                >
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <FileText className="h-5 w-5" />
                      <p className="text-sm">{name}</p>
                    </div>

                    <ToggleInput.Label
                      className="justify-center"
                      description="Verificar ortografia"
                    >
                      <ToggleInput.Root className="items-end">
                        <ToggleInput.Input
                          defaultChecked={verifyToggle}
                          onChange={() =>
                            setVerifyToggle((state) => {
                              if (!state) {
                                return true;
                              } else return false;
                            })
                          }
                        />
                      </ToggleInput.Root>
                    </ToggleInput.Label>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      )}

      {fileResponse.link && (
        <div className="flex mx-4 gap-4">
          <div className="flex gap-2">
            <TrafficCone />
            <p>{fileResponse.stops}</p>
          </div>
          <div className="flex gap-2">
            <Package />
            <p>{fileResponse.count}</p>
          </div>
        </div>
      )}

      <div className="p-4 w-full flex gap-4">
        {!fileResponse.link ? (
          <div className="flex w-full gap-2">
            <Button
              type="submit"
              disabled={!files[0]}
              isLoading={isLoading}
              loadingText="Processando"
              iconLeft={<Upload className="w-4 h-4" />}
            >
              Processar
            </Button>
            {files[0] && (
              <div>
                <Button
                  disabled={isLoading}
                  iconLeft={
                    <Trash
                      className="h-5 w-5 cursor-pointer"
                      onClick={() => setFiles([])}
                    />
                  }
                />
              </div>
            )}
          </div>
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
            <a
              ref={downloadRef}
              href={fileResponse.link}
              download={pathname}
              target="_blank"
            >
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
