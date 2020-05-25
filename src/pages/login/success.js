import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router";
import { AnilistApiManager } from "managers/anilist-api-manager";
//TODO: DELETE THIS PAGE - USERS SHOULD BE ROUTED STRAIGHT TO HOME
@inject(Router, AnilistApiManager)
export class Success {
    
    constructor(router, anilistApiManager) {
        this.router = router;
        this.anilistApiManager = anilistApiManager;
    }

    activate(code) {
        this.anilistApiManager.obtainToken(code);
    }

    attached() {
    }

}