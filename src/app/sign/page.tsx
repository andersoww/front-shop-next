import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { SignForm } from "@/components/SignForm";
import { Text } from "@/components/Text";
import { TextInput } from "@/components/TextInput";
import { KeyRound, User } from "lucide-react";
import Link from "next/link";

export default function Sign() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="card-theme w-[350px] h-fit ">
        <div className="p-3 flex flex-col gap-1">
          <h1 className="text-white text-xl font-bold">Login</h1>
          <Text size="md">Informe seus dados para acessar a plataforma.</Text>
        </div>
        <Divider />
        <SignForm />
        <Divider />
        <div className="flex justify-center w-full p-4 hover:underline">
          <Text>Esqueci minha senha</Text>
        </div>
      </div>
    </div>
  );
}
