import { useEffect } from 'react';

const useTelegram = () => {
	useEffect(() => {
		const tg = window.Telegram?.WebApp;
		if (tg) {
			tg.expand(); // Expand the app to full screen
			tg.enableClosingConfirmation(); // Prevent accidental closes
		}
		return () => tg?.close();
	}, []);
};

export default useTelegram;
