export const loadImagePromise = src => new Promise((resolve, reject)=>{
    const img = new Image();
    img.onload = ()=> resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
});

export const generateFlickrURL = (size, photo) =>{
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;
}

export const generateFlickrThumbURL = generateFlickrURL.bind(undefined, "z");
export const generateFlickrBigImageURL = generateFlickrURL.bind(undefined, "h");