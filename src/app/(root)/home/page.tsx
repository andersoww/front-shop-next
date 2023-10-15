import { HeaderHome } from "@/components/Header";
import { Text } from "@/components/Text";
import { Globe, Import, Search, TrafficCone } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const navigation = [
    {
      name: "Rotas",
      description: "Crie rotas para adicionar as entregas.",
      icon: <TrafficCone />,
    },

    {
      name: "Importação",
      description: "Acelere o cadastro de suas entregas.",
      icon: <Import />,
      to: "/import",
    },
    {
      name: "Mapa",
      description: "Visualize seus pontos de entregas.",
      icon: <Globe />,
    },
    {
      name: "Buscar o Cliente",
      description: "Localize seus clientes.",
      icon: <Search />,
    },
  ];

  return (
    <div className="h-full w-full">
      <HeaderHome />

      <div className="flex flex-col gap-4 p-4 h-[70%] z-20 absolute w-full">
        <div className="flex justify-between items-center"></div>

        <div className="flex gap-3 flex-col max-h-[400px] overflow-auto">
          {navigation.map((nav, index) => {
            return (
              <Link href={nav.to ? nav.to : "/home"} key={index}>
                <div className="card-theme p-4 flex items-center gap-4">
                  {nav.icon}

                  <div>
                    <h1 className="text-xl">{nav.name}</h1>
                    <Text>{nav.description}</Text>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
