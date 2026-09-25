import afore from "../../../assets/logo-afore-azteca.webp"
import seguros from "../../../assets/logo-seguros-azteca.webp"
import presta from "../../../assets/logo-presta-prenda.webp"

import star from "../../../assets/icons/star.svg"

export default function Experience() {
    return(
        <div className="w-full flex flex-col items-center px-4 lg:px-0">
            <p className="font-bold text-[18px] lg:text-[22px] text-center">Banco Azteca tiene el servicio que necesitas. Presente, futuro y proteccion</p>
            <div className="w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-0 justify-between mt-8 px-0 lg:px-12">
                <img src={presta} alt="" className="max-w-[240px] lg:max-w-none" />
                <img src={afore} alt="" className="max-w-[240px] lg:max-w-none" />
                <img src={seguros} alt="" className="max-w-[240px] lg:max-w-none" />
            </div>

            <p className="font-bold text-[20px] lg:text-[25px] mt-12 lg:mt-16 mb-4 text-center">Califica tu experiencia en nuestro sitio.</p>
            <p className="text-gray-400 text-center">Tu opinion es muy valiosa para nosotros: nos ayuda a brindarte un mejor servicio.</p>

            <div className="flex gap-3 lg:gap-4 items-center justify-center w-full mt-8 lg:mt-10">
                <img src={star} alt="" className="w-9 lg:w-auto" />
                <img src={star} alt="" className="w-9 lg:w-auto" />
                <img src={star} alt="" className="w-9 lg:w-auto" />
                <img src={star} alt="" className="w-9 lg:w-auto" />
                <img src={star} alt="" className="w-9 lg:w-auto" />
            </div>

            <div className="flex w-full items-center justify-center">
                <button className="bg-[#17a54d] w-[60%] sm:w-[40%] lg:w-[15%] rounded-[70px] py-2 font-bold text-white text-[20px] lg:text-[25px] mt-8 lg:mt-10">Continuar</button>
            </div>
        </div>
    )

}