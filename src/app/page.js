import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold">Implemented Pages</h1>
      <ul className="flex gap-2 text-center">
        <Link passHref className="hover:underline" href="/login">
          <li>Login</li>
        </Link>
        <Link passHref className="hover:underline" href="/dashboard">
          <li>Dashboard Overview</li>
        </Link>
        <Link passHref className="hover:underline" href="/dashboard/students">
          <li>Students</li>
        </Link>
        <Link passHref className="hover:underline" href="/404">
          <li>404</li>
        </Link>
      </ul>
    </main>
  );
}
