import navLogo from "../../assets/logo-banco-azteca.jpeg"

import { LockKeyholeOpen } from "lucide-react";
import { Plus } from "lucide-react";

export function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full flex flex-col bg-white shadow-sm">
        <div className="w-full flex items-center justify-between px-12 py-3">
          
          <img className="w-72 h-auto" src={navLogo} alt="" />
          <div className="flex gap-2 items-center pr-6">
            <div>
              <button className="bg-[#17a54d] rounded-[70px] font-bold text-white text-xs px-4 py-1">PIDE TU PRESTAMO</button>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex gap-2 items-center">
                <LockKeyholeOpen color="#17a54d" />
                <p className="text-xs font-bold">Ingresar</p>
              </div>

              <Plus color="#17a54d" />
            </div>
          </div>

        </div>

        <div className="w-full flex items-center justify-center bg-[#17a54d] py-4 gap-8">
          <h1 className="font-bold text-white text-[19px]">PERSONAS</h1>
          <h1 className="font-bold text-white text-[19px]">EMPRESAS</h1>
        </div>
    </div>
  );
}