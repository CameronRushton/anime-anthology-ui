import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { AnilistAPIManager } from 'managers/anilist-api-manager';
import { MockAnilistAPI } from 'managers/mock-anilist-api';

@inject(Router, AnilistAPIManager, MockAnilistAPI)
export class Home {
    
    constructor(router, anilistAPIManager, mockAnilistAPI) {
        this.router = router;
        this.anilistAPI = anilistAPIManager;
        this.mockAnilistAPI = mockAnilistAPI;

        this.highestRatedAllTime = []
        this.highestRatedAllTimePageNum = 1;
    }

    attached() {
        // this.anilistAPI.getHighestRatedAllTime().then(result => {
        //     this.animeHighestRatedAllTime = result.data.Highest_Rated_All_time.media;
        // });
        this.getHighestRatedAllTime();
    }

    getHighestRatedAllTime() {
        this.highestRatedAllTime = this.highestRatedAllTime.concat(this.mockAnilistAPI.getHighestRatedAllTime(this.highestRatedAllTimePageNum));
        this.highestRatedAllTimePageNum += 1;
    }

}