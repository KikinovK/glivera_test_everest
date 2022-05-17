const mobilMenu = () => {
	const $menuTrigger = document.querySelector('.menuTrigger');
	const $menu = document.querySelector('.headerPanel');
	const $overlay = document.querySelector('.overlay');
	const $body = document.querySelector('body');

	const hendlerTrigger = () => {
		if ($menu.classList.contains('menu_open')) {
			$menu.classList.remove('menu_open');
			$menuTrigger.classList.remove('active_mod');
			$body.classList.remove('scroll-off');
			$overlay.classList.remove('visible');
		} else {
			$menu.classList.add('menu_open');
			$menuTrigger.classList.add('active_mod');
			$body.classList.add('scroll-off');
			$overlay.classList.add('visible');
		}
	};

	$menuTrigger.addEventListener('click', hendlerTrigger);
};

export default mobilMenu;
