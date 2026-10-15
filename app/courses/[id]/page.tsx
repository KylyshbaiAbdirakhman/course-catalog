import { getCourse } from '@/lib/courses';
import LikeButton from '@/components/LikeButton';
import EnrollForm from '@/components/EnrollForm'; // 1. Импортируем компонент формы
import Link from 'next/link';
import { notFound } from 'next/navigation';

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function CoursePage({ params }: PageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <Link href="/courses" className="text-blue-600 hover:underline text-sm mb-6 inline-block font-medium">
        ← Назад к списку курсов
      </Link>

      <div className="bg-white border rounded-2xl p-8 shadow-sm">
        <div className="flex justify-between items-start mb-4">
          <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
          {course.isElective && (
            <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
              Электив
            </span>
          )}
        </div>

        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{course.description}</p>

        <div className="flex items-center justify-between border-t pt-6">
          <span className="text-gray-700 font-medium">
            Кредиты: <strong className="text-gray-900">{course.credits}</strong>
          </span>

          <LikeButton courseId={course.id} initialLikes={course.likes} />
        </div>
      </div>

      {/* 2. Добавляем форму записи под карточкой курса */}
      <div className="mt-8">
        <EnrollForm courseId={course.id} />
      </div>
    </main>
  );
}