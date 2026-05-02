module.exports = {
  i18n: {
    // Values must match Locale enum in lib/i18n/locales.ts
    locales: ['pt-BR', 'en-US'],
    defaultLocale: 'pt-BR',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/42099621/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
    ],
  },
  async headers() {
    const oneYearImmutable = 'public, max-age=31536000, immutable';
    return [
      {
        source: '/_next/static/:path*',
        headers: [{ key: 'Cache-Control', value: oneYearImmutable }],
      },
      {
        source: '/_next/image',
        headers: [{ key: 'Cache-Control', value: oneYearImmutable }],
      },
      {
        source: '/:path*.(svg|webp|avif|jpg|jpeg|png|gif|ico|woff|woff2)',
        headers: [{ key: 'Cache-Control', value: oneYearImmutable }],
      },
    ];
  },
};
