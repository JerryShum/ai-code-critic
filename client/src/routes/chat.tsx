import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/ui/featureCard';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/chat')({
   component: Chat,
});

function Chat() {
   return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
         <section className="flex flex-col items-center mb-20">
            <div className="text-center mb-12 max-w-4xl ">
               <h1 className="text-6xl font-black mb-4 leading-20">
                  Welcome to Your AI Code Critic 🤖
               </h1>
               <p className="text-xl text-gray-600 font-medium tracking-wide">
                  Tired of manual reviews? Ready to refine your code with the
                  power of artificial intelligence? Our Simple ai_code_critic is
                  here to help you write cleaner, more efficient, and more
                  maintainable code, faster.
               </p>
            </div>

            <Button className="bg-blue-600 rounded-full p-6 text-lg hover:bg-blue-700">
               Get Started
            </Button>
         </section>

         <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-800 text-transparent bg-clip-text">
               What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               <FeatureCard
                  title="Style & Readability"
                  description="Get feedback on adherence to best practices, naming conventions, and overall code clarity. Stop fighting about semicolons and start discussing architecture."
               />
               <FeatureCard
                  title="Efficiency & Performance"
                  description="Pinpoint potential bottlenecks and receive suggestions for optimization, ensuring your application runs smoothly under any load."
               />
               <FeatureCard
                  title="Best Practice Adherence"
                  description="Identify common anti-patterns, security vulnerabilities, and logical errors before they make it to production."
               />
               <FeatureCard
                  title="Instant Feedback Loop"
                  description="Paste your code and receive actionable, context-aware critiques in seconds. No more waiting for a teammate to wake up!"
               />
            </div>
         </section>

         <section className="mb-20 text-center">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-800 text-transparent bg-clip-text">
               How It Works
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
               <p className="max-w-2xl">
                  <span className="font-bold">1. Paste Your Code:</span> Drop
                  your Python, JavaScript, Java, or other supported code snippet
                  into our editor.
               </p>
               <p className="max-w-2xl">
                  <span className="font-bold">2. Analyze Instantly:</span> Our
                  custom AI model processes your input against millions of lines
                  of expertly-vetted code.
               </p>
               <p className="max-w-2xl">
                  <span className="font-bold">3. Receive Your Critique:</span>{' '}
                  Get a clear, categorized list of suggestions, along with
                  explanations of why the change is recommended.
               </p>
            </div>
         </section>

         <footer className="text-center">
            <h2 className="text-3xl font-bold mb-4">Get Started in Seconds!</h2>
            <p className="text-xl mb-8">
               Ready to level up your development game? Start using the Simple
               Code Critic AI today. Just paste your first snippet and see the
               difference. No sign-up required.
            </p>
         </footer>
      </div>
   );
}

export default Chat;
