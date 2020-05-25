import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { MockAnilistAPI } from 'managers/mock-anilist-api';
import { AnilistApiManager } from 'managers/anilist-api-manager';

@inject(Router, MockAnilistAPI, AnilistApiManager)
export class Home {
    
    constructor(router, mockAnilistAPI, anilistApiManager) {
        this.router = router;
        this.anilistAPI = mockAnilistAPI;
        this.anilistApiManager = anilistApiManager;

        this.username;
    }

    attached() {
        // window.localStorage.setItem('myCat', 'Tom'); https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        this.highestRatedAllTime = this.anilistAPI.getHighestRatedAllTime(1);
        this.highestRatedAllTime = this.highestRatedAllTime.concat(this.anilistAPI.getHighestRatedAllTime(2));
    }

    navigateToProfileStats() {
        let username = this.username;
        this.router.navigateToRoute("profile", {username})
    }

    navigateToAnimeDetails(id) {
        this.router.navigateToRoute("anime", {id})
    }

}