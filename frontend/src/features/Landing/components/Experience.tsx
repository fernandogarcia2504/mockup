import afore from "../../../assets/logo-afore-azteca.webp"
import seguros from "../../../assets/logo-seguros-azteca.webp"
import presta from "../../../assets/logo-presta-prenda.webp"

import star from "../../../assets/icons/star.svg"

export default function Experience() {
    return(
        <div className="w-full flex flex-col items-center">
            <p className="font-bold text-[22px]">Banco Azteca tiene el servicio que necesitas. Presente, futuro y proteccion</p>
            <div className="w-full flex justify-between mt-8 px-12">
                <img src={presta} alt="" />
                <img src={afore} alt="" />
                <img src={seguros} alt="" />
            </div>

            <p className="font-bold text-[25px] mt-16 mb-4">Califica tu experiencia en nuestro sitio.</p>
            <p className="text-gray-400">Tu opinion es muy valiosa para nosotros: nos ayuda a brindarte un mejor servicio.</p>

            <div className="flex gap-4 items-center justify-center w-full mt-10">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>

            <div className="flex w-full items-center justify-center">
                <button className="bg-[#17a54d] w-[15%] rounded-[70px] py-2 font-bold text-white text-[25px] mt-10">Continuar</button>
            </div>
        </div>
    )

}