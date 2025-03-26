export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-[#fbd784]/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-[#fbd784] rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-white text-lg">Loading...</p>
      </div>
    </div>
  );
}
