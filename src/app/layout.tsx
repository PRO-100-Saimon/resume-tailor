import type { Metadata } from 'next';

import { Providers } from '@/app/providers/Providers';

export const metadata: Metadata = {
  title: 'Адаптация резюме',
  description: 'Сервис для адаптации резюме с помощью ИИ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
