import express from 'express';
import dayjs from "dayjs";
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import planetRoute from './routes/planets.route.js';

dayjs.extend(utc);
dayjs.extend(timezone);
const app = express();

app.use(planetRoute);

//route:/status
app.get('/status', (req, res) => {
    res.status(200).end();
});

//route sur /
app.get('/', (req, res) => {

    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<h1> premiere route test </h1>');

});

app.get('/date', (req, res) => {

    res.status(200);
    res.set('Content-type', 'text/plain');
    const newDate = dayjs.tz(dayjs(),'Europe/Berlin').format();
    res.send(newDate);
});

app.get('/math/:operation', (req, res) => {
    console.log(req.query, 10);
    const a = parseInt(req.query.a, 10);
    const b = parseInt(req.query.b, 10);
    var resultat;
    const operation = req.params.operation;

    // 1 status
    res.status(200);
    // type de reponse
    res.set('Content-type', 'text/plain');
    switch (operation) {
        case "somme":
            resultat = a + b;
            break;
        case "difference":
            resultat = a - b;
            break;
        case "produit":
            resultat = a * b;
            break;
        case "division":
            if (b !== 0) {
                resultat = a / b;
            } else {
                res.status(400).send('Division by zero error');
                return;
            }
            break;
        case "reste":
            resultat = a % b;
            break;

        default:
            res.status(400).end();
            return;
    }

    res.send(resultat.toString());

});

export default app;