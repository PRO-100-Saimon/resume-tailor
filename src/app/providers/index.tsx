import { ReactNode } from 'react';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

import { MaterialUIProvider } from './MaterialUI';

interface AppProvidersProps {
  children: ReactNode;
  session?: Session | null;
}

export const AppProviders = ({ children, session }: AppProvidersProps) => {
  const SessionProviderComponent = SessionProvider as React.ComponentType<{
    children: ReactNode;
    session?: Session | null;
  }>;

  return (
    <SessionProviderComponent session={session}>
      <MaterialUIProvider>{children}</MaterialUIProvider>
    </SessionProviderComponent>
  );
};
