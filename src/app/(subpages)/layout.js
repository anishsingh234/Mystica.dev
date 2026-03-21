import Navbar from "@/components/Navbar";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center -z-10 bg-[#0a0a0f]">
      <Navbar />
      {children}
    </main>
  );
}