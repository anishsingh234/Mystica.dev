import Navbar from "@/components/Navbar";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0a0f] pt-28 mb-20 px-4">
      <Navbar />
      <div className="w-full max-w-7xl">
        {children}
      </div>
    </main>
  );
}