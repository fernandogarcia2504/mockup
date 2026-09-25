import heroImage from "../../../assets/banner-prestamo-oso.webp"

import { LockKeyholeOpen } from "lucide-react";

export function Hero() {
  return (
    <div className="w-full flex flex-col lg:flex-row h-auto">
      <div className="w-full lg:w-1/2 relative overflow-hidden">
        <img src={heroImage} className="w-full h-auto block" alt="" />
        <div className="hidden lg:block absolute top-0 right-0 h-full w-24 bg-white rounded-l-[100%]" />
      </div>
      <div className="w-full lg:w-1/2 relative flex flex-col justify-center items-center lg:items-start px-4 pt-6 lg:px-0 lg:pt-0 lg:pl-8 gap-6">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-[20px] lg:text-[22px]">Ahora tu Prestamo te da mas y mas,</h1>
          <p className="text-gray-500">para su llegada</p>
        </div>
        <button className="rounded-[60px] bg-[#17a54d] px-12 py-2 text-white font-bold">CONOCE MAS</button>

        <div className="relative w-full lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-[20px] lg:top-full flex flex-col gap-3 lg:w-[55%]">
          <div className="bg-[#1d531c] rounded-[60px] flex justify-between py-2 lg:py-1 px-5 lg:px-6 items-center gap-3 lg:gap-0">
            <div className="flex gap-3 items-center lg:w-1/2">
              <LockKeyholeOpen color="#fff" className="shrink-0 lg:shrink" />
              <p className="text-white text-[14px] lg:text-[18px] leading-tight lg:leading-normal">Accede a tu banca en linea</p>
            </div>
            <h1 className="text-base lg:text-xl font-bold text-white">INGRESAR</h1>
          </div>
          <p className="font-bold text-[16px] lg:text-[19px] text-center">RECUPERA TU CONTRASENA</p>
        </div>
      </div>
    </div>
  );
}
