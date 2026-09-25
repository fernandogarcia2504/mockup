import prestamosIcon from "../../../assets/icons/prestamos.svg"
import divisasIcon from "../../../assets/icons/divisas.svg"
import inversionesIcon from "../../../assets/icons/inversiones.svg"
import nominaIcon from "../../../assets/icons/nomina.svg"
import remesasIcon from "../../../assets/icons/remesas.svg"
import cuentasIcon from "../../../assets/icons/cuentas.svg"

import tpremia from "../../../assets/tpremia-desktop.webp"
export function Products() {
  return (
    <div className="w-full flex flex-col px-32  pt-32">
      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="text-[25px] font-bold">Tus planes necesitan un gran inicio.</h1>
        <p className="text-gray-500">Permitenos ser la opcion que te acompañe en la construccion de tus sueños.</p>
      </div>
      <div className="flex justify-between items-start rounded-md shadow-lg w-full px-24 py-10 mt-6">
        <div className="flex flex-col gap-3 items-center w-24">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={prestamosIcon} alt="" className="max-w-full max-h-full object-contain" />
          </div>
          <p className="text-[15px] font-bold text-[#17a54d] text-center h-5">PRESTAMOS</p>
        </div>
        <div className="flex flex-col gap-3 items-center w-24">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={cuentasIcon} alt="" className="max-w-full max-h-full object-contain" />
          </div>
          <p className="text-[15px] font-bold text-[#17a54d] text-center h-5">CUENTAS</p>
        </div>
        <div className="flex flex-col gap-3 items-center w-24">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={nominaIcon} alt="" className="max-w-full max-h-full object-contain" />
          </div>
          <p className="text-[15px] font-bold text-[#17a54d] text-center h-5">MI NOMINA</p>
        </div>
        <div className="flex flex-col gap-3 items-center w-24">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={divisasIcon} alt="" className="max-w-full max-h-full object-contain" />
          </div>
          <p className="text-[15px] font-bold text-[#17a54d] text-center h-5">DIVISAS</p>
        </div>
        <div className="flex flex-col gap-3 items-center w-24">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={remesasIcon} alt="" className="max-w-full max-h-full object-contain" />
          </div>
          <p className="text-[15px] font-bold text-[#17a54d] text-center h-5">REMESAS</p>
        </div>
        <div className="flex flex-col gap-3 items-center w-24">
          <div className="w-12 h-12 flex items-center justify-center">
            <img src={inversionesIcon} alt="" className="max-w-full max-h-full object-contain" />
          </div>
          <p className="text-[15px] font-bold text-[#17a54d] text-center h-5">INVERSIONES</p>
        </div>
      </div>
      <div className="flex justify-between items-start rounded-md  mt-6">
        <img src={tpremia} className="w-full h-auto" alt="" />
      </div>
    </div>
  );
}