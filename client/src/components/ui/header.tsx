import React from 'react';
import { Button } from './button';
import { Link } from '@tanstack/react-router';

export default function Header() {
   return (
      <div className="fixed top-0 left-0 right-0 w-full bg-black p-4 flex items-start">
         <Button variant="link" className="text-white">
            <Link to="/">Home</Link>
         </Button>
         <Button variant="link" className="text-white">
            <Link to="/chat">Chat</Link>
         </Button>
      </div>
   );
}
