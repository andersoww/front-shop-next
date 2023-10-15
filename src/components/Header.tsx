"use client";

import { ClientOnly } from "@/components/ClientOnly";
import { Text } from "@/components/Text";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { deleteCookie, getCookie } from "cookies-next";
import { LogOut, Settings } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

function HeaderHome() {
  const name = getCookie("name");
  const { push } = useRouter();

  const logoutSign = useCallback(() => {
    deleteCookie("token");
    deleteCookie("name");
    push("/sign");
  }, [push]);

  return (
    <div className="h-[90px] w-full bg-purple-700 p-4 flex flex-col">
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-semibold">Início</h1>

        <Popover>
          <PopoverTrigger>
            <Settings />
          </PopoverTrigger>
          <PopoverContent>
            <div
              className="flex items-center gap-4 p-2"
              onClick={() => logoutSign()}
            >
              <LogOut className="h-4 w-4" />
              <Text>Sair</Text>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center">
        <ClientOnly>
          <Text className="font-medium">{name}</Text>
        </ClientOnly>
      </div>
    </div>
  );
}

export { HeaderHome };
