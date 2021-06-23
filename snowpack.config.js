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
    API_URL: "https://zrxyigghnyercwzabogh.supabase.co",
    API_KEY:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyMzI4MDQ4MywiZXhwIjoxOTM4ODU2NDgzfQ.P2WctZhF65KQRKFF6zqUAK_nk9-QjNGndHS2oehaPe8",
  },
};
