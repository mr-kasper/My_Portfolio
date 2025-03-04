import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rachid | Frontend Developer Portfolio',
  description:
    'Frontend developer specializing in React, Next.js, and TypeScript. Explore my projects, skills, and professional experience in creating responsive and intuitive web applications.',
  keywords: [
    'frontend developer',
    'React developer',
    'Next.js',
    'TypeScript',
    'web development',
    'portfolio',
    'UI/UX',
    'responsive design',
  ],
  authors: [{ name: 'Rachid' }],
  creator: 'Rachid',
  publisher: 'Rachid',
  formatDetection: {
    email: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
