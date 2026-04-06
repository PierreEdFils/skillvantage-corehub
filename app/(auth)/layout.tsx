export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-gradient-to-br from-brand-blue-50 via-white to-brand-orange-50 pt-24 transition-colors">
      <div className="flex min-h-[calc(100vh-10rem)] items-center justify-center px-6 py-12">
        {children}
      </div>
    </main>
  );
}
