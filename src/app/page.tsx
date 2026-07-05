import MenuBar from '@/components/MenuBar';
import Desktop from '@/components/Desktop';
import NotificationToast from '@/components/NotificationToast';

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <MenuBar />
      <Desktop />
      <NotificationToast />
    </main>
  );
}