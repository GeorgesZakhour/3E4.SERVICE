import { Router } from 'express';
import HttpErrors from 'http-errors';
import PLANETS from '../data/planets.js';
import planetRepository from '../repositories/planet.repository.js';
import methodMidllewear from '../middlewares/method.js';
import httpStatus from 'http-status'; 
const router = Router();





router.get('/', methodMidllewear, async (req, res, next) => {

  try {
    const transformOptions = {};
    if (req.query.unit) {
      if (req.query.unit === 'c') {
        transformOptions.unit = 'c';
      } else if (req.query.unit !== 'k') {
        return next(HttpErrors.BadRequest('le parametre unit doit etre c ou k'))
      }
    }
    let planets = await planetRepository.retriveall();
    planets = planets.map(p => {
      p = p.toObject({ getters: false, virtuals: false }); //transforme la planete de la baae de donne un object
      p = planetRepository.transform(p, transformOptions)
      return p;
    });

    console.log(req.info);
    res.status(200).json(planets);
  } catch (err) {
    return next(err);
  }
});




//: devant dans l'url => paramètre
router.get('/:uuidPlanet', async (req, res, next) => {
  try {
    let planet = await planetRepository.retrive(req.params.uuidPlanet);
    if (!planet) {
      return next(HttpErrors.NotFound(`Planet with : ${req.params.uuidPlanet} not found`));
      return;
    }
    planet = planet.toObject({ getters: false, virtuals: false })
    planet = planetRepository.transform(planet);
    res.status(200).json(planet);

  } catch (err) {
    return next(err);
  }
});

router.post('/', async (req, res, next) => {

  const newPlanet = req.body;
  const isEmpty = Object.keys(newPlanet).length === 0;
  if (isEmpty) {
    return next(HttpErrors.BadRequest('No data'));
  }
  try {
    let planet = await planetRepository.create(newPlanet);

    planet = planet.toObject({ getters: false, virtuals: false })
    planet = planetRepository.transform(planet);


    res.status(201).json(planet);
  } catch (err) {
    return next(err);
  }

});

router.delete('/:uuidPlanet', async (req, res,next) => {

  try {

    const planet = await planetRepository.delete(req.params.uuidPlanet);
    res.status(204).end();

  } catch (err) {
    return next(err);
  }
});

router.patch('/:idPlanet', (req, res) => {
  res.status(405).end();
});

router.put('/:idPlanet', (req, res) => {
  res.status(501).end();
});

export default router;
