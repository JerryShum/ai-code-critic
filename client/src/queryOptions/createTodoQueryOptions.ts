import { queryOptions } from '@tanstack/react-query';

function createTodoQueryOptions() {
   return queryOptions({
      queryKey: ['critic'],
      queryFn: getData,
   });
}

const getData = async (): Promise<Todo[]> => {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
   return await response.json();
};

type Todo = {
   userId: number;
   id: number;
   title: string;
   completed: boolean;
};

export default createTodoQueryOptions;
