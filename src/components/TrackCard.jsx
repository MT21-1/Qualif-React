import { StarIcon } from "@heroicons/react/outline";
import { Star, StarOutline } from "heroicons-react";

export default function TrackCard(track){
    let name = track.name;
    let preview_url = track.preview_url;

    function checkFavorite(){
        let favoriteList = JSON.parse(localStorage.getItem('favorites'))
        let b = 0;
        favoriteList.forEach(f => {    
           if(f.id == track.id){
            //    kalau langsung return ntah kenapa dia tidak bisa.
            b = 1;
           } 
        });
        return b;
        
    }

    function removeFavorite(){
        let favoriteList = JSON.parse(localStorage.getItem('favorites'))
        favoriteList.forEach(f => {    
            if(f.id == track.id){
                favoriteList.splice(favoriteList.indexOf(f), 1);
                localStorage.setItem('favorites', JSON.stringify(favoriteList));
            } 
         });
    }

    function addToFavorites(){
        let fav = checkFavorite();
        console.log(fav)
        if(checkFavorite() == 0){
            document.getElementById(`icon${track.id}`).setAttribute('class', "mx-5 w-8 h-8 text-green-500 cursor-pointer")

            // klo disini berarti blom masuk fav
            let favorite;
            if(localStorage.getItem('favorites') == undefined){
                favorite = [];
            }else{
                favorite = JSON.parse(localStorage.getItem('favorites'));
            }
                favorite.push(track);
                let stringFav = JSON.stringify(favorite);
                localStorage.setItem('favorites', stringFav);
               
        }else{

            document.getElementById(`icon${track.id}`).setAttribute('class', "mx-5 w-8 h-8 text-gray-500 cursor-pointer")
            removeFavorite();
        }
        console.log(JSON.parse(localStorage.getItem('favorites')))
    }

    

    return (
        <div className="sm:flex border border-gray-700 rounded-lg bg-gray-800 my-4 p-4" key={track.id}>
            <div className="mb-4 w-full max-w-1/2 sm:mb-0 sm:mr-4 sm:w-1/4">
                <h4 className="p-2 text-xl w-auto text-white font-bold">{name}</h4>
            </div>
            <div className="flex items-center justify-center w-full">
                <audio className="w-full" src={preview_url} controls/>

                <button onClick={() => addToFavorites()}>
                    {
                        checkFavorite() == 1?(
                            <Star className="mx-5 w-8 h-8 text-green-500 cursor-pointer" id={`icon${track.id}`}/>
                        ) : (
                            <Star className="mx-5 w-8 h-8 text-gray-500 cursor-pointer" id={`icon${track.id}`}/>
                        )
                    }
                    
                </button>
                
            </div>
        </div>
    )
      
}