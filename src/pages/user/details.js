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
    }

    activate(username) {
        // this.anilistApiManager.getUserAnime(username).then(result => {
        //     this.completedAnime = result.data.MediaListCollection.lists.filter(list => {
        //         return list.name == "Completed";
        //     }).entries;
        // });

        // this.anilistApiManager.getUserStats(username).then(result => {
            
        // })

    }

    calcHighestRatedGenresAndTags() {
        
    }

    addAnimeToDatabase() {
        // this.completedAnime.forEach(anime => {
        //     let animeDto = {
        //         id: anime.id,
        //         levels: {
        //             beginner: 0,
        //             novice: 0,
        //             intermediate: 0,
        //             advanced: 0,
        //             expert: 0
        //         },
        //         series: []
        //     }
        //     this.animeManager.createAnime(animeDto).then(result => {

        //     })
        // });
        this.currentAnime = {series: []}
        this.digForRelations(5081, "PREQUEL").then(result => {
            this.digForRelations(5081, "SEQUEL").then(result => {
                let something = this.currentAnime.series;
            });
        });
    }

    digForRelations(animeId, relationType) {
        // Dig down to the first prequel
        return this.anilistApiManager.getAnimeSeriesRelations(animeId).then(result => {
            let prequel = result.data.anime.relations.edges.filter(relation => {
                return relation.relationType == relationType;
            });
            if (prequel.length > 0 && prequel[0].node && prequel[0].node.id) { // TODO: Can there be more than one prequel per anime with an ID?
                this.currentAnime.series.push(prequel[0].node.id);
                return this.digForRelations(prequel[0].node.id, relationType);
            }

        })
    }

    navigateToAnimeDetails(id) {
        this.router.navigateToRoute("anime", {id})
    }

}
// 0: 15689
// 1: 11597
// 2: 21400
// 3: 17074
// 4: 21399
// 5: 20918
// 6: 9260
// 7: 21262
// 8: 21745
// 9: 100815
// 10: 20593

//5081 -> prequels [15689, 21400, 21399, 9260]
//5081 -> sequels [11597, 17074, 20918, 21262, 21745, 100815, 20593]