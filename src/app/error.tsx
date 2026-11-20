
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="loading-page">
      <h2>Terjadi Kesalahan</h2>
      <p>{error.message || "Maaf, terjadi kesalahan pada Dashboard RPS."}</p>
      <button onClick={() => reset()}>
        Coba Lagi
      </button>
    </main>
  );
}
