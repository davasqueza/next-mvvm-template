import { interfaces } from 'inversify';
import { NextRouter } from 'next/dist/shared/lib/router/router';

export const NextRouterToken: interfaces.ServiceIdentifier<NextRouter> = Symbol('NextRouter');
