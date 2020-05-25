import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router";
import { AnilistApiManager } from 'managers/anilist-api-manager';

@inject(Router, AnilistApiManager)
export class UserDetails {
    
    constructor(router, anilistApiManager) {
        this.router = router;
        this.anilistApiManager = anilistApiManager;
    }

    activate(id) {
        this.userId = id;
        this.anilistApiManager.queryAnime
    }

    attached() {

    }

    navigateToAnimeDetails(id) {
        this.router.navigateToRoute("anime", {id})
    }

}