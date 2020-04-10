let env;
switch (process.env.NODE_ENV) {
  case 'development':
    env = require('./environment.dev');
    break;
  case 'production':
    env = require('./environment.prod');
    break;
  default:
    break;
}

export const environment: any = env.environment;
