'use client';

import { useState } from 'react';

type Course = {
  likes: number;
};

type LikeButtonProps = {
  courseId: string;
  initialLikes: number;
};

const API = process.env.NEXT_PUBLIC_API_URL;

export default function LikeButton({ courseId, initialLikes }: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleLike() {
    setIsLoading(true);
    try {
      const res = await fetch(`${API}/courses/${courseId}/like`, { 
        method: "POST" 
      });

      if (!res.ok) throw new Error("fail");

      const course: Course = await res.json();
      setLikes(course.likes); // Берем число с сервера, а не likes + 1
    } catch (err) {
      console.error("Ошибка при отправке лайка:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={isLoading}
      className="px-4 py-2 bg-red-50 text-red-600 border border-red-200 rounded-lg hover:bg-red-100 transition font-medium flex items-center gap-2 cursor-pointer disabled:opacity-50"
    >
      ❤️ <span>{likes}</span>
    </button>
  );
}