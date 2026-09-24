export function Navbar() {
  return (
    <header className="w-full border-b border-neutral-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <div className="flex h-10 w-40 items-center justify-center">
          <span className="text-sm text-neutral-400">
            LOGO
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-red-600"
          >
            Productos
          </a>

          <a
            href="#"
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-red-600"
          >
            Servicios
          </a>

          <a
            href="#"
            className="text-sm font-medium text-neutral-700 transition-colors hover:text-red-600"
          >
            Ayuda
          </a>
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <button className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700">
            Banca en Línea
          </button>
        </div>

        {/* Mobile menu */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-lg">☰</span>
        </button>
      </div>
    </header>
  );
}