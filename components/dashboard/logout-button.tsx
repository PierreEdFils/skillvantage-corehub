"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/login")}
      className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
    >
      <LogOut className="h-5 w-5" />
      Log out
    </button>
  );
}
