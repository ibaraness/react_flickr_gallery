import {stripJSONPFunction, object2urlString} from './../utils/rest-utils';
import {CONFIG} from './../config/config';


//format=json&per_page=3


//TODO: getPictures is not a pure function it has many side effects, consider moving them out for the caller function
// const _getPictures = (requestSettings, filters) => {
//     const body = object2urlString({...filters, ...requestSettings.params});
//     const method = requestSettings.requestMethod;
//     const headers = requestSettings.requestHeaders;
//     return fetch(requestSettings.url, { method, headers,body })
//     .then(response => response.text())
//     .then(stripJSONPFunction)
//     .then(JSON.parse);
// }

// const _getPictures = (requestSettings, filters) => {
//     const body = object2urlString({...filters, ...requestSettings.params});
//     return fetch(requestSettings.url, { 
//         method: requestSettings.requestMethod, 
//         headers: requestSettings.requestHeaders,
//         body 
//     })
//     .then(response => response.text())
//     .then(stripJSONPFunction)
//     .then(JSON.parse);
// }

//TODO: handle errors - here or on the caller
const _getPictures = (requestSettings, filters) => {
    const options = {
        body: object2urlString({...requestSettings.params, ...filters}),
        method: requestSettings.requestMethod, 
        headers: requestSettings.requestHeaders
    };
    return fetch(requestSettings.url, options)
    .then(response => response.text())
    .then(stripJSONPFunction)
    .then(JSON.parse);
}

export const getPictures = _getPictures.bind(undefined, CONFIG.getPictures);


// export const getPictures = filters => {
//     if(filters && !_.isPlainObject(filters)){
//         throw "getPictures: expecting 'filters' param to be a plain object when it's " + filters.constructor.name
//     }
//     const body = object2urlString({...filters, ...CONFIG.getPictures});
//     const method = "post";
//     const headers = { 
//         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
//     };
//     return fetch(API_END_POINT, { method, headers,body })
//     .then(response => response.text())
//     .then(stripJSONPFunction)
//     .then(JSON.parse);
// }