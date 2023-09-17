import { FormFile } from "@/components/FormFile";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center bg-[#1D1D1F] p-4">
      <div className="border border-[#2C2C2F] rounded-lg shadow-md bg-[#252428] h-fit w-full mt-4 max-w-[600px]">
        <div className="p-4 flex flex-col">
          <h2 className="text-md font-bold text-white">Rotas da Shope</h2>
          <p className="text-xs font-light">
            Escolha o arquivo das rotas, para converter em uma planilha.
          </p>
        </div>
        <FormFile />
      </div>
    </div>
  );
}
