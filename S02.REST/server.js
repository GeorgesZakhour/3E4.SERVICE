import chalk from 'chalk';

import app from './src/app.js';

const PORT = 3000;

app.listen(PORT, (err) => {
    // Notre serveur est démarré
    if(err) {
        // Si err
        console.log(chalk.red(`🛑 ${err}`));
        process.exit(4);
    }
    
    console.log(chalk.green(`😍 Server listening on port : ${PORT}`));
     
});
