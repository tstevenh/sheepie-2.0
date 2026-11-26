import { describe, expect, it } from "vitest";

import { buildImageUrl } from "./image-loader";

describe("buildImageUrl", () => {
  it("serves the original file when Cloudinary is not configured", () => {
    expect(buildImageUrl({ src: "/images/hero/a.webp", width: 640 }, undefined)).toBe("/images/hero/a.webp?w=640");
    expect(buildImageUrl({ src: "/images/hero/a.webp", width: 640 }, "  ")).toBe("/images/hero/a.webp?w=640");
  });

  it("routes local images through Cloudinary fetch with auto format and quality", () => {
    expect(buildImageUrl({ src: "/images/hero/a.webp", width: 1080 }, "sheepie")).toBe(
      "https://res.cloudinary.com/sheepie/image/fetch/f_auto,q_auto,c_limit,w_1080/https://www.sheepiesleep.com/images/hero/a.webp",
    );
  });

  it("passes an explicit quality through", () => {
    expect(buildImageUrl({ src: "/images/a.webp", width: 640, quality: 60 }, "sheepie")).toContain("f_auto,q_60,c_limit,w_640/");
  });

  it("encodes unsafe characters in the path", () => {
    expect(buildImageUrl({ src: "/images/my photo.webp", width: 640 }, "sheepie")).toMatch(/\/images\/my%20photo\.webp$/);
  });

  it("leaves remote images untouched", () => {
    expect(buildImageUrl({ src: "https://example.com/a.png", width: 640 }, "sheepie")).toBe("https://example.com/a.png");
  });
});
