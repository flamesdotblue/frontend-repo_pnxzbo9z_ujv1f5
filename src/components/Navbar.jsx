import { ShoppingCart, Activity, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ cartCount, onCartClick }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-to-tr from-rose-600 to-orange-500 text-white shadow-sm">
              <Activity className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">IronPeak Gym Shop</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#gear" className="text-gray-600 hover:text-gray-900">Gear</a>
            <a href="#supplements" className="text-gray-600 hover:text-gray-900">Supplements</a>
            <a href="#apparel" className="text-gray-600 hover:text-gray-900">Apparel</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onCartClick}
              className="relative inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-800 hover:bg-gray-50 active:scale-[.98]"
            >
              <ShoppingCart className="h-4 w-4" />
              <span>Cart</span>
              {cartCount > 0 && (
                <span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-rose-600 px-1 text-xs font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm">
              <a href="#gear" className="rounded-md px-3 py-2 hover:bg-gray-50">Gear</a>
              <a href="#supplements" className="rounded-md px-3 py-2 hover:bg-gray-50">Supplements</a>
              <a href="#apparel" className="rounded-md px-3 py-2 hover:bg-gray-50">Apparel</a>
              <a href="#about" className="rounded-md px-3 py-2 hover:bg-gray-50">About</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
