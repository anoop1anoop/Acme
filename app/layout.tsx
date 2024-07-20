import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Providers } from './providers';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-lightbg text-black dark:bg-darkbg dark:text-white`}>
      <Providers>{children}</Providers>
      </body>
    </html>
  );
}
