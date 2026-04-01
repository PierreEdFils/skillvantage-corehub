"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't show navbar on dashboard routes
  if (pathname?.startsWith("/dashboard")) return null;

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-100",
        scrolled
          ? "bg-white shadow-sm"
          : "bg-white"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-2 py-3 sm:px-4 lg:px-5">
        <Link
          href="/"
          aria-label="SkillVantage CoreHub home"
          className="flex shrink-0 -translate-y-1 items-center gap-1.5 sm:gap-2 lg:-ml-2"
        >
          <Image
            src="/skillvantage_logo.png"
            alt="SkillVantage Enterprise"
            width={585}
            height={239}
            priority
            className="h-10 w-auto object-contain sm:h-12 lg:h-14"
          />
          <span className="relative inline-flex pb-1 text-brand-orange-500">
            <span className="text-[1.7rem] font-black uppercase leading-none tracking-[-0.05em] sm:text-[1.95rem]">
              CORE
            </span>
            <span className="absolute bottom-[0.16rem] right-[-1.48rem] text-[0.82rem] font-extrabold leading-none sm:bottom-[0.18rem] sm:right-[-1.68rem] sm:text-[0.92rem]">
              Hub
            </span>
            <span className="absolute right-[-2.02rem] top-[0.08rem] text-[0.44rem] font-bold leading-none sm:right-[-2.28rem] sm:top-[0.1rem] sm:text-[0.5rem]">
              TM
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-6 pl-16 lg:pl-20">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "whitespace-nowrap text-sm transition",
                pathname === link.href
                  ? "text-brand-orange-500 font-semibold"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3 self-center">
          <Link
            href="/login"
            className="whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-gray-900"
          >
            Log in
          </Link>
          <Button size="sm" asChild>
            <Link href="/signup">Get Started Free</Link>
          </Button>
          <Button variant="outline" size="sm" asChild className="hidden lg:inline-flex">
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 md:hidden"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-gray-700 hover:text-brand-orange-500 py-2"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <Link href="/login" className="block text-sm text-gray-700 py-2">
              Log in
            </Link>
            <Button fullWidth size="sm" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
