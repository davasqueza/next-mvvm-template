import { ConsoleLoggerService } from '@app/common/services/logger/console-logger.service';

describe('ConsoleLoggerService', () => {
  let consoleLoggerService: ConsoleLoggerService;
  const consoleMock = {
    debug: jest.spyOn(console, 'debug'),
    error: jest.spyOn(console, 'error'),
    info: jest.spyOn(console, 'info'),
    warn: jest.spyOn(console, 'warn'),
  };

  beforeAll(() => {
    consoleLoggerService = new ConsoleLoggerService();
  });

  it('should create a Logger service based on Console', async () => {
    const message = 'test';
    const metadata = {};

    expect(() => consoleLoggerService.debug(message, metadata)).not.toThrow();
    expect(consoleMock.debug).toBeCalledWith(message, metadata);
    expect(() => consoleLoggerService.error(message, metadata)).not.toThrow();
    expect(consoleMock.error).toBeCalledWith(message, metadata);
    expect(() => consoleLoggerService.info(message, metadata)).not.toThrow();
    expect(consoleMock.info).toBeCalledWith(message, metadata);
    expect(() => consoleLoggerService.warn(message, metadata)).not.toThrow();
    expect(consoleMock.warn).toBeCalledWith(message, metadata);
  });
});
