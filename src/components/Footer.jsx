import { Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer id="about" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold">IronPeak Gym Shop</h3>
            <p className="mt-2 text-sm text-gray-600 max-w-prose">
              We outfit everyday athletes with gear that goes the distance. From strength training essentials to clean, effective supplements.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@ironpeak.fit</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 100 Strength Ave, Austin, TX</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Follow</h4>
            <div className="mt-3 flex gap-3 text-gray-700">
              <a href="#" aria-label="Instagram" className="p-2 rounded-md border border-gray-200 hover:bg-gray-50">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-md border border-gray-200 hover:bg-gray-50">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} IronPeak Fitness Co. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Shipping & returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
