import createDatabase from './database.js';

const db = createDatabase();

export const getCards = async () => {
  const result = await db.query('SELECT * FROM cards');

  return result?.rows || [];
};

export const updateCard = async (id, lane) => {
  const result = await db.query('UPDATE cards SET lane=$2 WHERE id=$1 RETURNING *', [id, lane]);

  return result?.rows?.[0] || [];
};
