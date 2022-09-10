import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
	res.redirect('https://tomaszmajewski-chat.netlify.app');
	res.send('Serwer został uruchomiony');
});

export default router;
