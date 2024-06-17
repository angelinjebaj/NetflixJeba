import React,{useEffect,useState} from 'react'
import './rowpost.css'
import {imageUrl} from '../../constants/constant'
import axios from '../../axios'
function Rowpost(props) {

  const[movies,setMovies]=useState([ ])

  useEffect(() => {
     axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
     }).catch(err=>{
      // alert('network error')
     })
  }, [])
  
  return (
    <div className='row'>
       <h2>{props.title}</h2>
       <div className='posters'>
         {/* {movies.map((obj)=>
    <img key={obj.id}l"/>
 className='posterImg' src={`${imageUrl+obj.backdrop_path}`} alt="its orgina
         )} */}
         {movies.map((obj)=>
    <img  className={props.isSmall ? 'smallPoster':'posterImg' }src={`${imageUrl+obj.backdrop_path}`}alt="its orginal"/>
         )}
          

        
       </div>
    </div>
  )
}

export default Rowpost
