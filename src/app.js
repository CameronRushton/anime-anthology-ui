import { inject, PLATFORM } from "aurelia-framework";
import { Router } from "aurelia-router"
import '@fortawesome/fontawesome-free/css/all.min.css';
import {activationStrategy} from 'aurelia-router';

@inject(Router)
export class App {

	constructor(router) {
		this.router = router;
	}

	navigateToRoute() {
		this.router.navigateToRoute('/')
	}

	configureRouter(config, router) {
		config.title = "Aurelia Initializr";
		config.options.pushState = true;
		config.options.root = "/";
		config.map([
			{
				route: '/',
				name: 'home',
				moduleId: PLATFORM.moduleName('pages/home/home'),
				title: "Home"
			},
			{
				route: '/series', //TODO: Rename this because not all anime are series
				name: 'anime',
				moduleId: PLATFORM.moduleName('pages/anime/details')
			},
			{
				route: '/profile',
				name: 'profile',
				moduleId: PLATFORM.moduleName('pages/user/details')
			},
			{
				route: '/success',
				name: 'success',
				moduleId: PLATFORM.moduleName('pages/login/success') //TODO: DELETE ME
			}
		]);
	}

}

