import express from 'express';
import HttpErrors from 'http-errors';
import planetRepository from '../repositories/planet.repository.js';

const router =express.Router();



router.get('/:explorerName/planets', async (req, res, next) => {

try{

    const criteria = {discoveredBy: req.params.explorerName};
    let planets = await planetRepository.retriveWithCriteria(criteria);
   planets = planets.map(p => {
         p = p.toObject({getters:false,virtuals:false});
         p = planetRepository.transform(p);
       return p;
   });

   res.status(200).json(planets);

} catch(err){
    return next(err);   
}



});



export default router;