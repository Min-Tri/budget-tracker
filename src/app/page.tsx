
import dynamic from "next/dynamic";
const HomeContainer = dynamic(() => import("@/feat/home"));


export default function Home() {
  return (
    <div className="grid grid-rows-[8px_1fr_8px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full px-2 gap-8 row-start-2 items-center sm:items-start">
        <HomeContainer />
      </main>
    </div>
  );
}
