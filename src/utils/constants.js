const env = "prod";

export const URL =
  env === "local"
    ? "http://localhost:8888/.netlify/functions"
    : `https://cozy-rolypoly-a23f52.netlify.app/.netlify/functions`;
