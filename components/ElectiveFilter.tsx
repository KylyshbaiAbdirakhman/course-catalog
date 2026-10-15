"use client";

import { useState } from "react";
import useSWR from "swr";
import type { Course } from "@/lib/courses";

const API = process.env.NEXT_PUBLIC_API_URL;

async function fetcher(url: string): Promise<Course[]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export default function ElectiveFilter() {
  const [onlyElective, setOnlyElective] = useState(false);
  const query = onlyElective ? "?is_elective=true" : "";
  const { data, error, isLoading } = useSWR(`${API}/courses${query}`, fetcher);

  return (
    <div>
      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={onlyElective}
          onChange={(e) => setOnlyElective(e.target.checked)}
        />
        Только электив
      </label>

      {error && <p className="text-red-600">Не удалось загрузить курсы</p>}
      {isLoading && <p>Загрузка…</p>}
      {data && (
        <ul className="list-disc pl-6">
          {data.map((c) => (
            <li key={c.id}>
              {c.title} — {c.credits} кр.
              {c.isElective && " · электив"}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}