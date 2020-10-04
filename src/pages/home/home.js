import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router";
import { MockAnilistAPI } from 'managers/mock-anilist-api';
import { AnilistApiManager } from 'managers/anilist-api-manager';
import { AnimeManager } from 'managers/anime-manager';


@inject(Router, MockAnilistAPI, AnilistApiManager, AnimeManager)
export class Home {
    
    constructor(router, mockAnilistAPI, anilistApiManager, animeManager) {
        this.router = router;
        this.anilistAPI = mockAnilistAPI;
        this.anilistApiManager = anilistApiManager;
        this.animeManager = animeManager;

        this.username;
    }

    attached() {
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