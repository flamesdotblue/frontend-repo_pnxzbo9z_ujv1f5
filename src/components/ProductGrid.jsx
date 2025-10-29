import { Star } from "lucide-react";

const products = [
  {
    id: "kettlebell",
    name: "Competition Kettlebell 16kg",
    price: 89,
    rating: 4.7,
    tag: "Gear",
    image:
      "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "whey",
    name: "Whey Protein Isolate 2lb",
    price: 49,
    rating: 4.6,
    tag: "Supplements",
    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "strap",
    name: "Neoprene Lifting Straps",
    price: 19,
    rating: 4.5,
    tag: "Gear",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "leggings",
    name: "Seamless Performance Leggings",
    price: 39,
    rating: 4.8,
    tag: "Apparel",
    image:
      "https://images.unsplash.com/photo-1571731956672-a88a0d51ba63?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "preworkout",
    name: "Clean Energy Pre-Workout",
    price: 32,
    rating: 4.4,
    tag: "Supplements",
    image:
      "https://images.unsplash.com/photo-1516054575922-c48f2f66ed88?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "jumprope",
    name: "Speed Jump Rope",
    price: 15,
    rating: 4.3,
    tag: "Gear",
    image:
      "https://images.unsplash.com/photo-1596357395104-5b6dbdb93b33?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function ProductGrid({ onAdd }) {
  return (
    <section id="gear" className="py-14 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Bestsellers
            </h2>
            <p className="mt-1 text-gray-600">Handpicked favorites from athletes and coaches.</p>
          </div>
          <a href="#" className="text-sm font-medium text-rose-600 hover:text-rose-700">View all</a>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="group rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-rose-700 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded-full">
                    {p.tag}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{p.rating}</span>
                  </div>
                </div>
                <h3 className="mt-2 font-semibold text-gray-900">{p.name}</h3>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold">${p.price}</span>
                  <button
                    onClick={() => onAdd(p)}
                    className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-1.5 text-white text-sm font-medium hover:bg-black active:scale-[.98]"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
