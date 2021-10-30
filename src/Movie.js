import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year,genres,title,summary,poster}){
    return <div className="movies_movie">
        <img src={poster} alt={title} title={title}/>
        <div class="movie__data">
           <h2 className="movie__title">{title}</h2>
            <h5 className="movie__year">{year}</h5>
            <ul className="movie__genres">
                {genres.map((genre,index)=>(
                <li key={index} className="genres_genre">{genre}</li>
                ))}</ul>
            <p className="movie__summary">{summary.slice(0,180)}...</p>
            </div>
    </div>
 
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