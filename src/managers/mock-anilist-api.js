export class MockAnilistAPI {
    constructor() {
    }

    getHighestRatedAllTime(pageNum) {
        let page1 = [
            {
                averageScore: 91,
                bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-7SftH58z5UXy.jpg",
                coverImage: {
                    large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx5114-OqQOY03Fc4Ni.jpg",
                },
                description: "\"In order for something to be obtained, something of equal value must be lost.\"↵<br><br>↵Alchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist.↵<br><br>↵Three years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.↵<br><br>↵(Source: MAL Rewrite)",
                format: "TV",
                genres: ["Mahou Shoujo", "Action", "Adventure", "Drama", "Fantasy", "Comedy"],
                id: 5114,
                season: "SPRING",
                startDate: {year: 2009, month: 4, day: 5},
                studios: {
                    edges: [
                        {
                            isMain: true,
                            node: {id: 4, name: "BONES"}
                        }
                    ]
                },
                title: {english: "Fullmetal Alchemist: Brotherhood"}
            },
            {
                averageScore: 90,
                bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
                coverImage: {large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/nx11061-1iKKwVNuVKPj.jpg"},
                description: "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>↵A Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>↵After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
                format: "TV",
                genres: ["Action", "Adventure", "Fantasy"],
                id: 11061,
                season: "FALL",
                startDate: {year: 2011, month: 10, day: 2},
                studios: {
                    edges: [
                        {
                            isMain: true,
                            node: {id: 11, name: "MADHOUSE"}
                        }
                    ]
                },
                title: {english: "Hunter x Hunter (2011)"}
            },
            {
                averageScore: 90,
                bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/98478-Om9j0dRjdCD2.jpg",
                coverImage: {large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx98478-dF3mpSKiZkQu.jpg"},
                description: "The second season of <i>3-gatsu no Lion</i>.",
                format: "TV",
                genres: ["Drama", "Slice of Life"],
                id: 98478,
                season: "FALL",
                startDate: {year: 2017, month: 10, day: 14},
                studios: {
                    edges: [
                        {
                            isMain: true,
                            node: {id: 44, name: "Shaft"}
                        }
                    ]
                },
                title: {english: "March Comes in Like a Lion 2"}
            }
        ]
        let page2 = [
            {
                averageScore: 90,
                bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n9253-JIhmKgBKsWUN.jpg",
                coverImage: {large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx9253-x1WUtyzJBXXX.jpg"},
                description: "Self-proclaimed mad scientist Okabe Rintarou lives in a small room in Akihabara, where he invents \"future gadgets\" with fellow lab members Shiina Mayuri, his air-headed childhood friend, and Hashida Itaru, an otaku hacker. The three pass the time by tinkering with their latest creation, a \"Phone Microwave\" that can be controlled through text messages. ↵<br><br>↵The lab members soon face a string of mysterious incidents that lead to a game-changing discovery: the Phone Microwave can send emails to the past and thus alter history. Adapted from the critically acclaimed visual novel by 5pb. and Nitroplus, Steins;Gate takes Okabe to the depths of scientific theory and human despair as he faces the dire consequences of changing the past.↵<br><br>↵(Summary by Edo)",
                format: "TV",
                genres: ["Psychological", "Sci-Fi", "Thriller", "Drama"],
                id: 9253,
                season: "SPRING",
                startDate: {year: 2011, month: 4, day: 6},
                studios: {
                    edges: [
                        {
                            isMain: true,
                            node: {id: 314, name: "White Fox"}
                        }
                    ]
                },
                title: {english: "Steins;Gate"}
            },
            {
                averageScore: 89,
                bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/104578-z7SadpYEuAsy.jpg",
                coverImage: {large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx104578-LaZYFkmhinfB.jpg"},
                description: "The second cour of Shingeki no Kyojin's third season.↵There is peace again within the Walls, and the Survey Corps prepare for a new expedition to Shiganshina. Thanks to Hange's new weapon, the hopes to retake the lost territory once and for all are stronger than ever. But at their old home, known and powerful enemies are awaiting and a fierce battle is coming.<br><br>(Source: Attack on Titan Wiki)",
                format: "TV",
                genres: ["Action", "Drama", "Fantasy", "Mystery"],
                id: 104578,
                season: "SPRING",
                startDate: {year: 2019, month: 4, day: 29},
                studios: {
                    edges: [
                        {
                            isMain: true,
                            node: {id: 858, name: "Wit Studio"}
                        }
                    ]
                },
                title: {english: "Attack on Titan Season 3 Part 2"}
            },
            {
                averageScore: 89,
                bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21745-5psGR43Ck4RZ.jpg",
                coverImage: {large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21745-vHwC1VKoL6zf.png"},
                description: "Final season of the Monogatari Series, part 4/5. Contains the arcs Mayoi Hell, Hitagi Rendezvous, and Ougi Dark from the Owarimonogatari light novels.↵<br><br>↵\"That is—the end of your youth.\" On the morning of the appointed day of the college entrance examinations, Koyomi Araragi headed towards North Shirahebi Shrine. What awaits him there with an unexpected smiling face is the slice of the sword that marks the final decisive battle—All of the \"stories\" now meet their resolution!<br><br>↵(Source: Bakemonogatari Wiki)",
                format: "TV",
                genres: ["Comedy", "Mystery", "Supernatural", "Romance"],
                id: 21745,
                season: "SUMMER",
                startDate: {year: 2017, month: 8, day: 12},
                studios: {
                    edges: [
                        {
                            isMain: true,
                            node: {id: 44, name: "Shaft"}
                        }
                    ]
                },
                title: {english: "Owarimonogatari Second Season"}
            },
            {
                averageScore: 89,
                bannerImage: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21745-5psGR43Ck4RZ.jpg",
                coverImage: {extraLarge: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21745-vHwC1VKoL6zf.png", large: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx21745-vHwC1VKoL6zf.png", medium: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/small/bx21745-vHwC1VKoL6zf.png", color: "#f14378"},
                description: "Final season of the Monogatari Series, part 4/5. Contains the arcs Mayoi Hell, Hitagi Rendezvous, and Ougi Dark from the Owarimonogatari light novels.↵<br><br>↵\"That is—the end of your youth.\" On the morning of the appointed day of the college entrance examinations, Koyomi Araragi headed towards North Shirahebi Shrine. What awaits him there with an unexpected smiling face is the slice of the sword that marks the final decisive battle—All of the \"stories\" now meet their resolution!<br><br>↵(Source: Bakemonogatari Wiki)",
                endDate: {year: 2017, month: 8, day: 13},
                format: "TV",
                genres: ["Mahou Shoujo", "Slice of Life"],
                id: 21745,
                isAdult: false,
                mediaListEntry: null,
                nextAiringEpisode: null,
                popularity: 32014,
                season: "SUMMER",
                startDate: {year: 2017, month: 8, day: 12},
                status: "FINISHED",
                studios: {
                    edges: [
                        {
                            isMain: true,
                            node: {id: 44, name: "Shaft"}
                        }
                    ]
                },
                title: {romaji: "Owarimonogatari (Ge)", english: "Owarimonogatari Second Season", native: "終物語（下）", userPreferred: "Owarimonogatari (Ge)"},
                type: "ANIME"
            }
        ]

        if (pageNum === 1) {
            return page1;
        }
        return page2;
    }
}