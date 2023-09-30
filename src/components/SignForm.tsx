"use client";

import { Button } from "@/components/Button";
import { TextInput } from "@/components/TextInput";
import { sessions } from "@/services/session";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { setCookie } from "cookies-next";

const schema = z.object({
  email: z.string().nonempty("E-mail é obrigatório"),
  password: z.string().nonempty("Senha é obrigatório"),
});

type SignFormSchema = z.infer<typeof schema>;

function SignForm() {
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SignFormSchema>({ resolver: zodResolver(schema) });

  const onSubmit = useCallback(
    async (data: SignFormSchema) => {
      setIsLoading(true);

      const response = await sessions(data);

      if (response.data && response.result === "success") {
        setCookie("token", response.data.token);
        push("/import");
      }

      setIsLoading(false);
    },
    [push]
  );

  return (
    <form
      className="p-4 w-full flex flex-col gap-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput.Label description="Usuário:" className="col-span-full">
        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Icon>
              <User className="w-4 h-4" />
            </TextInput.Icon>
            <TextInput.Input
              autoComplete="off"
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
          </TextInput.Content>
          <TextInput.Errors
            isInvalid={!!errors.email}
            description={errors.email?.message}
          />
        </TextInput.Root>
      </TextInput.Label>

      <TextInput.Label description="Senha:" className="col-span-full">
        <TextInput.Root>
          <TextInput.Content>
            <TextInput.Icon>
              <KeyRound className="w-4 h-4" />
            </TextInput.Icon>

            <TextInput.Input
              autoComplete="off"
              type="password"
              placeholder="********"
              {...register("password")}
            />
          </TextInput.Content>
          <TextInput.Errors
            isInvalid={!!errors.password}
            description={errors.password?.message}
          />
        </TextInput.Root>
      </TextInput.Label>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>
    </form>
  );
}

export { SignForm };
