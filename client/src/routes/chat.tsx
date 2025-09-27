import { Button } from '@/components/ui/button';
import FeatureCard from '@/components/ui/featureCard';
import StepCard from '@/components/ui/stepCard';
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/chat')({
   component: Chat,
});

const steps = [
   {
      title: 'Paste',
      description:
         'Drop your Python, JavaScript, Java, or other supported code snippet into our editor.',
      step: 1,
   },
   {
      title: 'Analyze Instantly',
      description:
         'Our custom AI model processes your input against millions of lines of expertly-vetted code.',
      step: 2,
   },
   {
      title: 'Receive Your Critique',
      description:
         'Get a clear, categorized list of suggestions, along with explanations of why the change is recommended.',
      step: 3,
   },
];

const features = [
   {
      title: 'Style & Readability',
      description:
         'Get feedback on adherence to best practices, naming conventions, and overall code clarity. Stop fighting about semicolons and start discussing architecture.',
   },
   {
      title: 'Efficiency & Performance',
      description:
         'Pinpoint potential bottlenecks and receive suggestions for optimization, ensuring your application runs smoothly under any load.',
   },
   {
      title: 'Best Practice Adherence',
      description:
         'Identify common anti-patterns, security vulnerabilities, and logical errors before they make it to production.',
   },
   {
      title: 'Instant Feedback Loop',
      description:
         'Paste your code and receive actionable, context-aware critiques in seconds. No more waiting for a teammate to wake up!',
   },
];

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
               <Link to="/ai">Get Started</Link>
            </Button>
         </section>

         <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-800 text-transparent bg-clip-text">
               What We Offer
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {features.map((feature) => (
                  <FeatureCard
                     key={feature.title}
                     title={feature.title}
                     description={feature.description}
                  />
               ))}
            </div>
         </section>

         <section className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-800 text-transparent bg-clip-text">
               How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
               {steps.map((step) => (
                  <StepCard
                     key={step.step}
                     title={step.title}
                     description={step.description}
                     step={step.step}
                  />
               ))}
            </div>
         </section>

         <footer className="text-center">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-indigo-800 text-transparent bg-clip-text">
               Get Started in Seconds!
            </h2>
            <p className="text-xl mb-8">
               Ready to level up your development game? Start using the Simple
               Code Critic AI today. Just paste your first snippet and see the
               difference. No sign-up required.
            </p>
            <Button className="bg-blue-600 rounded-full p-6 text-lg hover:bg-blue-700">
               <Link to="/ai">Get Started</Link>
            </Button>
         </footer>
      </div>
   );
}

export default Chat;
