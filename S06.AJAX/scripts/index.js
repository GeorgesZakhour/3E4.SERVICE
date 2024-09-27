import { PLANETS_URL } from "./constants.js";


$(document).ready(()=>{

    retrivePlanets();
});

async function retrivePlanets()
{
    try{

        const response = await axios.get(PLANETS_URL);
        if(response.status === 200)
        {
         const planets = response.data;
         planets.forEach(p => {
            $('#planets').append(displayPlanet(p));
         });
        }
         
    }
    catch(err)
    {
        console.log(err);
    }
}

function displayPlanet(planet)
{
    let planetTag = '<a class ="card col-2 mx-2 my-2" href="./details.html"><div >'

    planetTag += ` <img src="${planet.icon}" class = "card-img-top" alt="L'image de la planet ${planet.name}"> </img>`; 
    planetTag += `<h5 class="card-title"> ${planet.name}</h5>`;
    planetTag += '</div></a>';
    

    return planetTag;
}