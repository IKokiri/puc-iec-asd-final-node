const connectionOptions = () => {
  const devConfig = {
    type: process.env.TYPE,
    database: process.env.DATABASE,
    timezone: process.env.TIMEZONE,
    synchronize: true,
    logging: false,
  };

  const config = devConfig;
  const info = {
    ...config,
  };

  return info;
};

export default connectionOptions;
