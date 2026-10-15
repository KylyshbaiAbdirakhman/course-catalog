import Link from 'next/link';
import { Course } from '@/lib/courses';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CourseCard({ id, title, description, credits, isElective, likes }: Course) {
  return (
    <Link href={`/courses/${id}`}>
      <Card className="hover:shadow-md hover:border-blue-300 transition h-full">
        <CardHeader className="flex flex-row justify-between items-start space-y-0 pb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          {isElective && (
            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded font-medium ml-2">
              Электив
            </span>
          )}
        </CardHeader>
        
        <CardContent className="flex flex-col gap-3 pt-2">
          <p className="text-gray-600 text-sm">{description}</p>
          
          <div className="flex items-center justify-between mt-auto pt-4">
            <span className="text-sm font-medium text-gray-500">Credits: {credits}</span>
            <Button variant="ghost" size="sm">
              ❤️ {likes}
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}