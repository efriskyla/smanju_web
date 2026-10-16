import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'SMAN 1 Juwana',
  description: 'Website Resmi SMAN 1 Juwana',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}