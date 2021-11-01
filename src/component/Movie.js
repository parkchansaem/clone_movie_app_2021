import React from "react";
import {Link}from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({id,year,genres,title,summary,poster}){
    return  <Link to={{pathname:`/movie/${id}`,
    state:{year,title,summary,genres,poster}
    }}>
    <div className="movies_movie">
        <img src={poster} alt={title} title={title}/>
        <div class="movie__data">
           <h2 className="movie__title">{title}</h2>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres&&genres.map((genre, index)=>(
                <li key={index} className="genres_genre">{genre}</li>
                ))}</ul>
            <p className="movie__summary">{summary.slice(0,140)}...</p>
            </div>
            
    </div>
    </Link>
 
}

Movie.prototype = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired
}
export default Movie;