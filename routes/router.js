import express from 'express';

const router = express.Router();

router.post('/control_group', (req, res) => {
  console.log('Router post: ', req.body.data);
  res.send('Grupo de control subido correctamente!');
});

export default router;
