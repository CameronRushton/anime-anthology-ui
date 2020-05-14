
export class AnilistAPIManager {
    constructor() {
    }

    queryAnilist(query, variables) {
        let url = 'https://graphql.anilist.co'
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query: query,
                variables: variables
            })
        };
        
        return fetch(url, options).then(this.json).catch(this.handleError);
    }

    json(response) {
        return response.json().then(json => {
            return response.ok ? json : Promise.reject(json);
        });
    }

    handleError(response) {
        if (response.status >= 400 && response.status <= 599) {
			throw response;
		}
		return response;
    }

    // TODO: How should queries be written? Should we make a builder? Put queries in a file and import the variables in a manager?
    getHighestRatedAllTimeFull() {
        let query = `
            {
                Highest_Rated_All_time:Page(page:1,perPage:6) {
                media(sort:SCORE_DESC, type:ANIME, isAdult:false) {
                    id 
                    title {
                    romaji
                    english
                    native
                    userPreferred
                    }
                    coverImage {
                    extraLarge
                    large
                    medium
                    color
                    }
                    startDate{
                        year 
                        month 
                        day
                    }
                    endDate{
                        year 
                        month 
                        day
                    }
                    bannerImage 
                    season 
                    description 
                    type 
                    format 
                    status 
                    genres 
                    isAdult 
                    averageScore 
                    popularity 
                    mediaListEntry{
                        id 
                        status
                    }
                    nextAiringEpisode{
                        airingAt 
                        timeUntilAiring 
                        episode
                    }
                    studios(isMain:true){
                        edges{
                            isMain 
                            node
                            {
                                id 
                                name
                            }
                        }
                    }
                }
            }
        }`
        return this.queryAnilist(query);
    }

    getHighestRatedAllTime() {
        let query = `
            {
                Highest_Rated_All_time:Page(page:1,perPage:6) {
                media(sort:SCORE_DESC, type:ANIME, isAdult:false) {
                    id 
                    title {
                    english
                    }
                    coverImage {
                    large
                    }
                    startDate{
                        year 
                        month 
                        day
                    }
                    
                    bannerImage 
                    season 
                    description 
                    format 
                    genres 
                    averageScore 
                    studios(isMain:true){
                        edges{
                            isMain 
                            node
                            {
                                id 
                                name
                            }
                        }
                    }
                }
            }
        }`
        return this.queryAnilist(query);
    }

	getDataForAnime(animeIDs) {
		let mainQuery = `
            fragment myMedia on
            Media {
                id
                title {
                    english
                }
                coverImage {
                    large
                }
                startDate {
                    year
                    month
                    day
                }
                bannerImage
                season
                description
                format
                genres
                averageScore
				studios(isMain:true) {
					edges {
						isMain
						node {
							id
							name
						}
					}
				}
		}`;

		let animeQuery = '';
		animeIDs.forEach((id, index) => {
			animeQuery += `anime${index}:Media(id:${id}) {
			    ...myMedia
			},`;
		});
		mainQuery += `{ ${animeQuery} }`;

		return this.queryAnilist(mainQuery);
	}
}
