import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router";
import { LoginManager } from "managers/login-manager";

@inject(Router, LoginManager)
export class Login {

    userDTO = {
        username: "",
        password: ""
    }
    
    constructor(router, loginManager) {
        this.router = router;
        this.loginManager = loginManager;

        this.httpClient = loginManager.httpClient;
    }

    attached() {
    }

    login() {
        this.loginManager.login(this.userDTO).then(result => {
            if (result.jwt) {
                let jwt = result.jwt;
                this.httpClient.configure(config => {
                    config.withDefaults({
                        headers: {
                            'Authorization': 'Bearer ' + jwt
                        }
                    })
                });
                this.localStorage.setItem('Authorization', jwt);
            }
        });
        // TODO: Add token to local storage so that it can keep being used.
        // then on app load, check their local storage for the key.
    }

}