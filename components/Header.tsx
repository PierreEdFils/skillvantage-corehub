"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const primaryLink = NAV_LINKS.find((link) => link.primary);
  const navLinks = NAV_LINKS.filter((link) => !link.primary);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-gray-100 transition-all duration-300",
        scrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-white/90 backdrop-blur"
      )}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center px-4 py-3 lg:px-6">
        <div className="hidden w-full grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 md:grid">
          <div className="flex min-w-0 justify-self-start pr-4">
            <Link
              href="/"
              aria-label="SkillVantage CoreHub home"
              onClick={() => setMobileOpen(false)}
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
          </div>

          <nav className="flex items-center justify-center gap-7 justify-self-center">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(`${link.href}/`));

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "whitespace-nowrap text-sm transition",
                    active
                      ? "font-semibold text-brand-orange-500"
                      : "text-gray-600 hover:text-gray-900"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex min-w-0 justify-self-end pl-4">
            {primaryLink ? (
              <Link
                href={primaryLink.href}
                onClick={() => setMobileOpen(false)}
                className="whitespace-nowrap rounded-full bg-brand-orange-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-orange-200 transition hover:bg-brand-orange-600"
              >
                {primaryLink.label}
              </Link>
            ) : null}
          </div>
        </div>

        <Link
          href="/"
          aria-label="SkillVantage CoreHub home"
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 -translate-y-1 items-center gap-1.5 sm:gap-2 md:hidden"
        >
          <Image
            src="/skillvantage_logo.png"
            alt="SkillVantage Enterprise"
            width={585}
            height={239}
            priority
            className="h-10 w-auto object-contain sm:h-12"
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

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          <div className="space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "block rounded-2xl px-3 py-2 text-sm transition",
                  link.primary
                    ? "bg-brand-orange-500 text-center font-semibold text-white"
                    : pathname === link.href
                      ? "bg-brand-orange-50 font-semibold text-brand-orange-600"
                      : "text-gray-700 hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
