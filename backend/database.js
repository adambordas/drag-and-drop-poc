import pg from 'pg';

export default function createDatabase() {
  return new pg.Pool();
};
