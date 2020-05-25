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
        this.data.description = this.data.description.replace(/\u21b5/g,''); // Remove pesky ↵ character
        this.colourScore();
    }

    colourScore() {
        if (this.data.averageScore >= 80) {
            this.scoreColour = "green";
        } else if (this.data.averageScore >= 70) {
            this.scoreColour = "orange";
        } else {
            this.scoreColour = "red";
        }
    }
    
    activateGenres() {
        this.genresMap = {
            "Action": false,
            "Adventure": false,
            "Drama": false,
            "Fantasy": false,
            "Comedy": false,
            "Romance": false,
            "SliceofLife": false,
            "Psychological": false,
            "Sci-Fi": false,
            "Thriller": false,
            "Horror": false,
            "MahouShojou": false,
            "Mecha": false,
            "Music": false,
            "Sports": false,
            "Mystery": false,
            "Supernatural": false,
            "Ecchi": false
        }
        this.data.genres.forEach(genre => {
            let genreNoSpaces = genre.replace(/ /g,'')
            this.genresMap[genreNoSpaces] = true;
        });
    }

}