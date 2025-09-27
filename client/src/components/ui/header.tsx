import React from 'react';
import { Button } from './button';
import { Link } from '@tanstack/react-router';
import github from '@/assets/github-mark.svg';

export default function Header() {
   const routes = [
      { route: 'Home', path: '/' },
      { route: 'Chat', path: '/chat' },
      { route: 'AI Code Critic', path: '/ai' },
      { route: 'Review', path: '/ai/review' },
   ];
   return (
      <div className=" top-0 left-0 right-0 w-full p-4 px-10 flex justify-between items-center ">
         <div>
            <h1 className="text-2xl font-bold">ai_code_critic</h1>
         </div>
         <div className="flex gap-8">
            {routes.map((route) => (
               <Button variant="link" key={route.path} className="text-black">
                  <Link to={route.path} className="text-[16px]">
                     {route.route}
                  </Link>
               </Button>
            ))}

            <a
               href="https://github.com/JerryShum/ai-code-critic"
               target="_blank"
               rel="noopener"
               className="pl-1 cursor-pointer"
            >
               <img
                  src={github}
                  className="w-8  h-8 cursor-pointer"
                  alt="github logo"
               />
            </a>
         </div>
      </div>
   );
}
