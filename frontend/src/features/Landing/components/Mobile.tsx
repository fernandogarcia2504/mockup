import phone from "../../../assets/app-qr.webp"

import qrIcon from "../../../assets/icons/qr.svg"
import remesas from "../../../assets/icons/divisas2.svg"
import servicios from "../../../assets/icons/payment.svg"
import compra from "../../../assets/icons/compra.svg"

export default function Mobile () {
    return (
        <div className="w-full grid grid-cols-1 lg:grid-cols-[38%_1fr] items-center gap-8 mt-16 pr-6 lg:pr-24">

            <div className="relative h-[300px] lg:h-[360px]">
                <div className="absolute left-0 right-0 top-[8%] bottom-[6%] rounded-r-full bg-[linear-gradient(200deg,#5fae7c_0%,#3f8f5f_45%,#2a6a4a_100%)]"></div>
                <img
                    src={phone}
                    alt="App Banco Azteca pago con QR"
                    className="absolute top-0 bottom-0 left-[15%] h-full w-auto object-contain drop-shadow-xl"
                />
            </div>

            <div className="flex flex-col px-6 lg:px-0 ">
                <h2 className="text-[22px] font-bold text-neutral-800">Con la App de Banco Azteca la vida es más sencilla:</h2>
                <p className="mt-3 text-[15px] text-neutral-700">todas tus operaciones bancarias están disponibles siempre.</p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8 max-w-[560px] self-center">

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-[#17a54d] shadow-[0_3px_8px_rgba(0,0,0,0.15)]">
                            <img src={qrIcon} alt="" className="w-7 h-7 brightness-0 invert" />
                        </div>
                        <span className="text-[13px] font-bold leading-tight text-center max-w-[110px] text-[#17a54d]">PAGO CON QR</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15)]">
                            <img src={remesas} alt="" className="w-7 h-7 grayscale opacity-40" />
                        </div>
                        <span className="text-[13px] font-bold leading-tight text-center max-w-[110px] text-neutral-300">COBRO Y ENVÍO DE REMESAS</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15)]">
                            <img src={servicios} alt="" className="w-7 h-7 grayscale opacity-40" />
                        </div>
                        <span className="text-[13px] font-bold leading-tight text-center max-w-[110px] text-neutral-300">PAGO DE SERVICIOS</span>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center bg-white shadow-[0_3px_8px_rgba(0,0,0,0.15)]">
                            <img src={compra} alt="" className="w-7 h-7 grayscale opacity-40" />
                        </div>
                        <span className="text-[13px] font-bold leading-tight text-center max-w-[110px] text-neutral-300">COMPRA Y VENTA DE DIVISAS</span>
                    </div>

                </div>

                <p className="mt-8 text-[15px] text-neutral-700">Ya no tienes que cargar con efectivo, puedes pagar con un código QR desde la App; es muy fácil y seguro.</p>

                <a href="#" className="mt-4 self-end text-[15px] font-bold text-[#1a8a43] hover:underline">
                    CONOCE CÓMO &raquo;
                </a>
            </div>


        </div>
    )
}