import { Text } from "@/components/Text";
import { Home, MapPin, TrafficCone } from "lucide-react";
import Link from "next/link";

function Navigation() {
  return (
    <div className="w-full h-[70px] fixed bottom-0 z-50">
      <div className="w-full h-full bg-purple-700 shadow-md flex justify-center items-center p-6">
        <ul className="flex gap-4 w-full items-center justify-between">
          <Link href={{ pathname: "/" }}>
            <li className="flex flex-col items-center px-2 py-4 h-full w-full">
              <TrafficCone className="w-5 h-5" />
              <Text className="font-medium">Rotas</Text>
            </li>
          </Link>
          <Link href={{ pathname: "/home" }}>
            <li className="flex flex-col items-center p-1 h-full w-full">
              <Home className="w-5 h-5" />
              <Text className="font-medium">Início</Text>
            </li>
          </Link>
          <Link href={{ pathname: "/route" }}>
            <li className="flex flex-col items-center p-1 h-full w-full">
              <MapPin className="w-5 h-5" />
              <Text className="font-medium">Mapa</Text>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export { Navigation };
