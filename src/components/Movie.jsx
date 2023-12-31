import React from 'react'
import { useState } from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { UserAuth } from '../context/authContext'
import { db } from '../firebase'
import { arrayUnion,doc, updateDoc } from 'firebase/firestore'

const Movie = ({item}) => {
    const [like, setlike]=useState(false)
    const {user}=UserAuth()
    const [saved, setSaved ]=useState(false)

    const movieId=doc(db, 'users', `${user?.email}`)

    const saveShow= async()=>{
      if(user?.email){
        setlike(!like)
        setSaved(true)
        await updateDoc(movieId,{
          savedShows:arrayUnion({
            id:item.id,
            title:item.title,
            img:item.backdrop_path
          })
        })
      }else{
        alert('Please! log in to save movie')
      }
    }

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[260px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
    <div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold justify-center items-center h-full text-center relative top-[50%]'>{item?.title}</p>
        <p onClick={saveShow}>
            {like? <FaHeart className='absolute top-4 left-4 text-gray-300'/>:<FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
        </p>
    </div>
</div>
  )
}

export default Movie