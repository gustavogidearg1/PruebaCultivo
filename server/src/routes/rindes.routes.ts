import  {Router} from 'express';
import {deleteRinde, getRinde, getRindes, postRinde, putRinde} from '../controllers/rinde.controller'


const router = Router();
const routesGrafico = Router();

router.get('/',getRindes);
router.get('/:id',getRinde);
router.delete('/:id',deleteRinde);
router.post('/',postRinde);
router.put('/:id',putRinde);

export default router;