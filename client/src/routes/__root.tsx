import Header from '@/components/ui/header';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
   component: () => (
      <>
         <Header />
         <Outlet />
         <TanStackRouterDevtools />
      </>
   ),
});
