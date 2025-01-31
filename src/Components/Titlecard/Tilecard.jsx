import React,{useRef,useEffect,useState} from 'react'
import cards__data from '../../assets/cards/Cards_data'
import './Titlecard.css'
import { Link} from 'react-router-dom'
Link
function Tilecard({title,category}) {


  const [apidata,setapidata]=useState([])

  const cardsRef=useRef()
const handlewheel=(event)=>{
  event.preventDefault()
  cardsRef.current.scrollLeft+=event.deltaY;
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGM3ZmY5NGI4ODcyZGQwYzNkOWRmOTM0MWI3MTk3MyIsIm5iZiI6MTczODE2NDQ0My41OTAwMDAyLCJzdWIiOiI2NzlhNDhkYjAyOGE0MjIzODAyN2E5NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0_iYx5Mc7vsqlIJw5RNJzMo4ijngCq2ApKxvcv18iNA'
  }
};


  
useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res =>setapidata(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handlewheel);
},[])
  return (
    <div className='title-cards'>
    <h2>{title?title:'Popular netflix movies'}</h2>
    <div className='cards-list' ref={cardsRef}>
      {apidata.map((card,index)=>{

       
       return <Link to={`player/${card.id}`} className='card' key={index}>
       <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
          <p>
            {card.original_title}
          </p>
       </Link>
      })}

    </div>
    </div>

  
  )
}

export default Tilecard;