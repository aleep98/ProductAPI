import { Router } from "express";
import produtoRoute from './produtos'

const router: Router = Router();

router.use('/health', (req, res) => {
  res.sendStatus(200);
});

router.use('/produtos', produtoRoute);

export { router }