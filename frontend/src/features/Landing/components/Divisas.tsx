import { Equal } from "lucide-react"

export default function Divisas() {
    return (
        <div className="w-full px-4 lg:px-0 lg:w-[80%] mt-12 lg:mt-16 mb-10">
            <div className="relative flex flex-col items-center justify-center rounded-md shadow-lg bg-white pt-8 pb-12 lg:pb-16">
                <p className="text-[20px] lg:text-[25px] font-medium text-center px-4">Calculadora de divisas</p>
                <p className="text-[15px] lg:text-[20px] text-[#2e3032] pt-3 text-center px-4">Usa el conversor de divisas para conocer el tipo de cambio hoy</p>
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0 lg:items-stretch justify-between mt-4 w-[88%] lg:w-[80%]">
                    <div className="flex flex-col items-center gap-4 py-8 px-3 w-full lg:w-[40%] shadow-xl border border-gray-100 rounded-md">
                        <div className="flex gap-3 items-center justify-center border-b w-full border-gray-200 px-4 py-1">
                            <p>Peso (Mexico)</p>
                        </div>
                        <p className="text-[#2e3032]">Cantidad que deseas cambiar</p>
                        <input type="text" className="border border-gray-300 rounded-md placeholder:text-center placeholder:font-bold w-full py-2" placeholder="Ingresa tu cantidad" />
                    </div>
                    <div className="flex items-center justify-center">
                        <Equal size={60} color="#17a54d" className="w-10 h-10 lg:w-[60px] lg:h-[60px]" />
                    </div>

                    <div className="flex flex-col items-center gap-4 py-8 px-3 w-full lg:w-[40%] shadow-xl border border-gray-100 rounded-md">
                        <div className="flex gap-3 items-center justify-center border-b w-full border-gray-200 px-4 py-1">
                            <p>Dolar (USA) Ventanilla</p>
                        </div>
                        <p className="text-[#2e3032]">Monto que recibes</p>
                        <p className="font-bold text-[25px]">$0.00</p>
                    </div>
                </div>

                <button className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-[#17a54d] w-1/4 min-w-[200px] rounded-[80px] text-white font-bold py-2 shadow-md">
                    COMPRA EN LA APP
                </button>
            </div>

            <p className="text-gray-500 text-sm lg:text-base mt-12 text-center">El tipo de cambio es informativo y sujeto a cambios en sucursal</p>
        </div>
    )
}