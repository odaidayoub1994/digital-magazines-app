export default {
  port: process?.env?.APP_PORT ?? 5000,
  nodeEnv: process.env.NODE_ENV || "development",
  saltRounds: process.env.SALT_ROUNDS || 10,
  jwtAccessTokenSecret:
    process.env.JWT_ACCESS_TOKEN_SECRET || "access secret 12",
  jwtRefreshTokenSecret:
    process.env.JWT_REFRESH_TOKEN_SECRET || "refresh secret 12"
};
