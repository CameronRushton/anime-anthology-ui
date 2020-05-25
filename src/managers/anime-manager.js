import { AbstractManager } from "./abstract-manager";
import { HttpClient } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";

@inject(HttpClient)
export class AnimeManager extends AbstractManager {
    constructor(httpClient) {
		super(httpClient);
	}

	getAnime(id) {
		var options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		};

		return this.httpClient.fetch(`/anime/${id}`, options)
			.then(this.handleError)
			.then(this.json);
	}

	createAnime(animeDto) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(animeDto)
		};
		return this.httpClient.fetch(`/anime`, options)
            .then(this.handleError)
            .then(this.json);
    }

    deleteAnime(id) {
		var options = {
			method: "DELETE"
		};
		return this.httpClient.fetch(`/anime/${id}`, options)
			.then(this.handleError);
	}

	updateAnime(animeDto) {
		var options = {
			method: "PUT",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(animeDto)
		};
		return this.httpClient.fetch(`/anime`, options)
            .then(this.handleError)
            .then(this.json);
	}
}