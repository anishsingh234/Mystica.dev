import Navbar from "@/components/Navbar";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center -z-10 bg-[#0a0a0f] pt-24">
      <Navbar />
      {children}
    </main>
  );
}