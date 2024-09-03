import { Inter, Lexend } from 'next/font/google';
import './globals.css';

// Importing Inter and Lexend fonts
const inter = Inter({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'], weights: ['400', '500', '600', '700'] });

export const metadata = {
  title: 'Cyparta App',
  description: 'Cyparta Task',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${lexend.className}`}>
        {children}
      </body>
    </html>
  );
}
