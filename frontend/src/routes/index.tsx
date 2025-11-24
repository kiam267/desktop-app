import {
  createFileRoute,
  Link,
} from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  return (
    <main className="flex items-center justify-center h-screen flex-col bg-sky-700 text-white">
      <h2 className="">Hey 🎉</h2>
      <p> —— Me kiam </p>
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
