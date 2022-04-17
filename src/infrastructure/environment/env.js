import dotenv from 'dotenv';

const addEnvironmentVariables = () => {

  const environment = process.env.NODE_ENV
  let envFile = (environment === 'prod') ? ".env.prod" : ".env.dev"
  const config = { path: `./src/infrastructure/environment/${envFile}` }

  dotenv.config(config);
}

export { addEnvironmentVariables }