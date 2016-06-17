import { Router } from 'express';
import indexView from '../views';

const router = new Router();

router.get('*', (req, res) => {
  res.send(indexView);
});

export default router;
