import { inject, injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

import { Config, ConfigToken } from '@app/common/services/config/config.interface';

@injectable()
export class AppController {
  title = '';

  constructor(
    @inject(ConfigToken)
    config: Config,
  ) {
    makeAutoObservable(
      this,
      {},
      {
        autoBind: true,
      },
    );
    this.title = `Pokemon APP - ${config.environment}`;
  }
}
