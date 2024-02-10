import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categorias , setCategorias ] = useState(['peru']);

    const onAddCategory = (newCategoria) =>{

        if(newCategoria.length < 1) return;
        if(categorias.includes(newCategoria)) return;

        setCategorias([newCategoria]);
    }

    return (
        <>
            <h1 className="text-3xl sm:text-4xl text-center py-5 font-bold">GifExpertApp</h1>
            <AddCategory onNewCategory={ onAddCategory }/>
            <section>
                { categorias.map(categori => 
                    <GifGrid
                        key={categori}
                        categoria={categori}
                     />
                )}
            </section>
        </>
    )
}