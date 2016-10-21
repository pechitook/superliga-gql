import neo4j from 'neo4j';
import config from 'config';



export const getDB = () => {
  const dbConfig = config.get('db');
  return new neo4j.GraphDatabase(`http://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}`);
}

