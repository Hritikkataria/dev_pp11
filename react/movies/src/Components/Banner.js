import {movies} from './getMovies';
import React, { Component } from 'react'

export default class Banner extends Component {
    
    render() {
        let movie = movies.results[0] // movies hamare kha or hai is movies k result pe
        // let movie=''
        return (
            // ye humne wrap krdiya <>
            <> 
            {   movie == ''? // movies agr empty string hai to kuch krdo div retunr krdo wrna jo ye niche bna rkha h wo print krdo yha pe humne ek loader le aay bootstrp ki help se
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card"> //  class ko htake classname krdiya yha pr kyu jb bhi hume claases define krni hoti h hamre kuch html tags k to 
                <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
                {/* <div className="card-body"> */}
                    <h1 className="card-title banner-title">{movie.original_title}</h1>
                    <p class="card-text banner-text">{movie.overview}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                {/* </div> */}
                </div>
            }
            </>
        )
    }
}