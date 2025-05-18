const LoadingSkeleton = () => {
  return (
    <div className="w-full p-4 space-y-4 animate-pulse" role="status" aria-label="Loading content">
      {/* Header skeleton */}
      <div className="h-6 bg-gray-300 rounded-md w-1/3 sm:w-1/4" />

      {/* Rows skeleton */}
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="h-5 bg-gray-200 rounded-md w-full"
        />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
