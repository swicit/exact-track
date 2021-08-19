// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: ["@snowpack/plugin-postcss"],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  root: "./src",
  env: {
    API_URL: "https://wlwlwhmxjpvltzdromqm.supabase.co",
    API_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyOTMyOTA0NSwiZXhwIjoxOTQ0OTA1MDQ1fQ.bbcAXUkFy8I6V1glS3NY3DuOhMzkT1_UwBFd3z5tf4w",
  },
};
