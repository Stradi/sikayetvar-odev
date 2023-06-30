export default function Layout({ children }) {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-gradient-to-bl from-amber-300 to-amber-500">
      {children}
    </main>
  );
}
