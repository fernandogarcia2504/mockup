export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 border-b border-neutral-800 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex h-10 w-40 items-center justify-center border border-neutral-700">
            <span className="text-xs text-neutral-500">
              LOGO
            </span>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              Aviso de privacidad
            </a>

            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              Términos y condiciones
            </a>

            <a href="#" className="text-sm text-neutral-400 hover:text-white">
              Contacto
            </a>
          </div>
        </div>

        <p className="pt-8 text-sm text-neutral-500">
          © {new Date().getFullYear()} Banco Azteca. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}