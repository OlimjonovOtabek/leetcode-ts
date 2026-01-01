export const isDebug = (): boolean => process.env.DEBUG === 'true';

export const debug = (...args: unknown[]): void => {
  if (isDebug()) {
    console.log('[DEBUG]', ...args);
  }
};
