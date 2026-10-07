import type { ReactNode } from 'react';
import './style.css';

export const metadata = {
  title: 'DMly',
  description: 'Instagram replies for Indian creators and sellers.',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
