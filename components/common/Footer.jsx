import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, ShieldCheck, Truck, RefreshCw, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-luxe-dark text-white pt-16 pb-8 border-t border-rose-950">
      
      {/* Value Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-luxe-rose/20 text-luxe-rose flex items-center justify-center mb-3">
              <Truck className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg">Worldwide Express Shipping</h4>
            <p className="text-gray-400 text-xs mt-1">Free express delivery on all orders over $199</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-luxe-gold/20 text-luxe-gold flex items-center justify-center mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg">100% Virgin Hair Guarantee</h4>
            <p className="text-gray-400 text-xs mt-1">Ethically sourced, unprocessed human hair</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-luxe-rose/20 text-luxe-rose flex items-center justify-center mb-3">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h4 className="font-serif font-bold text-lg">Hassle-Free Returns</h4>
            <p className="text-gray-400 text-xs mt-1">30-day easy exchanges & money-back policy</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Brand Info */}
        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center mx-auto sm:mx-0 rounded-full bg-white/10 p-1.5 sm:p-2 border border-white/15 shadow-inner w-16 h-16 sm:w-20 sm:h-20 md:w-22 md:h-22 overflow-hidden">
            <Image
              src="/images/logo.png"
              alt="VERSATILE BY VERSHA' Logo"
              width={280}
              height={80}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-luxe-gold font-serif text-sm font-semibold italic">
            "One Woman. Every Look."
          </p>
          <p className="text-gray-400 text-xs leading-relaxed">
            Crown your confidence with luxury virgin hair wigs & HD Swiss lace closures designed to deliver ultimate elegance and style.
          </p>
          <div className="flex justify-center sm:justify-start gap-3 pt-2">
            <a href="https://www.instagram.com/versaceversha?igsh=NXUzbGVwM2g1bWZ5" target="_blank" className="min-w-[44px] min-h-[44px] rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-luxe-rose hover:text-white transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.threads.com/@versaceversha" target="_blank" className="min-w-[44px] min-h-[44px] rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-luxe-rose hover:text-white transition-colors" aria-label="Threads">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M14.25 5.25c-1.5 0-2.75 1.25-2.75 2.75v8c0 .55-.45 1-1 1s-1-.45-1-1v-8c0-2.62 2.13-4.75 4.75-4.75S18.75 5.38 18.75 8v8c0 .55-.45 1-1 1s-1-.45-1-1V8c0-1.5-1.25-2.75-2.75-2.75h.25zM7.25 9.25c-1.5 0-2.75 1.25-2.75 2.75v2c0 1.5 1.25 2.75 2.75 2.75S10 15.5 10 14v-2c0-1.5-1.25-2.75-2.75-2.75z"/>
              </svg>
            </a>
            <a href="https://www.tiktok.com/@versace_versha?_r=1&_t=ZS-98Tb1a1Z1S4" target="_blank" className="min-w-[44px] min-h-[44px] rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-luxe-rose hover:text-white transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col justify-center items-center md:items-start w-full">
          <h4 className="font-serif text-xl font-bold text-white mb-4 border-b border-luxe-rose/40 pb-2 inline-block ">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-luxe-rose transition-colors">Home</Link></li>
            <li><Link href="/shop" className="hover:text-luxe-rose transition-colors">Shop All Wigs</Link></li>
            <li><Link href="/shop?category=bundles" className="hover:text-luxe-rose transition-colors">Bundle Deals</Link></li>
            <li><Link href="/cart" className="hover:text-luxe-rose transition-colors">Shopping Cart</Link></li>
            <li><Link href="/login" className="hover:text-luxe-rose transition-colors">My Account</Link></li>
          </ul>
        </div>



      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
        <p>© {new Date().getFullYear()} VERSATILE BY VERSHA'. All Rights Reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-gray-300">Terms of Service</Link>
          <Link href="/privacy-policy#cookies" className="hover:text-gray-300">Cookie Settings</Link>
        </div>
      </div>
    </footer>
  );
}
