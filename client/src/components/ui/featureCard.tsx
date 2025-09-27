import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
   title: string;
   description: string;
}

export default function FeatureCard({ title, description }: FeatureCardProps) {
   return (
      <Card className="hover:scale-[102%] transition-all duration-300">
         <CardHeader>
            <CardTitle className=" text-2xl">{title}</CardTitle>
         </CardHeader>
         <CardContent>
            <p className="text-lg">{description}</p>
         </CardContent>
      </Card>
   );
}
