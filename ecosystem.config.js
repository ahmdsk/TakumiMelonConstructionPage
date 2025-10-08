module.exports = {
  apps: [
    {
      name: "takumimelon:3008",
      script: "server.js",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 3008
      }
    }
  ]
}
