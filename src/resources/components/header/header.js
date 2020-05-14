import { inject, observable, bindable } from 'aurelia-framework';
import { Router } from "aurelia-router"

@inject(Router)
export class Header {

    @bindable scroll_position;
    @bindable scroll_fn;

    constructor(router) {
        this.router = router;
        this.screenWidth = screen.width;
        this.showNavOptions = false;
    }

    scroll_positionChanged(newValue, oldValue) {
        if (newValue > 90) {
            this.showNavOptions = false;
        }
    }
}