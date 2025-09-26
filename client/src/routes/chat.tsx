import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/chat')({
   component: Chat,
});

function Chat() {
   return (
      <div className="flex flex-col items-center justify-center min-h-screen">
         <h1 className="text-5xl font-black">Chat</h1>
         <p className="text-2xl font-bold">This page is under construction</p>
         <p className="text-2xl font-bold">Please come back later.</p>
      </div>
   );
}

export default Chat;
