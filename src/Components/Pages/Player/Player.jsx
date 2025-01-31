import React ,{useEffect,useState}from 'react'
import './Player.css'
import back_arrow_icon from "../../../assets/back_arrow_icon.png"
import { useParams ,useNavigate} from 'react-router-dom'
function Player() {
  const navigate=useNavigate()
  const{id}=useParams()
const [apidata,setapidata]=useState({
  name:'',
  key:'',
  published_at:'',
  type:''

})
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGM3ZmY5NGI4ODcyZGQwYzNkOWRmOTM0MWI3MTk3MyIsIm5iZiI6MTczODE2NDQ0My41OTAwMDAyLCJzdWIiOiI2NzlhNDhkYjAyOGE0MjIzODAyN2E5NmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0_iYx5Mc7vsqlIJw5RNJzMo4ijngCq2ApKxvcv18iNA'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setapidata(res.results[0]))
    .catch(err => console.error(err));
  },[])
 
  return (

    
    <div className='player'>

      <img src={back_arrow_icon} onClick={()=>{navigate(-2)}} alt="" />
      <iframe width="90%" height="90%"
       src={`https://www.youtube.com/embed/${apidata.key}`} title="Trailer" allowfullscreen></iframe>
     <div className='player-info'>
      <p>Published Date:{apidata.published_at.slice(0,10)}</p>
      <p>Name: {apidata.name}</p>
      <p>type: {apidata.type}</p>
     </div>
    </div>
  )
}

export default Player