import { describe, expect, it } from "vitest";

import { trustedClientIp } from "./client-ip";

const headers = (values: Record<string, string>) => new Headers(values);

describe("trustedClientIp", () => {
  it("uses Vercel's own header on Vercel", () => {
    const h = headers({ "x-vercel-forwarded-for": "198.51.100.7, 10.0.0.1", "x-forwarded-for": "203.0.113.9" });
    expect(trustedClientIp(h, { VERCEL: "1" })).toBe("198.51.100.7");
  });

  it("uses only the configured host header on DigitalOcean, ignoring spoofable ones", () => {
    const h = headers({
      "do-connecting-ip": "198.51.100.20",
      "x-vercel-forwarded-for": "6.6.6.6",
      "x-forwarded-for": "7.7.7.7",
    });
    expect(trustedClientIp(h, { TRUSTED_CLIENT_IP_HEADER: "do-connecting-ip" })).toBe("198.51.100.20");
  });

  it("returns nothing on DigitalOcean when the host header is missing, instead of trusting the visitor", () => {
    const h = headers({ "x-vercel-forwarded-for": "6.6.6.6", "x-forwarded-for": "7.7.7.7" });
    expect(trustedClientIp(h, { TRUSTED_CLIENT_IP_HEADER: "do-connecting-ip" })).toBeUndefined();
  });

  it("falls back to x-forwarded-for when no host is configured", () => {
    expect(trustedClientIp(headers({ "x-forwarded-for": "203.0.113.9, 10.0.0.1" }), {})).toBe("203.0.113.9");
  });

  it("rejects values that are not IPs", () => {
    expect(trustedClientIp(headers({ "do-connecting-ip": "not-an-ip" }), { TRUSTED_CLIENT_IP_HEADER: "do-connecting-ip" })).toBeUndefined();
  });
});
