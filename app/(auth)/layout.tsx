export default function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-brand-blue-50 via-white to-brand-orange-50">
      <div className="flex min-h-screen items-center justify-center px-6 py-12">
        {children}
      </div>
    </main>
  );
}
