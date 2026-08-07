export function Stars({ rating, label }: { rating: number; label: string }) {
  return (
    <div className="flex gap-1 text-cta" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 2 L14.9 8.6 L22 9.3 L16.7 14.1 L18.2 21.2 L12 17.6 L5.8 21.2 L7.3 14.1 L2 9.3 L9.1 8.6 Z"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}
