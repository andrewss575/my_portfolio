//allows us to dynamically import the images from assets folder to the webpage
export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
}

