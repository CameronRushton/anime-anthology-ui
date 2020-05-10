import { inject, observable, bindable } from 'aurelia-framework';

export class AnimeCard {

    // Required data:
    @bindable
    data = {
        id: "",
        coverImage: {
            large: ""
        },
        genres: [],
        format: "",
        averageScore: 0,
        description: "",
        title: {
            english: ""
        },
        studios: {
            edges: [
                {
                    isMain: true,
                    node: {id: 0, name: ""}
                }
            ]
        },
        season: "",
        startDate: {
            year: ""
        }
    }

    constructor() {
        
    }

    attached() {
        this.activateGenres();
    }
    
    activateGenres() {
        this.genresMap = {
            "Action": false,
            "Adventure": false,
            "Drama": false,
            "Fantasy": false,
            "Comedy": false,
            "Romance": false,
            "Slice of Life": false,
            "Psychological": false,
            "Sci-Fi": false,
            "Thriller": false,
            "Horror": false,
            "Mahou Shojou": false,
            "Mecha": false,
            "Music": false,
            "Sports": false,
            "Mystery": false,
            "Supernatural": false,
            "Ecchi": false
        }
        this.genres.forEach(genre => {
            this.genresMap[genre] = true;
        });
    }

}