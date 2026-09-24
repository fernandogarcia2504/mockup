export function Hero() {
  return (
    <section className="relative overflow-hidden bg-neutral-100">
      <div className="mx-auto grid min-h-[560px] max-w-7xl grid-cols-1 items-center lg:grid-cols-2">
        {/* Content */}
        <div className="px-6 py-16 lg:px-8 lg:py-24">
          <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-wide text-red-600">
            Banco Azteca
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
            Soluciones financieras para ti
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-neutral-600">
            Encuentra productos y servicios diseñados para ayudarte a alcanzar
            tus objetivos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-full bg-red-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-700">
              Conoce más
            </button>

            <button className="rounded-full border border-neutral-300 bg-white px-7 py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-50">
              Ver productos
            </button>
          </div>
        </div>

        {/* Image placeholder */}
        <div className="flex h-full min-h-[360px] items-center justify-center bg-neutral-200">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-neutral-400">
              <span className="text-2xl text-neutral-400">+</span>
            </div>

            <p className="text-sm font-medium text-neutral-500">
              Hero image
            </p>

            <p className="mt-1 text-xs text-neutral-400">
              Agrega tu imagen aquí
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}