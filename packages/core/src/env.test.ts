import { describe, expect, it } from 'vitest';
import { readEnv } from './env';

const valid = {
  APP_URL: 'http://localhost:3000',
  DATABASE_URL: 'postgres://test:test@localhost/dmly',
  REDIS_URL: 'redis://localhost:6379',
  AUTH_SECRET: 'a'.repeat(32),
  TOKEN_ENC_KEY: 'b'.repeat(64),
  META_APP_ID: 'fixture',
  META_APP_SECRET: 'fixture-secret',
  META_VERIFY_TOKEN: 'x'.repeat(16),
  META_GRAPH_VERSION: 'v99.0',
  META_COMMENT_WINDOW_SECONDS: '600',
  META_MESSAGE_WINDOW_SECONDS: '300',
  META_SENDS_PER_SECOND: '1',
};

describe('TRD 12 / NFR-004 environment boundary', () => {
  it('keeps sending disabled by default', () =>
    expect(readEnv(valid).SEND_ENABLED).toBe(false));
  it('requires production HTTPS', () =>
    expect(() => readEnv({ ...valid, NODE_ENV: 'production' })).toThrow(
      'APP_URL',
    ));
  it('accepts production HTTPS', () =>
    expect(
      readEnv({
        ...valid,
        NODE_ENV: 'production',
        APP_URL: 'https://example.com',
      }).NODE_ENV,
    ).toBe('production'));
  it.each([
    'AUTH_SECRET',
    'TOKEN_ENC_KEY',
    'META_GRAPH_VERSION',
    'META_COMMENT_WINDOW_SECONDS',
    'META_MESSAGE_WINDOW_SECONDS',
    'META_SENDS_PER_SECOND',
    'DATABASE_URL',
    'REDIS_URL',
  ])('rejects invalid %s without leaking input', (key: string) => {
    expect(() =>
      readEnv({ ...valid, [key]: 'sensitive-invalid-value' }),
    ).toThrow(key);
    try {
      readEnv({ ...valid, [key]: 'sensitive-invalid-value' });
    } catch (error) {
      expect(String(error)).not.toContain('sensitive-invalid-value');
    }
  });
  it('does not treat false as truthy', () =>
    expect(readEnv({ ...valid, SEND_ENABLED: 'false' }).SEND_ENABLED).toBe(
      false,
    ));
  it('requires a configured window', () =>
    expect(() =>
      readEnv({ ...valid, META_MESSAGE_WINDOW_SECONDS: undefined }),
    ).toThrow('META_MESSAGE_WINDOW_SECONDS'));
});
