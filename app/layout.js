import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.scss'
import BootstrapClient from '@/components/BootstrapClient.js';
export const metadata = {
  title: 'NextJS Course App',
  description: 'Your first NextJS app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="global">{children}</body>
      <BootstrapClient></BootstrapClient>
    </html>
  );
}
