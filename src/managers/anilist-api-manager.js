
export class AnilistApiManager {
    constructor() {
    }

    queryAnilist(query, variables, accessToken) {
        let url = 'https://graphql.anilist.co';
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
        // TODO: First, try to get access token from local storage
        
        if (accessToken) {
            options.headers['Authorization'] = 'Bearer ' + accessToken;
        }
        
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

    obtainToken(code) {
        let url = 'https://anilist.co/api/v2/oauth/token';
        var options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            json: {
                'grant_type': 'authorization_code',
                'client_id': '3512',
                'client_secret': 'SATJCiTxLLrgGrE5n5ayCHyAF9UcvkpBjpyj3WLb',
                'redirect_uri': 'https://nostalgic-mirzakhani-5cdbfb.netlify.app/', // http://example.com/callback
                'code': code, // The Authorization Code received previously
            }
        };

        return fetch(url, options).then((error, response, body) => {
            if (!error && response.statusCode == 200) {
                console.log(body.access_token);
            }
        }).catch(this.handleError);
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

	getDataForAnime(animeIds) {
        // Maximum query complexity is 500. They use this https://www.npmjs.com/package/graphql-query-complexity. IDs should be max here.
        let tempArray, chunkSize = 11;
        let j = animeIds.length
        let slicedIds = [];
        for (let i = 0; i < j; i += chunkSize) {
            tempArray = animeIds.slice(i, i + chunkSize);
            slicedIds.push(tempArray);
        }
        let queries = [];
        for (let k = 0; k < slicedIds.length; k += 1) {
            queries.push(this.makeQuery(slicedIds[k]));
        }
        let promises = queries.map(query => this.queryAnilist(query));
		return Promise.all(promises);
    }

    // private
    makeQuery(animeIds) {
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
		animeIds.forEach((id, index) => {
			animeQuery += `anime${index}:Media(id:${id}) {
			    ...myMedia
			},`;
		});
        mainQuery += `{ ${animeQuery} }`;
        return mainQuery;
    }
    
    getUserAnime(aInUserName) {
        let allUserAnimeQuery = "{MediaListCollection(userName:\""+aInUserName+"\",type:ANIME){" +
            `lists{
                name 
                isCustomList 
                isCompletedList:isSplitCompletedList entries{
                ...mediaListEntry
                }
            }
            user{
                id 
                name 
                avatar{
                large
                }
                mediaListOptions{
                scoreFormat
                rowOrder 
                animeList{
                    sectionOrder 
                    customLists 
                    splitCompletedSectionByFormat 
                }
                }
            }
            }
        }
        fragment mediaListEntry on MediaList{
            mediaId 
            status 
            score 
            customLists  
            media{
            id 
            title{
                english 
                romaji
            }
            coverImage{
                extraLarge
                large
            }
            episodes  
            averageScore 
            popularity 
            genres 
            tags {
                name
                isMediaSpoiler
                isGeneralSpoiler
              }
            }
        }`
        let variables = {userName: aInUserName}
        return this.queryAnilist(allUserAnimeQuery, variables);
    }

    getUserStats(aInUserName) {
        let query = "query($name:String){User(name:\""+aInUserName+"\"){" +
                `id 
                name 
                statistics{
                    anime{
                        genres{
                            genre 
                            count 
                            meanScore 
                            minutesWatched  
                            mediaIds
                        }
                        tags{
                            tag {
                                id 
                                name
                            }
                            count 
                            meanScore 
                            minutesWatched 
                            mediaIds
                        }
                    }
                }
            }
        }`;
        return this.queryAnilist(query);
    }

    getAnimeSeriesRelations(aInAnimeId) {
        let query = `fragment myMedia on 
        Media {
          id
          relations{edges{id relationType(version:2)node{id}}}
        }
        {
          `+"anime:Media(id:"+aInAnimeId+") {" +
            `...myMedia
          }
        }`
        return this.queryAnilist(query);
    }
}
