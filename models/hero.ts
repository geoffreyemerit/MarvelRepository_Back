import { ResultSetHeader } from 'mysql2';
import connection from '../db-config.js';
import IHero from '../interfaces/IHero';

// GET ALL
const getAllHeroes = async (sortBy = ''): Promise<IHero[]> => {
  let sql: string = 'SELECT * FROM heroes';
  const results = await connection.promise().query<IHero[]>(sql);
  return results[0];
};

//GET BY ID
const getHeroById = async (idHero: number): Promise<IHero> => {
  const [results] = await connection
    .promise()
    .query<IHero[]>('SELECT * FROM heroes WHERE id = ?', [idHero]);
  return results[0];
};

// GET BY TEAM
const getHeroesByTeam = async (team: number): Promise<IHero[]> => {
  const results = await connection
    .promise()
    .query<IHero[]>('SELECT * FROM heroes WHERE team = ?', [team]);
  return results[0];
};

// GET BY HERO / POWER
const getHeroAndPowerByHeroPowers = async (
  idHero: number
): Promise<IHero[]> => {
  const results = await connection
    .promise()
    .query<IHero[]>(
      'SELECT power FROM heroes H INNER JOIN hero_powers HP ON H.id = HP.hero_id INNER JOIN powers P ON P.id = HP.power_id WHERE H.id = ?',
      [idHero]
    );
  return results[0];
};

export default {
  getAllHeroes,
  getHeroById,
  getHeroesByTeam,
  getHeroAndPowerByHeroPowers,
};
