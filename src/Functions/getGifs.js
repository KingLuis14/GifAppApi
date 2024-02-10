export const getGifs = async(categoria) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=kQtwQwi546ufeoZ3SbPCIVRGEaXfUTky&q=${categoria}&limit=25`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    //recorrer el arreglo data
    const gifs = data.map(gif => ({
            id: gif.id,
            titulo: gif.title,
            url: gif.images.preview_webp.url,
        })
    );
    return gifs;
}