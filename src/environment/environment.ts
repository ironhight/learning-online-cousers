let env;
switch (process.env.NODE_ENV) {
  case "development":
    env = require("./environments.dev");
    break;
  case "production":
    env = require("./environments.prod");
    break;
  default:
    break;
}

export const environment: any = env.environment;
