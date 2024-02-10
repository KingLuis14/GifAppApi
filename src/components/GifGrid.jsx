import { useEffect, useState } from "react";
import { getGifs } from "../Functions/getGifs"
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {

    const [gifs, setGifs] = useState([]);

    const getImageGifs = async () =>{
        const gif = await getGifs(categoria);
        setGifs(gif);
    }

    // se ejecuta solo 1 vez , cada q se renderiza el componente
    useEffect( () => {
        getImageGifs();
    }, [ ])

    return (
        <div className="grid gap-2">
            <h1 className="text-lg pt-2 pb-2 font-medium">{ categoria.toUpperCase() }</h1>
            <div className="columns-1 sm:columns-2 lg:columns-4 gap-2">
                {
                    gifs.map( allGifs =>
                       <GifGridItem 
                            key={ allGifs.id }
                            { ...allGifs }
                            > 
                       </GifGridItem>
                    )
                }
            </div>
        </div>
    )
}
