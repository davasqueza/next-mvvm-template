import { BindingScopeEnum, Container } from 'inversify';
import { Provider } from 'inversify-react';
import { useRouter } from 'next/router';

import { AppController } from '@app/app.controller';
import { AppTemplate } from '@components/templates';
import { AxiosHttpService, HttpServiceToken } from '@app/common/services/http';
import { ConfigToken } from '@app/common/services/config';
import { ConsoleLoggerService, LoggerServiceToken } from '@app/common/services/logger';
import { NextRouterToken } from '@app/common/services/router';
import { useConfig, useObservable } from '@app/common/hooks';

export function AppModule({ children }) {
  const router = useRouter();
  const observableRouter = useObservable(router);
  const publicRuntimeConfig = useConfig();
  return (
    <Provider
      container={() => {
        const container = new Container({ defaultScope: BindingScopeEnum.Singleton });
        container.bind(AppController).toSelf();
        container.bind(ConfigToken).toConstantValue(publicRuntimeConfig);
        container.bind(NextRouterToken).toConstantValue(observableRouter);
        container.bind(LoggerServiceToken).to(ConsoleLoggerService);
        container.bind(HttpServiceToken).to(AxiosHttpService);
        return container;
      }}
    >
      <AppTemplate>{children}</AppTemplate>
    </Provider>
  );
}
