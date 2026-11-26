// Image loader for next/image (wired up in next.config.ts).
//
// Resizing images on our own server crashed the 512 MB DigitalOcean instance, so it never does it:
// - With NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME set, images go through Cloudinary "fetch": Cloudinary pulls
//   the original from the live site once, then serves resized copies (best format per browser) from its CDN.
// - Without it, the original file is served as-is from /public (already WebP and small).
//
// NEXT_PUBLIC_ values are inlined at build time, so changing the cloud name needs a rebuild.

const SITE_ORIGIN = "https://www.sheepiesleep.com";

type LoaderProps = { src: string; width: number; quality?: number };

export function buildImageUrl(
  { src, width, quality }: LoaderProps,
  cloudName: string | undefined = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
): string {
  // Remote or inline images are left alone.
  if (!src.startsWith("/")) return src;

  const cloud = cloudName?.trim();
  if (!cloud) return `${src}?w=${width}`;

  const transforms = ["f_auto", quality ? `q_${quality}` : "q_auto", "c_limit", `w_${width}`].join(",");
  return `https://res.cloudinary.com/${cloud}/image/fetch/${transforms}/${encodeURI(`${SITE_ORIGIN}${src}`)}`;
}

export default function imageLoader(props: LoaderProps): string {
  return buildImageUrl(props);
}
