import { Router } from "express";

import planet from "../data/planet.js";

 const router = Router();

router.get('/planets' ,(req,res) => {

res.status(200);

res.json(planet);//content-type = application/json et envoie la reponse

});



router.post('/planets',(req,res) => {
res.status(405).end();
});

export default router;