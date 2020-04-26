import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { AnilistAPIManager } from 'managers/anilist-api-manager';

@inject(Router, AnilistAPIManager)
export class Home {
    
    constructor(router, anilistAPIManager) {
        this.router = router;
        this.anilistAPI = anilistAPIManager;
    }

    attached() {
        console.log(this.anilistAPI.getHighestRatedAllTime());
    }

}