import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
	res.redirect('https://tomaszmajewski-chat.netlify.app');
});

export default router;
