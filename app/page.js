import Link from 'next/link';
import Header from '@/components/header';

export default function Home() {
  console.log('Executing...');
  return (
    <main className="custom-main">
      <Header />
      <p className="global">🔥 Let&apos;s get started! 🔥</p>
      <p><span className="btn btn-primary"><Link href="/about">About Us</Link></span></p>
    </main>
  );
}
