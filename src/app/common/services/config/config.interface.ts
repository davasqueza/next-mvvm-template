import { interfaces } from 'inversify';

export enum Environment {
  PROD = 'prod',
  STAGE = 'stage',
  DEV = 'dev',
}
export interface Config {
  apiPath: string;
  imagesPath: string;
  environment: Environment;
}

export const ConfigToken: interfaces.ServiceIdentifier<Config> = Symbol('Config');
