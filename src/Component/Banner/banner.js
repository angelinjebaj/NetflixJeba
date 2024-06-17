import React,{useEffect,useState} from 'react'
import {API_Key,imageUrl} from '../../constants/constant'
import './banner.css'
import axios from '../../axios'
const Banner = () => {
  const [movie, setMovie] = useState("")
  useEffect(() => {
  axios.get(`trending/all/week?api_key=${API_Key}&language=en-US`).then((response)=>{
    console.log(response.data.results[0])
    setMovie(response.data.results[0])
  })
  
    
  }, [ ])
  
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className='banner'>
        <div className='content'>
                <h1 className='title'>{movie ? movie.title : ""}</h1>
                 <div className='banner_button'>
                    <button className='Play'>Play</button>
                    <button className='My list'> My List</button>
                 </div>
                 <h1 className='description'>
                 {movie.overview}
                 </h1>
               
        </div>
        <div className="fade"></div>
        
      
    </div>
  )
}

export default Banner
