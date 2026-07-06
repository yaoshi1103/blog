import MenuBar from '@/components/MenuBar';
import Desktop from '@/components/Desktop';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <MenuBar />
      <Desktop />
    </main>
  );
}