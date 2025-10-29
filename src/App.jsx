import { useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import { Minus, Plus, X } from "lucide-react";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]); // [{id, name, price, qty}]

  const total = useMemo(
    () => cart.reduce((sum, i) => sum + i.price * i.qty, 0),
    [cart]
  );

  const count = useMemo(() => cart.reduce((n, i) => n + i.qty, 0), [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);
      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: Math.min(p.qty + 1, 99) } : p
        );
      }
      return [...prev, { id: product.id, name: product.name, price: product.price, qty: 1 }];
    });
  };

  const inc = (id) => setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.min(p.qty + 1, 99) } : p)));
  const dec = (id) =>
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: Math.max(p.qty - 1, 0) } : p))
        .filter((p) => p.qty > 0)
    );
  const removeItem = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar cartCount={count} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <ProductGrid onAdd={addToCart} />

        <section id="supplements" className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Fuel your performance</h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Clean, effective formulas to power your training — without the crash.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Electrolyte Hydration", desc: "Sugar-free hydration with sea minerals", price: 24 },
                { name: "Creatine Monohydrate", desc: "5g per serving, lab tested", price: 19 },
                { name: "Omega-3 Softgels", desc: "1,000mg EPA/DHA per serving", price: 22 },
              ].map((s) => (
                <div key={s.name} className="rounded-xl border border-gray-200 bg-white p-5 text-left shadow-sm">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-semibold">{s.name}</h3>
                    <span className="text-sm font-bold">${s.price}</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
                  <button onClick={() => addToCart({ id: s.name.toLowerCase(), name: s.name, price: s.price })} className="mt-4 inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-1.5 text-white text-sm font-medium hover:bg-black">
                    Add to cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30" onClick={() => setCartOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
              <h3 className="text-lg font-semibold">Your Cart</h3>
              <button onClick={() => setCartOpen(false)} className="p-2 rounded-md hover:bg-gray-50" aria-label="Close cart">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="h-[calc(100%-10rem)] overflow-y-auto px-5 py-4">
              {cart.length === 0 ? (
                <p className="text-sm text-gray-600">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item) => (
                    <li key={item.id} className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">${item.price} each</p>
                        <div className="mt-2 inline-flex items-center gap-2 rounded-md border border-gray-200">
                          <button className="px-2 py-1 hover:bg-gray-50" onClick={() => dec(item.id)} aria-label="Decrease">
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2 text-sm font-medium">{item.qty}</span>
                          <button className="px-2 py-1 hover:bg-gray-50" onClick={() => inc(item.id)} aria-label="Increase">
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${(item.price * item.qty).toFixed(2)}</p>
                        <button className="mt-2 text-sm text-rose-600 hover:text-rose-700" onClick={() => removeItem(item.id)}>
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Subtotal</span>
                <span className="text-lg font-bold">${total.toFixed(2)}</span>
              </div>
              <button
                disabled={cart.length === 0}
                className="mt-4 w-full rounded-md bg-gray-900 px-4 py-2.5 text-white font-semibold hover:bg-black disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}

export default App;
