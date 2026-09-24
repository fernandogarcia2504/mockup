import { ProductCard } from "./ProductCard";

const products = [
  {
    title: "Cuentas",
    description:
      "Encuentra una cuenta que se adapte a tus necesidades y administra tu dinero de manera sencilla.",
  },
  {
    title: "Tarjetas",
    description:
      "Conoce nuestras opciones de tarjetas y descubre los beneficios disponibles para ti.",
  },
  {
    title: "Préstamos",
    description:
      "Opciones de financiamiento para diferentes necesidades y proyectos.",
  },
  {
    title: "Inversiones",
    description:
      "Alternativas para hacer crecer tu dinero de acuerdo con tus objetivos.",
  },
];

export function Products() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-red-600">
            Productos
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            Encuentra lo que necesitas
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Conoce las diferentes opciones financieras disponibles.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.title}
              title={product.title}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}