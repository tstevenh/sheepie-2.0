import { isIP } from "node:net";

type HostEnv = { VERCEL?: string; TRUSTED_CLIENT_IP_HEADER?: string; [key: string]: string | undefined };

function firstIp(value: string | null): string | undefined {
  const first = value?.split(",")[0]?.trim();
  return first && isIP(first) ? first : undefined;
}

/**
 * The visitor's IP, read only from headers the hosting platform sets itself.
 *
 * - On Vercel (VERCEL is set), x-vercel-forwarded-for, which Vercel overwrites on every request.
 * - Elsewhere, set TRUSTED_CLIENT_IP_HEADER to the header the host overwrites
 *   (DigitalOcean App Platform: do-connecting-ip). Any other forwarding header is then ignored,
 *   because a visitor can send x-forwarded-for or x-vercel-forwarded-for with any value.
 * - With neither (local dev, tests), falls back to the first x-forwarded-for entry.
 */
export function trustedClientIp(headers: Headers, env: HostEnv = process.env): string | undefined {
  if (env.VERCEL) return firstIp(headers.get("x-vercel-forwarded-for")) ?? firstIp(headers.get("x-forwarded-for"));

  const trustedHeader = env.TRUSTED_CLIENT_IP_HEADER?.trim().toLowerCase();
  if (trustedHeader) return firstIp(headers.get(trustedHeader));

  return firstIp(headers.get("x-forwarded-for"));
}
