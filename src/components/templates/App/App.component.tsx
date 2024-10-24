import Head from 'next/head';
import { observer } from 'mobx-react';
import { ReactNode } from 'react';
import { useInjection } from 'inversify-react';

import { AppController } from '@app/app.controller';

export const AppTemplate = observer(({ children }: { children?: ReactNode }) => {
  const { title } = useInjection(AppController);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        {children}
      </div>
    </>
  );
});
