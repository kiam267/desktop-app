import { Link } from 'react-router';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    {
      name: 'description',
      content: 'Welcome to React Router!',
    },
  ];
}

import {
  Users,
  Zap,
  Trophy,
  MessageCircle,
  Gamepad2,
  ArrowRight,
} from 'lucide-react';

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen flex-col">
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
