import express from 'express';

const router = express.Route();

router.get('/' , (req , res) => {
    res.send('posts');
});

router.get('/read/:id' , (req, res) => {
    res.send('You are reading post' + req.params.id);
});

export default router;
