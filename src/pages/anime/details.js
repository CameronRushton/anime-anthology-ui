import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { AnilistApiManager } from 'managers/anilist-api-manager';
import { AnimeManager } from 'managers/anime-manager';

@inject(Router, AnilistApiManager, AnimeManager)
export class Details {
    
    constructor(router, anilistApiManager, animeManager) {
        this.router = router;
        this.anilistApiManager = anilistApiManager;
        this.animeManager = animeManager;
    }

    activate(params) {
        this.animeId = params.id;
        this.series = [];
    }

    attached() {
        this.animeManager.getAnime(this.animeId).then(result => {
            // We want to get all we need in one query from anilist
            result.series.push(result.id);
            this.animeId = result.id;
            return this.anilistApiManager.getDataForAnime(result.series);
        }).then(results => {
            results.forEach(part => {
                const numAnime = Object.keys(part.data).length;
                for (let i = 0; i < numAnime; i += 1) {
                    this.series.push(part.data["anime"+i]);
                }
            }); 
            // TODO: Change from filter to something that plucks the one out
            this.anime = this.series.filter(anime => {
                return anime.id.toString() === this.animeId;
            })[0];
            this.series = this.series.filter(anime => {
                return anime.format === "TV" || anime.format === "Movie" || anime.format === "Special";
            });
        });
    }

}