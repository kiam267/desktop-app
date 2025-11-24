import React from 'react';
import { Link } from 'react-router';

function about() {
  return (
    <main className="flex items-center justify-center h-screen flex-col">
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

export default about;
