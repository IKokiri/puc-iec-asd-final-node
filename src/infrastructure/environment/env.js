import dotenv from 'dotenv';

const addEnvironmentVariables = () => {

  const environment = process.env.NODE_ENV
  let envFile = (environment === 'prod') ? ".env.prod" : ".env.dev"

  const config = { path: `/home/mendes/Documents/puc-iec-asd-nodejs/src/infrastructure/environment/${envFile}` }

  dotenv.config(config);
}

export { addEnvironmentVariables }
