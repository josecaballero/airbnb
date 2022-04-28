/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com'] /* we need to whitelist domain images */,
  },
  env: {
    MAPBOX_KEY:
      'pk.eyJ1Ijoic2liZXJpMCIsImEiOiJjbDJpc3FrYWwwajkzM2lxNmRkNnlpOWYyIn0.OdH1y4vzJdmnK7ZdpQnvYw',
  },
}
