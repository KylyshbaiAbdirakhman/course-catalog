"use client";
export default function Error({ error, retry }: { error: Error; retry: () => void }) {
  return (
    <main className="p-6">
      <h1 className="mb-2 text-2xl font-bold">Something went wrong</h1>
      <button onClick={() => retry()}>Try again</button>
    </main>
  );
}