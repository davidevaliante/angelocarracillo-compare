export interface Config {
    streamerId : string | number 
    streamerName : string
    api : string
    primaryColor : string
    secondaryColor : string
    fontString : string
    font : string
    youtubeMetatag? : string
}

export const configuration : Config = {
    streamerId : 7,
    streamerName : 'AngeloCarracillo',
    api : 'https://compare.topadsservices.com',
    primaryColor : '#3a81de',
    secondaryColor : '#3a81de',
    fontString : "https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&display=swap",
    font : 'Roboto',
}

