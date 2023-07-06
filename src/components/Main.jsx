import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'

const Main = () => {
    const [movies , setmovies] =useState([])
    const [isLoading, setIsLoading] = useState(true);
    const movie=movies[Math.floor(Math.random()*movies.length)]

    useEffect(()=>{
        axios.get(requests.requestPopular).then((response)=>{
            setmovies(response.data.results)
            setIsLoading(false)
        })
    },[])

    
    
    const truncateString=(str, num)=>{
        if(str?.length>num){
            return str.slice(0,num)+ '...'
        }else{
            return str
        }
    }

  return (
    <div className='w-full h-[600px] text-white'>
        {isLoading? 
        <div className="h-full flex items-center justify-center">
        <div role="status" className="text-center">
            <svg aria-hidden="true" class=" inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        </div>
        :
        <div className='w-full h-full'>
            <div className='absolute w-full h-[600px] bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
            <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-white font-bold text-3xl md:text-5xl py-3'>{movie?.title}</h1>
                <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5 mr-4'>Play</button>
                <button className='border text-white border-gray-300 py-2 px-5'>Watch Later</button>
                <p className='text-gray-400 text-sm p-1'>Released: {movie?.release_date}</p>
                <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{truncateString(movie?.overview,100)}</p>
            </div>

        </div>
        }

    </div>
  )
}

export default Main