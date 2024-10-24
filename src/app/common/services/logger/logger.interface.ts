import { interfaces } from 'inversify';

export interface LoggerService {
  info(message: string, metadata?: Record<string, unknown>): void;
  warn(message: string, metadata?: Record<string, unknown>): void;
  error(message: string, metadata?: Record<string, unknown>): void;
  debug(message: string, metadata?: Record<string, unknown>): void;
}

export const LoggerServiceToken: interfaces.ServiceIdentifier<LoggerService> = Symbol('LoggerService');
