const DRIVE_PATTERNS: RegExp[] = [
  /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/,
  /drive\.google\.com\/open\?[^#]*\bid=([a-zA-Z0-9_-]+)/,
  /drive\.google\.com\/uc\?[^#]*\bid=([a-zA-Z0-9_-]+)/,
];

const DRIVE_WIDTH = 'w1600';

export function normalizeImageSrc<T extends string | null | undefined>(src: T): T {
  if (!src) return src;

  for (const pattern of DRIVE_PATTERNS) {
    const match = src.match(pattern);
    if (match) {
      return `https://lh3.googleusercontent.com/d/${match[1]}=${DRIVE_WIDTH}` as T;
    }
  }

  return src;
}
