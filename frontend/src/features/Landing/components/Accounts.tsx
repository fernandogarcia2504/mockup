import phoneImage from "../../../assets/guardadito-digital.webp"
import woman1Image from "../../../assets/somos.webp"
import woman2Image from "../../../assets/GSF-home.webp"

export function Accounts() {
    return(
        <div className="flex flex-col items-center w-full mt-6 px-6">
            <p className="text-[22px] font-bold text-center">Ya visualizaste tus sueños. Déjanos impulsarlos.</p>

            <div className="grid w-full max-w-[1100px] grid-cols-1 lg:grid-cols-[46%_1fr] gap-5 mt-10">

                <div className="relative h-[340px] lg:h-[380px] overflow-hidden rounded-3xl shadow-md bg-[radial-gradient(circle_at_60%_35%,#43a066_0%,#2f7d4c_45%,#1d5534_100%)]">
                    <img
                        src={phoneImage}
                        alt="Guardadito Digital"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[90%] w-auto object-contain"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-5 text-white">
                        <h3 className="text-xl lg:text-[22px] font-bold">Guardadito Digital</h3>
                        <p className="mt-1 text-sm lg:text-[15px] leading-snug">¿Quieres abrir tu primer cuenta de débito? Hazlo con nosotros, es muy fácil desde la App.</p>
                        <div className="mt-3 flex justify-end">
                            <a href="#" className="text-sm font-bold hover:underline">ABRE TU CUENTA &raquo;</a>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-5 lg:gap-0 lg:justify-between">

                    <div className="relative mt-8 lg:mt-6 h-[150px] rounded-3xl shadow-md bg-[linear-gradient(90deg,#1f8f55_0%,#17b36a_30%,#2a9a45_65%,#2f621c_100%)]">
                        <img
                            src={woman1Image}
                            alt="Somos Débito"
                            className="absolute bottom-0 left-4 lg:left-6 h-[130%] w-auto object-contain"
                        />
                        <div className="relative z-10 ml-auto w-[58%] h-full px-5 py-4 text-white flex flex-col justify-center">
                            <h3 className="text-lg lg:text-[22px] font-bold leading-tight">Somos Débito</h3>
                            <p className="mt-1 text-xs lg:text-[14px] leading-snug">Es nuestra cuenta de débito pensada especialmente para las mujeres. ¿Ya conoces sus beneficios?</p>
                            <a href="#" className="mt-2 self-end text-xs lg:text-sm font-bold hover:underline">CONÓCELA &raquo;</a>
                        </div>
                    </div>

                    <div className="relative h-[165px] overflow-hidden rounded-3xl shadow-md bg-[linear-gradient(90deg,#6aae2c_0%,#4e9a26_35%,#2f7a1c_70%,#1d5412_100%)]">
                        <img
                            src={woman2Image}
                            alt="Cuenta Guardadito Amigo Sin Fronteras"
                            className="absolute bottom-0 left-4 lg:left-6 h-[92%] w-auto object-contain"
                        />
                        <div className="relative z-10 ml-auto w-[58%] h-full px-5 py-4 text-white flex flex-col justify-center">
                            <h3 className="text-lg lg:text-[22px] font-bold leading-tight">Cuenta Guardadito Amigo Sin Fronteras</h3>
                            <p className="mt-1 text-xs lg:text-[14px] leading-snug">Recibe tu dinero del extranjero al instante y con beneficios pensados en ti.</p>
                            <a href="#" className="mt-2 self-end text-xs lg:text-sm font-bold hover:underline">CONÓCELA &raquo;</a>
                        </div>
                    </div>

                </div>
            </div>

            <p className="text-[#17a54d] font-bold text-[15px] mt-12">VER TODAS LAS CUENTAS</p>
        </div>
    )
}