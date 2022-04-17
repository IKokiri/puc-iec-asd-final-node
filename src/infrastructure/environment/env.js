import dotenv from 'dotenv';

const addEnvironmentVariables = () => {

  const environment = process.env.NODE_ENV



  if (environment === 'dev') {
    const envFile = ".env.dev"
    let path = { path: `./src/infrastructure/environment/${envFile}` }
    const config = path 
    dotenv.config(config);
  }

}

export { addEnvironmentVariables }