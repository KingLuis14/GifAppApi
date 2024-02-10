export const GifGridItem = ({ titulo, url }) => {

    return (
        <div className=" bg-white mb-2">
            {/* <h4 className="text-1xl text-center">{ titulo }</h4> */}
            <img className="block w-full" 
                src={ url } 
                alt={ titulo } />
        </div>
    )
}