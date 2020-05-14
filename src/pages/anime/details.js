import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { MockAnilistAPI } from 'managers/mock-anilist-api';

@inject(Router, MockAnilistAPI)
export class Home {
    
    constructor(router, mockAnilistAPI) {
        this.router = router;
        this.anilistAPI = mockAnilistAPI;
    }

    activate(id) {
        console.log(id);
    }

    attached() {
        
    }

}