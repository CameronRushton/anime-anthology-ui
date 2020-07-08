import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { MockAnilistAPI } from 'managers/mock-anilist-api';

@inject(Router, MockAnilistAPI)
export class Home {

    constructor(router, mockAnilistAPI) {
        this.router = router;
        this.anilistAPI = mockAnilistAPI;

        this.levelValue;

    }

    attached() {
        // window.localStorage.setItem('myCat', 'Tom'); https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        this.highestRatedAllTime = this.anilistAPI.getHighestRatedAllTime(1);
        this.highestRatedAllTime = this.highestRatedAllTime.concat(this.anilistAPI.getHighestRatedAllTime(2));
        //used to load the page before a level is selected, try and combine?
    }

    levelValueChanged(levelChangedValue) {
      //console.log(levelChangedValue); // outputs the <select> value to output
      this.highestRatedAllTime = this.anilistAPI.getHighestRatedAllTime(1);
      this.highestRatedAllTime = this.highestRatedAllTime.concat(this.anilistAPI.getHighestRatedAllTime(2));
      //
      this.highestRatedAllTime = this.highestRatedAllTime.filter(anime=>{
        if(levelChangedValue=="ShowAll"){return true}
        return (anime.level == levelChangedValue)
      })
    }

    navigateToAnimeDetails(id) {
        this.router.navigateToRoute("anime", {id})
    }

}
