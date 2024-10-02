import express from 'express';
import informationControllers from '../controllers/information.js';
import verifyToken from '../middleware/verifyToken.js';

const router = express.Router();
const { aboutPage,contactPage} =
    informationControllers;



router.get('/contact',contactPage);
router.get('/about',aboutPage);
export default router;