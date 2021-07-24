import { Link } from "react-router-dom";

export default function ArtistCard(artist){
    let name = artist.name;
    let image = artist.image;
    console.log(name)
    if(name == undefined){
        return <div className = "text-white">No Results Found</div>
    }else{
        return (
            <Link to={`/artist/${encodeURI(name)}`} className="flex justify-center items-center border border-gray-300 rounded-lg bg-gray-800 p-4" key={artist.id}>
                <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                    <img src={image} className="rounded-md h-auto w-32 sm:w-64 border border-gray-700 text-gray-300" alt=""/>
                </div>
                <div className="flex flex-col items-center justify-center w-full">
                    <h4 className="text-4xl sm:text-7xl text-white font-extrabold">{name}</h4>
                </div>
            </Link>
        )
    }
    
      
}