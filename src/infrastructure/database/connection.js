import typeorm from 'typeorm';
import connectionOptions from './ormconfig.js';
const { createConnection } = typeorm;

const connection = async () => {
  const info = connectionOptions({});
  return createConnection(info).then(() => {
    console.log(`CONEXAO ESTABELECIDA COM O DB ${info.database}`)
    return true
  });
};

export default connection
