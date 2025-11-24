import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex items-center justify-center h-screen flex-col bg-sky-700 text-white">
      <h2 className="">Hey 🎉</h2>
      <p> It's a About Page</p>
      <Link
        to="/"
        className="hover:underline transition duration-75"
      >
        {' '}
        Let's go to make someting !!
      </Link>
    </main>
  );
}
