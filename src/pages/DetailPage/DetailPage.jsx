import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline'
import {gql, useQuery} from '@apollo/client'
import ArtistCard from '../../components/ArtistCard'
import AlbumCard from '../../components/AlbumCard'
import { useParams } from 'react-router'
import TrackCard from '../../components/TrackCard'

const navigation = ['Home', 'Favourites']
const featuredArtists = 'Adhitia Sofyan'

export default function DetailPage(){
    const {id} = useParams();
    

    const TRACK_QUERY = gql`
        query GetAlbum($an: String!){
            album(id: $an){
                tracks{
                name
                id
                preview_url
            }
            name
            image
        }
    }
    `
    const {loading, error, data} = useQuery(TRACK_QUERY, {
        variables:{
            n:featuredArtists,
            an:id
        }
    })

    if(loading) return <div className="w-screen h-screen flex items-center justify-center text-6xl text-white font-bold bg-gray-900">Loading...</div>
    console.log(data)
    const tracks = data.album.tracks
    const album = data.album
    console.log(tracks)

    return(
        <div>
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item, itemIdx) =>
                            itemIdx === 0 ? (
                            <Fragment key={item}>
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                                {item}
                                </a>
                            </Fragment>
                            ) : (
                            <a
                                key={item}
                                href={`/${item}`}
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                {item}
                            </a>
                            )
                        )}
                        </div>
                    </div>
                    </div>
                    <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                        <a href="/search">
                            <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex flex-row">
                            <span>Search a Specific Artist!</span>
                            <SearchIcon className="ml-4 h-6 w-6" aria-hidden="true" />
                            </button>
                        </a>
                        
                    </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>
                        {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </Disclosure.Button>
                    </div>
                </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navigation.map((item, itemIdx) =>
                    itemIdx === 0 ? (
                        <Fragment key={item}>
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">
                            {item}
                        </a>
                        </Fragment>
                    ) : (
                        <a
                        key={item}
                        href={`/${item}`}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                        {item}
                        </a>
                    )
                    )}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        <a href="/search">
                            <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white flex w-full items-center justify-center">
                                <span>Search for a Specific Artist!</span>
                                <SearchIcon className="ml-4 h-6 w-6" aria-hidden="true" />
                            </button>
                        </a>
                    </div>
                </div>
                </Disclosure.Panel>
            </>
            )}
        </Disclosure>
                        
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-800">{album.name} Tracks</h1>
            </div>
        </header>
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6">
                <div className="flex justify-center items-center border border-gray-700 bg-gray-800 p-4">
                    <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
                        <img src={album.image} className="rounded-md h-auto w-48 sm:w-64 border border-gray-700 text-gray-300" alt=""/>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                        <h4 className="text-4xl sm:text-7xl text-white font-extrabold">{album.name}</h4>
                    </div>
                </div>
                <div className="bg-gray-800 p-8 overflow-hidden shadow flex flex-col justify-center">
                    
                    {
                        tracks?.map(track => {
                            return <TrackCard name = {track.name} preview_url = {track.preview_url} id = {track.id}/>
                        })
                    }
                </div>
            </div>
        </main>
        </div>
    )
}
