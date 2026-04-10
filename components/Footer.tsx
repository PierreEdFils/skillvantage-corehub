import { Globe, MessageSquare, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "For Coaches", href: "/for-coaches" },
      { label: "For Professionals", href: "/for-professionals" },
      { label: "For Employers", href: "/for-employers" },
      { label: "Marketplace", href: "/marketplace" },
      { label: "Pricing", href: "/pricing" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Help Center", href: "/help-center" },
      { label: "API Docs", href: "/api-docs" },
      { label: "Webinars", href: "/webinars" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "/partners" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Security", href: "/security" },
      { label: "GDPR", href: "/gdpr" }
    ]
  }
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16 text-gray-600">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              aria-label="SkillVantage CoreHub home"
              className="mb-4 inline-flex items-center gap-3"
            >
              <Image
                src="/skillvantage_logo.png"
                alt="SkillVantage Enterprise"
                width={585}
                height={239}
                className="h-10 w-auto object-contain"
              />
              <span className="relative inline-flex pb-1 text-brand-orange-500">
                <span className="text-[1.6rem] font-black uppercase leading-none tracking-[-0.05em]">
                  CORE
                </span>
                <span className="absolute bottom-[0.15rem] right-[-1.4rem] text-[0.78rem] font-extrabold leading-none">
                  Hub
                </span>
                <span className="absolute right-[-1.92rem] top-[0.08rem] text-[0.42rem] font-bold leading-none">
                  TM
                </span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-gray-600">
              {SITE_CONFIG.description}
            </p>

            <div className="mt-4 flex gap-3">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <Link
                  key={social}
                  href="/demo"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
                  aria-label={social}
                >
                  <Globe className="h-4 w-4 text-gray-700" />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">{column.title}</h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition hover:text-gray-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm">
            © 2026 {SITE_CONFIG.name}. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              SOC2 Ready
            </span>
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              GDPR Compliant
            </span>
            <span className="flex items-center gap-1">
              <Shield className="h-3 w-3" />
              256-bit SSL
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="h-3 w-3" />
              24/7 Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
