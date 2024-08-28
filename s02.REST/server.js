import chalk from "chalk";
import app from "./src/app.js";
const PORT = 3000;
app.listen(PORT,(err)=>
{
    //notre serveur est demmarder
    // a faire 
    if (err)
    {
        //sir err
        console.log(chalk.red(err));
        process.exit(1);
    }
    console.log(chalk.bgBlack.white(`server listening on :${PORT}`));

});
