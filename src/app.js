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
		config.title = "ShoYuAnime";
		config.options.pushState = true;
		config.options.root = "/";
		config.addPipelineStep('authorize', AuthorizeStep);
		config.map([
			{
				route: '/',
				name: 'home',
				moduleId: PLATFORM.moduleName('pages/home/home'),
				title: "Home",
				settings: { roles: [] }
			},
			{
				route: '/series', //TODO: Rename this because not all anime are series
				name: 'anime',
				moduleId: PLATFORM.moduleName('pages/anime/details'),
				settings: { roles: [] }
			},
			{
				route: '/profile',
				name: 'profile',
				moduleId: PLATFORM.moduleName('pages/user/details'),
				settings: { roles: [] }
			},
			{
				route: '/login',
				name: 'login',
				moduleId: PLATFORM.moduleName('pages/login/login'),
				title: "Login",
				settings: { roles: [] }
			},
			{
				route: '/admin',
				name: 'admin',
				moduleId: PLATFORM.moduleName('pages/admin/admin'),
				settings: { roles: ['admin'] }
			}
		]);
	}

}

class AuthorizeStep {
    run(navigationInstruction, next) {
      if (navigationInstruction.getAllInstructions().some(i => i.config.settings.roles.indexOf('admin') !== -1)) {
        var isAdmin = /* TODO: insert magic here - get from back end */false;
        if (!isAdmin) {
          return next.cancel(new Redirect('home'));
        }
      }
  
      return next();
    }
  }
  


