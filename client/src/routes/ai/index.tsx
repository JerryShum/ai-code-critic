import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/ai/')({
   component: RouteComponent,
});

function RouteComponent() {
   return <div>This is the AI Route</div>;
}
