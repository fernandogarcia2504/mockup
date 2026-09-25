import heroImage from "../../../assets/banner-prestamo-oso.webp"

import { LockKeyholeOpen } from "lucide-react";

export function Hero() {
  return (
    <div className="w-full flex h-auto">
      <div className="w-1/2 relative overflow-hidden">
        <img src={heroImage} className="w-full h-auto block" alt="" />
        <div className="absolute top-0 right-0 h-full w-24 bg-white rounded-l-[100%]" />
      </div>
      <div className="w-1/2 relative flex flex-col justify-center items-start pl-8 gap-6">
        <div>
          <h1 className="font-bold text-[22px]">Ahora tu Prestamo te da mas y mas,</h1>
          <p className="text-gray-500">para su llegada</p>
        </div>
        <button className="rounded-[60px] bg-[#17a54d] px-12 py-2 text-white font-bold">CONOCE MAS</button>

        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-[20px] top-full flex flex-col gap-3 w-[55%]">
          <div className="bg-[#1d531c] rounded-[60px] flex justify-between py-1 px-6 items-center">
            <div className="flex gap-3 items-center w-1/2">
              <LockKeyholeOpen color="#fff" />
              <p className="text-white text-[18px]">Accede a tu banca en linea</p>
            </div>
            <h1 className="text-xl font-bold text-white">INGRESAR</h1>
          </div>
          <p className="font-bold text-[19px] text-center">RECUPERA TU CONTRASENA</p>
        </div>
      </div>
    </div>
  );
}