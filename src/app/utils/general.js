export const loadImagePromise = src => new Promise((resolve, reject)=>{
    const img = new Image();
    img.onload = ()=> resolve(img);
    img.onerror = (err) => reject(err);
    img.src = src;
});