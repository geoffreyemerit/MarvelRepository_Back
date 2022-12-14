import heroesController from './controllers/heroes';
import powersController from './controllers/powers';
import teamsController from './controllers/teams';
// import hero_powerController from './controllers/hero_power';
import { Express } from 'express';

const setupRoutes = (server: Express) => {
  // ------ HERO ------ //
  //--ALL--
  server.get('/api/heroes', heroesController.getAllHeroes);
  //--ID--
  server.get('/api/heroes/:idHero', heroesController.getHeroById);
  //--TEAM--
  server.get('/api/teams/:idTeam/heroes', heroesController.getHeroesByTeam);
  //--POWER // HERO--
  server.get(
    '/api/heroes/:idHero/powers',
    heroesController.getHeroAndPowerByHeroPowers
  );

  //------ POWER -----//
  //--ALL--
  server.get('/api/powers', powersController.getAllPowers);
  //--ID--
  server.get('/api/powers/:idPower', powersController.getPowerById);
  //------ TEAM -----//
  //--ALL--
  server.get('/api/teams', teamsController.getAllTeams);
  //--ID--
  server.get('/api/teams/:idTeam', teamsController.getTeamById);
};
export default setupRoutes;
