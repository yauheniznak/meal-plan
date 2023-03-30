const {Router} = require ('express');
const router = Router();
const {getMeal,saveMeal}=require ('./MealController')


router.get('/',getMeal);
router.post('/saveMeal',saveMeal);


module.exports=router;