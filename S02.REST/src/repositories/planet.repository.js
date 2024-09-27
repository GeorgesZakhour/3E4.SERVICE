import Planet from '../models/planet.models.js'; // lien vers notre collection de données en bd 
const ZERO_KELVIN = -273.15;
class PlanetRepository {
    retriveall() {
       return Planet.find();
    }
    retrive(uuidPlanet) {
        return Planet.findOne({uuid: uuidPlanet});
    }


    retriveWithCriteria(criteria) {
        return Planet.find(criteria);
    }
    transform(planet,option={}){
            if(option.unit){
                if(option.unit ==='c')
                {
                    //transformation de kelvin a c
                    planet.temperature = parseFloat((planet.temperature + ZERO_KELVIN).toFixed(2),10);
                }
            }
        planet.newThing = {
            name:"Yannick"
        }
        delete planet._id;
        delete planet.__v;

        
        return planet;

    }

    create(planet){
        return Planet.create(planet);
    }

    delete(uuidPlanet){
        return Planet.findOneAndDelete({uuid:uuidPlanet});
    }
}


export default new PlanetRepository(); // exportation de notre classe PlanetRepository