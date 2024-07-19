import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Providers } from './providers';



export const metadata = {
  title: 'Welcome to Acme',
  description: 'From Vercel@Labs',
}


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
