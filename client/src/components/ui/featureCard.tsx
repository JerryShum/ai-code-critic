import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
   title: string;
   description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
   return (
      <Card className="hover:scale-[102%] transition-all duration-300">
         <CardHeader>
            <CardTitle className=" underline underline-offset-4">
               {title}
            </CardTitle>
         </CardHeader>
         <CardContent>
            <p>{description}</p>
         </CardContent>
      </Card>
   );
}
