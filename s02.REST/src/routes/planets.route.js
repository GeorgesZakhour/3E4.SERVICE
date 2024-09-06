import { Router } from "express";

import planet from "../data/planet.js";



const router = Router();

router.get('/', (req, res) => {

    res.status(200);

    res.json(planet);//content-type = application/json et envoie la reponse

});
//: devant le url cest un prametre
router.get('/:idPlanet', (req, res) => {



    const idPlanet = parseInt(req.params.idPlanet, 10);
    const planett = planet.filter(p => p.id === idPlanet);//filter retourne un tableau

    // le id exist(planet existe)

    if (planett.length > 0) {
        res.status(200).json(planett[0]);
    } else {
        res.status(404).end();
    }
    //le id exist pas 

});




router.post('/', (req, res) => {

    const newPlanet = req.body;
    console.log(newPlanet);
    if (newPlanet) {

        // on ajoute pas une planete vide
        const planett = planet.find(p => p.id === newPlanet.id);//filter retourne un tableau
        if (planett) {
            //une planete possede le id de la nouvelle planete pas dajout possible
            return res.status(409).end();
        }

        planet.push(newPlanet);
        res.status(201).json(newPlanet);



    }
});

router.delete('/:idPlanet',(req, res) => {
   const index = planet.findIndex(p => p.id === parseInt(req.params.idPlanet,10)); 
   if(index === -1)
{
    return res.status(404).end();
}
//la planete exist
planet.splice(index,1);
res.status(204).end();


});

router.patch('/:idPlanet',(req, res) => {
   res.status(405).end(); 

});


router.put('/:idPlanet',(req, res) => {
    res.status(405).end(); 
 
 });

export default router;