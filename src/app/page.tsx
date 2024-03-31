import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-zinc-900 min-h-screen container mx-auto">
      <h1 className="text-primary">PMS</h1>
      <h2>Home Page</h2>
      <Link className="underline" href="/planets">
        Go to planets
      </Link>
    </main>
  );
}
