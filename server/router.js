import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
	res.redirect('https://tomaszmajewski-chat.herokuapp.com');
});

export default router;
