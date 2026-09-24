interface ProductCardProps {
  title: string;
  description: string;
  image?: string;
}

export function ProductCard({
  title,
  description,
  image,
}: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100">
        {image ? (
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-neutral-300">
                <span className="text-xl text-neutral-400">+</span>
              </div>

              <span className="text-xs text-neutral-400">
                Imagen del producto
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-neutral-900">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-neutral-600">
          {description}
        </p>

        <button className="mt-6 text-sm font-semibold text-red-600 transition-colors hover:text-red-700">
          Conoce más →
        </button>
      </div>
    </article>
  );
}