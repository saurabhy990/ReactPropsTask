import React from 'react'
import "./MoviePage.css"
const MoviePage = (props) => {
  return (
    <div className='main'>
      <div className="left">
          <div className="movie-info">
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF18olWMjM4fN_dtEDm8YQRUWdpXXTereddj5OgegEHVU3XmZ8" alt="" height="150"  /> */}
              <img src={props.Logo} alt=""height="150" />
             <div className="moviedesc">
             <h1>{props.Title}</h1>
              <p> {props.Year}</p>
              <button>{props.Movietime} </button>
              <span>{props.Type}</span>
             </div>
             
            </div>   

            <p>{props.Desc}</p>     
   
      </div>
      <div className="right">
         <img className="img-cls" src={props.Banner} alt="" />
      </div>
      

    </div>
  )
}

export default MoviePage
