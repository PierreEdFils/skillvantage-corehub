import { Globe, Shield, MessageSquare } from "lucide-react";
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
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Case Studies", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "API Docs", href: "#" },
      { label: "Webinars", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "/contact" },
      { label: "Partners", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "#" },
      { label: "Security", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
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
            <p className="text-sm text-gray-500 leading-relaxed">
              {SITE_CONFIG.description.split(" ").slice(0, 12).join(" ")}...
            </p>
            <div className="flex gap-3 mt-4">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition"
                  title={social}
                >
                  <Globe className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-4 text-sm">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-white transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2025 {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" /> SOC2 Ready
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" /> GDPR Compliant
            </span>
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3" /> 256-bit SSL
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="w-3 h-3" /> 24/7 Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
