import { inject, observable, bindable } from 'aurelia-framework';
import { Router } from "aurelia-router";
import {DialogService} from 'aurelia-dialog';
import { Dialog } from '../modal/modal';

@inject(Router, DialogService)
export class Header {

    @bindable scroll_position;
    @bindable scroll_fn;

    constructor(router, dialogService) {
        this.router = router;
        this.screenWidth = screen.width;
        this.showNavOptions = false;
        this.dialogService = dialogService;
    }

    // openModal() {
    //     this.dialogService.open( {viewModel: Dialog, model: "Are you sure?"} ).then(response => {
    //         console.log(response);
    //         if (!response.wasCancelled) {
    //             console.log("OK");
    //         } else {
    //             console.log("Cancelled");
    //         }
    //         console.log(response.output);
    //     });
    // }

    scroll_positionChanged(newValue, oldValue) {
        if (newValue > 90) {
            this.showNavOptions = false;
        }
    }
}