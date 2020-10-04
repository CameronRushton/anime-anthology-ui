import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router";
import { AnilistApiManager } from 'managers/anilist-api-manager';
import { AnimeManager } from 'managers/anime-manager';

@inject(Router, AnilistApiManager, AnimeManager)
export class UserDetails {
    
    constructor(router, anilistApiManager, animeManager) {
        this.router = router;
        this.anilistApiManager = anilistApiManager;
        this.animeManager = animeManager;

        this.prequels = [];
        this.sequels = [];
    }

    activate(username) {
        this.anilistApiManager.getUserAnime(username.username).then(result => {
            this.completedAnime = result.data.MediaListCollection.lists.filter(list => {
                return list.name == "Completed";
            })[0].entries;
            // this.pagedCompletedAnime = this.getCompletedAnime(1);
        });

        // this.anilistApiManager.getUserStats(username).then(result => {
            
        // })

    }

    // getCompletedAnime(page) {
    //     let pageSize = 20;
    //     let min = ((page-1)*20)-1;
    //     if (min < 0) min = 0;
    //     let max = (pageSize*page)-1;
    //     return this.completedAnime.slice(min, pageSize*page)
    // }

    calcHighestRatedGenresAndTags() {
        
    }

    addToDatabase() {
        this.animeManager.createAnime(this.currentAnime).then(result => {
            debugger
        });
    }

    searchForSeries(anime) {
        this.selectedAnime = anime;
        this.prequels = [];
        this.sequels = [];
        this.digForRelations(anime.mediaId, "PREQUEL").then(result => {
            return this.digForRelations(anime.mediaId, "SEQUEL").then(result => {
                return result;
            });
        }).then(result3 => {
            this.currentAnime = {}
            this.currentAnime.series = result3[0].reverse();
            let cuadwad1 = this.currentAnime.series;
            //this.currentAnime.series.push(anime.mediaId); // TODO: This logic is fuckered - try fate/zero 2nd season
            let cuadwad = this.currentAnime.series;
            this.currentAnime.series = this.currentAnime.series.concat(result3[1]);
            this.currentAnime.id = this.currentAnime.series[0]; // The first show in the series
            anime.showAddToDb = true;
            return this.anilistApiManager.getDataForAnime(this.currentAnime.series); // TODO: The data we grab here can already be grabbed when we dig for relations instead of doing it seperately here
        }).then(payload => {
            let numAnime = Object.keys(payload.data).length;
            this.selectedAnime.series = [];
            for (let i = 0; i < numAnime; i += 1) {
                this.selectedAnime.series.push(payload.data["anime"+i]);
            }
        });
    }

    digForRelations(animeId, relationType) { // TODO: Grab relations from anidb??
        // Dig down to the first animeInSeries
        return this.anilistApiManager.getAnimeSeriesRelations(animeId).then(result => {
            let animeInSeries = result.data.anime.relations.edges.filter(relation => {
                return relation.relationType == relationType;
            });
            if (animeInSeries.length > 0 && animeInSeries[0].node && animeInSeries[0].node.id) { // TODO: Can there be more than one prequel per anime with an ID?
                if (relationType == "PREQUEL") {
                    this.prequels.push(animeInSeries[0].node.id)
                }
                if (relationType == "SEQUEL") {
                    this.sequels.push(animeInSeries[0].node.id)
                }
                return this.digForRelations(animeInSeries[0].node.id, relationType);
            } else {
                return [this.prequels, this.sequels];
            }

        })
    }

    navigateToAnimeDetails(id) {
        this.router.navigateToRoute("anime", {id})
    }

}