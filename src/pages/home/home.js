import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { MockAnilistAPI } from 'managers/mock-anilist-api';

@inject(Router, MockAnilistAPI)
export class Home {
    
    constructor(router, mockAnilistAPI) {
        this.router = router;
        this.anilistAPI = mockAnilistAPI;
    }

    attached() {
        // window.localStorage.setItem('myCat', 'Tom'); https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        this.highestRatedAllTime = this.anilistAPI.getHighestRatedAllTime(1);
        this.highestRatedAllTime = this.highestRatedAllTime.concat(this.anilistAPI.getHighestRatedAllTime(2));
    }

    navigateToAnimeDetails(id) {
        this.router.navigateToRoute("anime", {id})
    }

}