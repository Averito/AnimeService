module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/catalog",
        destination: "/catalog/1",
        permanent: false
      },
      {
        source: "/catalog/anime",
        destination: "/catalog/1",
        permanent: false
      }
    ]
  }
}
