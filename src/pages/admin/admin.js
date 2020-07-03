import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"

@inject(Router)
export class Admin {
    
    constructor(router, mockAnilistAPI) {
        this.router = router;
    }

    attached() {
    }

}