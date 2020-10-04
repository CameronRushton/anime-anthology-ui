import { inject } from 'aurelia-framework';
import { HttpClient } from "aurelia-fetch-client";
import { AbstractManager } from "./abstract-manager";

@inject(HttpClient)
export class LoginManager extends AbstractManager {
    constructor(httpClient) {
		super(httpClient);
	}

	login(userDTO) {
		// var options = {
		// 	method: "POST",
		// 	headers: {
        //         "Content-Type": "application/json",
        //         // "Access-Control-Allow-Origin": "*",
        //         // "Accept": "*/*",
        //         // "Authorization": "Bearer",
		// 		// "Access-Control-Expose-Headers": true,
		// 		// "Access-Control-Allow-Headers": "Authorization",
        //         // "withCredentials": true
		// 	},
		// 	body: JSON.stringify(userDTO)
		// };
		// return this.httpClient.fetch(`authenticate`, options)
		// 	.then(this.handleError);
		// 	// .then(this.json);

		let url = 'http://localhost:8080/authenticate';
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(userDTO)
        };
        
        return fetch(url, options).then(this.json).catch(this.handleError);
    }
}