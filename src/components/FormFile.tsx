"use client";

import { Text } from "@/components/Text";
import { TextInput } from "@/components/TextInput";
import { useToast } from "@/context/ToastContext";
import { exportXlsx } from "@/services/exportXlsx";
import { importAddress } from "@/services/importAddress";
import { searchRouteAddresses } from "@/services/searchAddresses";
import {
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import clsx from "clsx";
import {
  ArrowLeft,
  Download,
  Home,
  Info,
  MapPin,
  Package,
  PackagePlus,
  PackageSearch,
  Search,
  Upload,
} from "lucide-react";
import Link from "next/link";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./Button";
import { Divider } from "./Divider";
import { MyDropzone } from "./Dropzone";

export interface IFile {
  path: string;
  size: number;
  type: string;
}
interface IAddressImport {
  address: string;
  neighborhood: string;
  route: string;
  package: string;
  cep: string;
  city: string;
  referer: string;
  long: string;
  lat: string;
}

interface ImportAddressRouteProps {
  list: IAddressImport[];
  stops: number;
  packages: number;
  countSuccess?: number;
  countFailures?: number;
}

function BoxText({
  title,
  description,
  className,
  icon,
}: {
  title?: string;
  description: string;
  className?: string;
  icon: ReactNode;
}) {
  return (
    <div className={clsx(className, "flex gap-3 items-center")}>
      {icon}
      <p className="text-sm font-light">{description}</p>
    </div>
  );
}

function Card({ add }: { add: IAddressImport }) {
  return (
    <div className="card-theme p-4 flex flex-col gap-2 relative h-[400px]">
      <BoxText
        icon={<MapPin className="w-4 h-4 " />}
        description={add.address}
      />
      <BoxText
        title="Bairro:"
        description={add.neighborhood}
        icon={<Home className="w-4 h-4" />}
      />
      <BoxText
        title="Pacote:"
        description={add.package}
        icon={<PackagePlus className="w-5 h-5" />}
        className="bottom-0 absolute right-0 bg-purple-600 p-2 rounded-lg [&>p]:text-lg [&>p]:font-medium"
      />

      <BoxText
        description={add.referer || "Sem conteúdo"}
        icon={<Info className="w-4 h-4" />}
      />
    </div>
  );
}

function FormFile() {
  const [files, setFiles] = useState<IFile[]>([]);
  const [address, setAddress] = useState<ImportAddressRouteProps>({
    list: [
      {
        address: "7 de Setembro,200",
        cep: "14640-000",
        city: "Morro Agudo",
        route: "Rota 42",
      },
    ],
    packages: 100,
    stops: 70,
  } as ImportAddressRouteProps);
  const [show, setShow] = useState(false);
  const [disabledSearch, setDisabledSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const [isLoadingDownload, setIsLoadingDownload] = useState(false);
  const downloadRef = useRef<HTMLAnchorElement | null>(null);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { addToast } = useToast();
  const { handleSubmit, setValue } = useForm();

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

      const body = new FormData();
      body.append("file", data.file);

      const response = await importAddress(body);

      if (response.data && response.result === "success") {
        addToast({
          title: "Sucesso",
          message: response.message,
          type: "success",
        });
        setShow(true);
        setAddress(response.data);
        onOpenChange();
      } else {
        addToast({
          title: "Error",
          message: response.message,
          type: "error",
        });
      }
      setIsLoading(false);
    },
    [addToast, onOpenChange]
  );

  const searchAddresses = useCallback(
    async (address: ImportAddressRouteProps) => {
      setIsLoadingSearch(true);
      setDisabledSearch(true);

      const newData = {
        routes: address.list,
      };

      const response = await searchRouteAddresses(newData);

      if (response.data && response.result === "success") {
        addToast({
          title: "Sucesso",
          message: response.message,
          type: "success",
        });
        setDisabledSearch(false);
        setAddress((state) => {
          return {
            ...state,
            list: response.data.list,
            countSuccess: response.data.success,
            countFailures: response.data.failures,
          };
        });
      } else {
        addToast({
          title: "Error",
          message: response.message,
          type: "error",
        });
      }

      setIsLoadingSearch(false);
    },
    [addToast]
  );

  const downloadXlsx = useCallback(async (address: ImportAddressRouteProps) => {
    setIsLoadingDownload(true);
    const response = await exportXlsx({ routes: address.list });

    if (response.data) {
      const buffer = Buffer.from(response.data.data);
      const blob = new Blob([buffer]);

      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");

      downloadRef.current = a;
      a.href = url;
      a.download = `${address.list[0].route}.xlsx`;
      a.click();
    }

    setIsLoadingDownload(false);
  }, []);

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <div className="flex flex-col gap-4 w-full p-4 h-full relative">
      {show && (
        <div className="flex flex-col gap-4 h-full">
          <div className="flex w-full justify-between">
            <h1 className="text-xl font-bold">{address.list[0].route}</h1>

            <Link href={{ pathname: "/sign" }}>
              <ArrowLeft />
            </Link>
          </div>

          <div className="flex flex-col w-full gap-1">
            <div className="flex gap-4 justify-center">
              <Chip
                startContent={<MapPin className="w-5 h-5" />}
                variant="flat"
                color="primary"
                size="lg"
              >
                <p className="text-sm">{address.stops}</p>
              </Chip>

              <Chip
                startContent={<Package className="w-5 h-5" />}
                variant="flat"
                color="warning"
              >
                <p className="text-sm">{address.packages}</p>
              </Chip>
            </div>
            <div className="w-full flex items-center justify-center">
              <p>
                {address.list[0].city} - {address.list[0].cep}
              </p>
            </div>
          </div>

          <Divider />

          <div className="flex w-full flex-col gap-2 mb-12">
            <TextInput.Root>
              <TextInput.Content>
                <TextInput.Icon>
                  <PackageSearch />
                </TextInput.Icon>
                <TextInput.Input placeholder="Procurar um endereço..." />
              </TextInput.Content>
            </TextInput.Root>

            <Tabs
              aria-label="Options"
              color="primary"
              variant="light"
              disabledKeys={!disabledSearch ? [] : ["tab2", "tab3"]}
              className="flex justify-center"
            >
              <Tab
                title={
                  <div className="flex items-center space-x-2">
                    <Text>{address.list.length}</Text>
                    <span>Todos</span>
                  </div>
                }
              >
                <div className="flex flex-col gap-4 h-[300px] overflow-auto">
                  {address.list.map((add, index) => {
                    return <Card key={index} add={add} />;
                  })}
                </div>
              </Tab>
              <Tab
                title={
                  <div className="flex items-center space-x-2">
                    <Text>{address.countSuccess}</Text>
                    <span>Sucesso</span>
                  </div>
                }
                key="tab2"
                disabled={disabledSearch}
              >
                <div className="flex flex-col gap-4 h-[330px] overflow-auto">
                  {address.list
                    .filter((item) => item.lat && item.long)
                    .map((add, index) => {
                      return <Card key={index} add={add} />;
                    })}
                </div>
              </Tab>
              <Tab
                title={
                  <div className="flex items-center space-x-2">
                    <Text>{address.countFailures}</Text>
                    <span>Falha</span>
                  </div>
                }
                key="tab3"
                disabled={disabledSearch}
              >
                <div className="flex flex-col gap-4 h-[330px] overflow-auto">
                  {address.list
                    .filter((item) => !item.lat)
                    .map((add, index) => {
                      return <Card key={index} add={add} />;
                    })}
                </div>
              </Tab>
            </Tabs>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full p-4 flex gap-4">
            <Button
              iconLeft={<Search className="h-4 w-4" />}
              onClick={() => searchAddresses(address)}
              isLoading={isLoadingSearch}
              disabled={isLoadingSearch}
            >
              Buscar
            </Button>

            <Button
              type="button"
              variant={disabledSearch ? "clear" : "default"}
              iconLeft={<Download className="h-5 w-5" />}
              isLoading={isLoadingDownload}
              disabled={disabledSearch}
              onClick={() => downloadXlsx(address)}
            >
              Download
            </Button>
          </div>
        </div>
      )}

      <Modal isOpen={isOpen} onOpenChange={() => {}} className="card-theme">
        <ModalContent>
          {(onClose) => (
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalHeader className="flex flex-col gap-1">
                <h2 className="text-md font-bold text-white">
                  Modo Importação
                </h2>
                <p className="text-xs font-light">
                  Escolha o arquivo das rotas, para carregar os endereços.
                </p>
              </ModalHeader>
              <Divider />

              <ModalBody className="flex flex-col gap-4">
                <MyDropzone setValue={setValue} onDrop={onDrop} files={files} />

                <div className="flex pt-2 gap-1">
                  <Info className="stroke-purple-600 h-5 w-5" />
                  <p className="text-xs mt-[2px]">
                    Certifique-se o arquivo selecionado, é mesmo o arquivo com
                    os endereços das rotas.
                  </p>
                </div>
              </ModalBody>
              <ModalFooter>
                <div className="flex w-full gap-2">
                  <Button
                    variant="clear"
                    type="button"
                    iconLeft={<ArrowLeft className="h-4 w-4" />}
                    onClick={onClose}
                  >
                    Voltar
                  </Button>
                  <Button
                    type="submit"
                    disabled={!files[0]}
                    isLoading={isLoading}
                    loadingText="Processando"
                    iconLeft={<Upload className="w-4 h-4" />}
                  >
                    Processar
                  </Button>
                </div>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export { FormFile };
