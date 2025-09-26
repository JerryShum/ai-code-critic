import { Button } from '@/components/ui/button';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
   component: () => (
      <>
         <div className="fixed top-0 left-0 right-0 w-full bg-black p-8 flex items-start">
            <Button variant="link" className="text-white">
               <Link to="/">Home</Link>
            </Button>
            <Button variant="link" className="text-white">
               <Link to="/chat">Chat</Link>
            </Button>
         </div>
         <Outlet />
         <TanStackRouterDevtools />
      </>
   ),
});
