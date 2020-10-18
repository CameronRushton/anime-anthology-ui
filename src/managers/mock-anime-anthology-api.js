export class MockAnimeAnthologyAPI {
    constructor() {
    }

    getAnime(id) {
        let data = {
            id: id,
            series: [id]
        };
        let randId;
        for (let i = 0; i < 10; i += 1) {
            randId = Math.floor(Math.random() * Math.floor(9999));
            data.series.push(randId);
        }
       return new Promise((resolve, reject) => setTimeout(resolve, 0, data));
    }
}