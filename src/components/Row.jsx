import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title , fetchURL, rid}) => {
    const [movies , setmovies] =useState([])
    

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setmovies(response.data.results)
        })
    },[fetchURL])

    const slideLeft=()=>{
        var slider=document.getElementById('slider'+rid);
        slider.scrollLeft=slider.scrollLeft-500;
    }

    const slideRight=()=>{
        var slider=document.getElementById('slider'+rid);
        slider.scrollLeft=slider.scrollLeft+500;
    }

  return (
    <div>
        <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
        <div className='relative flex items-center group'>
            <MdChevronLeft onClick={slideLeft}
            className='bg-white left-0  rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block cursor-pointer z-10 ' size={40}/>
            <div id={'slider'+rid} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item,id)=>(
                    <Movie key={id} item={item}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight}
            className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 hidden group-hover:block cursor-pointer z-10 ' size={40}/>
        </div>
    </div>
  )
}

export default Row