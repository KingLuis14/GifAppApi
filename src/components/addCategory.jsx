import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [ imputValue , setImputValue ] = useState("");

    const onInputChange = ({target}) => setImputValue(target.value);

    const onSubmit = (e) =>{
        e.preventDefault();
        onNewCategory(imputValue.trim());
        setImputValue("");
    }

    return (
        <> 
        <form onSubmit={ e => onSubmit(e) }>
            <input
                    type="text"
                    placeholder="Buscar Gifs"
                    className="block w-full mx-auto max-w-screen-sm bg-gray-200 px-2 py-2"
                    value={ imputValue }
                    onChange={ e => onInputChange(e) } 
            />
        </form>
           

        </>
    )
}