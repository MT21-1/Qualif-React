import { Link } from "react-router-dom";

export default function AlbumCard(album){
    let name = album.name;
    let image = album.image;

    return (
        <Link to={`/detail/${album.id}`} className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200 w-full" key={album.id}>
            <div className="px-4 py-5 sm:p-6">
                <img className = "w-full" src={image} alt="" />
            </div>
            <div className="px-4 py-4 sm:px-6 text-md font-medium flex items-center justify-center">
                {name}
            </div>
        </Link>
    )
      
}