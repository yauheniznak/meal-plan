const express = require ('express');
const app= express();
// const bodyParser = require('body-parser');

const mongoose=require('mongoose');
 const routes = require('./MealRoutes');
 const cors = require('cors');

require ('dotenv').config();

 mongoose.set('strictQuery',false);


const PORT= 9000 || process.env.port ;
app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(cors())


mongoose
.connect (process.env.MONGODB_LINK)
.then(()=> console.log("we were connectet to mongoose"))
.catch((err)=> console.log(err))
app.use(routes);

app.listen (PORT,() =>{
    console.log('I am listetning on 7000')
})






//On9yDzFalNq9cT0d