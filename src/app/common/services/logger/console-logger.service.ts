/* eslint-disable class-methods-use-this, no-console */
import { injectable } from 'inversify';
import { LoggerService } from './logger.interface';

@injectable()
export class ConsoleLoggerService implements LoggerService {
  debug(message: string, metadata: Record<string, unknown>): void {
    console.debug(message, metadata);
  }

  error(message: string, metadata: Record<string, unknown>): void {
    console.error(message, metadata);
  }

  info(message: string, metadata: Record<string, unknown>): void {
    console.info(message, metadata);
  }

  warn(message: string, metadata: Record<string, unknown>): void {
    console.warn(message, metadata);
  }
}
