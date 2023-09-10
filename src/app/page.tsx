import { FormFile } from "@/components/FormFile";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center bg-[#1D1D1F] p-4">
      <div className="border border-[#2C2C2F] rounded-lg shadow-md bg-[#252428] h-fit w-full mt-4 max-w-[600px]">
        {/* Header */}
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-md font-medium text-white">Rotas da Shope</h2>
        </div>
        <FormFile />
      </div>
    </div>
  );
}
