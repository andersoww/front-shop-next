import { Divider } from "@/components/Divider";
import { Text } from "@/components/Text";
import { TextInput } from "@/components/TextInput";
import { DoorOpen, MessagesSquare, Search } from "lucide-react";

export default function Home() {
  const routes = [
    {
      name: "Rota - 01",
      description: "Rota 26 - Morro Agudo",
      stops: 66,
      packages: 101,
    },
    {
      name: "Rota - 02",
      description: "Rota 27 - Bebedouro",
      stops: 70,
      packages: 90,
    },
    {
      name: "Rota - 03",
      description: "Rota 28 - Orlândia",
      stops: 70,
      packages: 90,
    },
    {
      name: "Rota - 03",
      description: "Rota 28 - Orlândia",
      stops: 70,
      packages: 90,
    },
    {
      name: "Rota - 03",
      description: "Rota 28 - Orlândia",
      stops: 70,
      packages: 90,
    },
  ];

  return (
    <div className="h-screen w-full">
      <div className="flex flex-col gap-4 p-4 h-[15%]">
        <div>
          <h1 className="text-xl font-bold">Inicio</h1>
        </div>
        <div className="">
          <TextInput.Root>
            <TextInput.Content>
              <TextInput.Icon>
                <Search />
              </TextInput.Icon>
              <TextInput.Input placeholder="Pesquise uma rota..." />
            </TextInput.Content>
          </TextInput.Root>
        </div>
      </div>

      <div className="flex flex-col gap-4 p-4 h-[70%]">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-semibold">Últimas 5 rotas</h1>

          <Text className="text-purple-600 font-medium">Adicionar Rota</Text>
        </div>

        <div className="flex gap-3 flex-col max-h-[400px] overflow-auto">
          {routes.map((route, index) => {
            return (
              <div key={index} className="card-theme p-4">
                <Text>{route.name}</Text>
                <Text>{route.description}</Text>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Ajuda</h1>
          </div>
          <div className="card-theme h-[100px]" />
        </div>
      </div>
      <Divider />

      <div className="p-4 flex flex-col gap-4 h-[15%] justify-end">
        <div className="flex items-center gap-2">
          <MessagesSquare className="h-5 w-5" />
          <Text>Suporte</Text>
        </div>
        <div className="flex items-center gap-2">
          <DoorOpen className="h-5 w-5" />
          <Text>Sair</Text>
        </div>
      </div>
    </div>
  );
}
