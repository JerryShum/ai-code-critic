import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface StepCardProps {
   title: string;
   description: string;
   step: number;
}

export default function StepCard({ title, description, step }: StepCardProps) {
   return (
      <Card className="flex flex-col h-full bg-blue-100 p-4">
         <div className="flex-grow">
            <CardHeader className="p-0">
               <CardTitle className="text-start text-2xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
               <p className="text-start text-lg">{description}</p>
            </CardContent>
         </div>
         <div className="hidden md:block self-end">
            <p className="text-9xl opacity-25 font-semibold">{step}</p>
         </div>
      </Card>
   );
}
