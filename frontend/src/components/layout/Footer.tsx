import { ChevronDown } from "lucide-react"

import grupoSalinas from "../../assets/logo-grupo-salinas.svg"
import esrLogo from "../../assets/logo-esr 5.svg"


export function Footer() {
  return (
    <footer className="w-full mt-12">

      {/* ===== Parte oscura (la que ya tenías) ===== */}
      <div className="w-full bg-[#2e3032] flex flex-col items-center py-8 text-white">
        <p className="text-[20px] mb-4">¿Necesitas información personalizada?</p>
        <div className="flex gap-72 w-full items-center justify-center">
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[15px]">Unidad Especializada</p>
            <p className="underline">55 1720 7272</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[15px]">Línea Azteca</p>
            <p className="underline">55 5447 8810</p>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <p className="font-bold text-[15px]">Nuestras sucursales</p>
            <p className="underline">VISÍTANOS</p>
          </div>
        </div>
      </div>

      {/* ===== Parte clara ===== */}
      <div className="w-full bg-[#f1f2f4] text-[#2e3032]">

        <div className="flex w-full">

          {/* Columnas de links */}
          <div className="flex-1">
            <div className="grid grid-cols-[1.1fr_0.8fr_1fr_1.3fr] border-b border-gray-300 px-10 pt-6 pb-3">
              <p className="flex items-center gap-2 text-[17px] font-bold">Conócenos <ChevronDown size={16} color="#17a54d" /></p>
              <p className="flex items-center gap-2 text-[17px] font-bold">Comunicación <ChevronDown size={16} color="#17a54d" /></p>
              <p className="flex items-center gap-2 text-[17px] font-bold">Contacto <ChevronDown size={16} color="#17a54d" /></p>
              <p className="flex items-center gap-2 text-[17px] font-bold">Legal <ChevronDown size={16} color="#17a54d" /></p>
            </div>

            <div className="grid grid-cols-[1.1fr_0.8fr_1fr_1.3fr] px-10 pt-4 pb-8 text-[14px]">
              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-[#17a54d]">App de Banco Azteca</a>
                <a href="#" className="hover:text-[#17a54d]">Sobre Banco Azteca</a>
                <a href="#" className="hover:text-[#17a54d]">Información financiera</a>
                <a href="#" className="hover:text-[#17a54d]">Banca Empresarial Azteca</a>
                <a href="#" className="hover:text-[#17a54d]">Afore</a>
                <a href="#" className="hover:text-[#17a54d]">Uso de CoDi de Banco Azteca</a>
                <a href="#" className="hover:text-[#17a54d]">Trabaja con nosotros</a>
                <a href="#" className="hover:text-[#17a54d]">Grupo Salinas</a>
                <a href="#" className="hover:text-[#17a54d]">Sostenibilidad</a>
              </div>

              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-[#17a54d]">Noticias</a>
                <a href="#" className="hover:text-[#17a54d]">Sala de prensa</a>
                <a href="#" className="hover:text-[#17a54d]">Educación Financiera</a>
              </div>

              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-[#17a54d]">Contáctanos</a>
                <a href="#" className="hover:text-[#17a54d]">Aclaraciones</a>
                <a href="#" className="hover:text-[#17a54d]">Mapa de sucursales</a>
                <a href="#" className="hover:text-[#17a54d]">Facturación</a>
                <a href="#" className="hover:text-[#17a54d]">Cancelación de Banca Digital</a>
              </div>

              <div className="flex flex-col gap-3">
                <a href="#" className="hover:text-[#17a54d]">Términos y condiciones</a>
                <a href="#" className="hover:text-[#17a54d]">Aviso de privacidad</a>
                <a href="#" className="hover:text-[#17a54d]">Avisos Legales - Repositorio Histórico</a>
                <a href="#" className="hover:text-[#17a54d]">Ejerce tus derechos ARCO</a>
                <a href="#" className="hover:text-[#17a54d]">Programa de ética, integridad y cumplimiento</a>
                <a href="#" className="hover:text-[#17a54d]">Contratos</a>
                <a href="#" className="hover:text-[#17a54d]">Buró de entidades financieras</a>
                <a href="#" className="hover:text-[#17a54d]">Corresponsalías</a>
                <a href="#" className="hover:text-[#17a54d]">Adhesión al Código global de conducta</a>
                <a href="#" className="hover:text-[#17a54d]">Contrato de servicios financieros</a>
                <a href="#" className="hover:text-[#17a54d]">Despachos de cobranza</a>
              </div>
            </div>
          </div>

          {/* Columna derecha: redes + logos */}
          <div className="w-[360px] shrink-0 pr-6">

            <div className="flex items-center justify-end gap-8 pt-4">
              <img src={grupoSalinas} alt="Grupo Salinas" className="h-14 w-auto" /> 
              <img src={esrLogo} alt="Empresa Socialmente Responsable" className="h-14 w-auto" /> 
            </div>
          </div>
        </div>

        {/* Descarga la App */}
        <div className="border-t border-gray-300 flex flex-col items-end px-10 py-6">
          <p className="text-[20px] font-medium mb-4 pr-2">Descarga la App de Banco Azteca:</p>
          <div className="flex gap-8">
            <a href="#" className="flex items-center gap-2 bg-[#2e3032] text-white rounded-md px-4 py-2 hover:bg-black transition">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinejoin="round">
                <path d="M4 3l16 9-16 9V3z" />
                <path d="M4 3l10 10M4 21l10-10" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px]">Disponible en</span>
                <span className="text-[16px] font-medium">Google Play</span>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 bg-[#2e3032] text-white rounded-md px-4 py-2 hover:bg-black transition">
              <svg width="20" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M16.37 12.6c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-2.99-.79-1.54.02-2.96.9-3.75 2.27-1.6 2.78-.41 6.89 1.15 9.14.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.39-.92-2.4-3.66zM14.1 5.86c.63-.77 1.06-1.83.94-2.89-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.76-.96 2.8 1.02.08 2.05-.52 2.68-1.28z" />
              </svg>
              <div className="flex flex-col leading-tight">
                <span className="text-[10px]">Consíguelo en el</span>
                <span className="text-[16px] font-medium">App Store</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}