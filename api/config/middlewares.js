module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'https://emart-k5vl.vercel.app','https://emart-pzxc.onrender.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'https://emart-k5vl.vercel.app','https://emart-pzxc.onrender.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      headers: '*',
      origin: ['https://emart-k5vl.vercel.app','https://emart-pzxc.onrender.com']
    }
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];