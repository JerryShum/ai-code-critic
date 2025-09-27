import createTodoQueryOptions from "@/queryOptions/createTodoQueryOptions";
import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ai/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { data, isPending } = useQuery(createTodoQueryOptions());
  // useSuspenseQuery is for when you need to use suspense component (the suspense component is the parent component of the query component)

  return (
    <div>
      <h1>AI Code Critic</h1>
      <p> PERSON 1: {data?.[0].userId}</p>
      <p>{isPending ? "Loading..." : JSON.stringify(data?.slice(0, 10))}</p>
    </div>
  );
}
