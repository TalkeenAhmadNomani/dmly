import { z } from 'zod';

const urlWithProtocol = (protocols: string[]) =>
  z
    .string()
    .url()
    .refine((value) => {
      const parsed = URL.parse(value);
      return parsed !== null && protocols.includes(parsed.protocol);
    });
const schema = z
  .object({
    NODE_ENV: z
      .enum(['development', 'test', 'production'])
      .default('development'),
    APP_URL: z.string().url(),
    DATABASE_URL: urlWithProtocol(['postgres:', 'postgresql:']),
    REDIS_URL: urlWithProtocol(['redis:', 'rediss:']),
    AUTH_SECRET: z.string().min(32),
    TOKEN_ENC_KEY: z.string().regex(/^[a-fA-F0-9]{64}$/),
    META_APP_ID: z.string().min(1),
    META_APP_SECRET: z.string().min(1),
    META_VERIFY_TOKEN: z.string().min(16),
    META_GRAPH_VERSION: z.string().regex(/^v\d+\.\d+$/),
    META_COMMENT_WINDOW_SECONDS: z.coerce.number().int().positive(),
    META_MESSAGE_WINDOW_SECONDS: z.coerce.number().int().positive(),
    META_SENDS_PER_SECOND: z.coerce.number().positive(),
    SEND_ENABLED: z
      .enum(['true', 'false'])
      .default('false')
      .transform((v) => v === 'true'),
  })
  .superRefine((env, ctx) => {
    if (
      env.NODE_ENV === 'production' &&
      URL.parse(env.APP_URL)?.protocol !== 'https:'
    ) {
      ctx.addIssue({
        code: 'custom',
        path: ['APP_URL'],
        message: 'HTTPS required in production',
      });
    }
  });

/** Report field names only: Zod error details must never expose secret values. */
export function readEnv(input: Record<string, string | undefined>) {
  const parsed = schema.safeParse(input);
  if (!parsed.success) {
    const fields = [
      ...new Set(parsed.error.issues.map((issue) => issue.path.join('.'))),
    ];
    throw new Error(`Invalid configuration fields: ${fields.join(', ')}`);
  }
  return parsed.data;
}
