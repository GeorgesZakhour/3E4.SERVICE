
import {createServer} from 'node:http'; //using ou include 

const premierServeur = createServer((request,response)=>{
    console.log(`nous sommes dans le code du serveur${request.url}`)
   response.statusCode = 200; 
   response.setHeader('Content-type','text/html');
   response.end(`bonjour ${request.url.substring(1)}`);
   
});

premierServeur.listen(3000,'127.0.0.1',()=>{

console.log('le serveur est en fonction');


});