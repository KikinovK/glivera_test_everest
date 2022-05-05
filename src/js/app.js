// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###

// ------------------  import components

// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget
if (GLOBAL_VARS.projectDevStatus) {
	pageWidgetInit();
	console.log(process.env.NODE_ENV);
}
// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	console.log('ready');
	let $menuTrigger;
	let $body;

	$menuTrigger = $('.menuTrigger');
	$body = $('.header__nav');

	$menuTrigger.on('click', () => {
		if ($body.hasClass('menu_open')) {
			$body.removeClass('menu_open');
			$(this).removeClass('active_mod');
		} else {
			$body.addClass('menu_open');
			$(this).addClass('active_mod');
		}
	});
};

const loadFunc = () => {
	console.log('page load');
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
