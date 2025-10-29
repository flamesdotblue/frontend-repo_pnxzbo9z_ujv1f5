import { CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-rose-600" />
              New Drops: Spring Performance Collection
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Elevate your training with pro-grade gear
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-prose">
              Premium equipment, supplements, and apparel curated by athletes. Built to last. Priced to win.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" /> Free shipping over $75</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" /> 30-day hassle-free returns</li>
              <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" /> Athlete-tested, gym-proof</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#gear" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-2.5 text-white font-medium shadow hover:bg-black">
                Shop Bestsellers
              </a>
              <a href="#about" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-2.5 text-gray-800 font-medium bg-white hover:bg-gray-50">
                Learn More
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517341720772-11699adb5b0d?q=80&w=1600&auto=format&fit=crop"
                alt="Gym gear display"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
