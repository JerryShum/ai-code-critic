import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ai/review')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/ai/review"!</div>
}
