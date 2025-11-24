import React from 'react';
import {
  NavLink,
  type NavLinkRenderProps,
} from 'react-router'; // ✅ use react-router-dom
import { Album, HouseHeart } from 'lucide-react';

const LINKS = [
  { to: '/', icon: HouseHeart, label: 'Home' },
  { to: '/about', icon: Album, label: 'About' },
];

function Header() {
  return (
    <div
      className="fixed bottom-5 left-1/2 transform -translate-x-1/2
                 px-8 py-4 z-10 bg-white/20 backdrop-blur-md border border-white/30
                 rounded-xl shadow-lg"
    >
      <div className="flex justify-center items-center gap-6 w-11/12">
        {LINKS.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }: NavLinkRenderProps) =>
              `rounded-lg p-2 flex items-center justify-center transition-all duration-200
               ${
                 isActive
                   ? 'bg-sky-500 text-white'
                   : 'border text-sky-400 '
               }`
            }
          >
            <span className="sr-only">{label}</span>
            <Icon className="w-6 h-6" />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Header;
