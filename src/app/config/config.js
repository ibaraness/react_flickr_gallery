const API_KEY = "eb8114a3e1eeedda68841c013d64ecc0";
const API_END_POINT = "https://api.flickr.com/services/rest/";

export const CONFIG = {
    getPictures: {
        params: {
            api_key: API_KEY,
            method: "flickr.photos.search",
            format: "json",
        },
        requestHeaders: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
        requestMethod: 'post',
        url: API_END_POINT
    }
}