
export const stripJSONPFunction = body => {
    return body.replace(/^[a-zA-Z]*\(/, "").replace(/\)$/, "");
}

export const object2urlString = obj => Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&');