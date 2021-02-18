import React from "react";
import './index.css';

const Container = (props) => {

    const {photo} = props
    // console.log(photo)
    return(
        <>
        <div className="headingDiv">
            <h1 className="AstronomyH1">Astronomy Picture of the Day </h1>
            <p><span><a className="discoverLink" href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a></span>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            <p>{photo.date}</p>
        </div>
        <div className="imageDiv">
            <img className='image' src={photo.url} alt="Nasa-img"></img>
        </div>
        <div className="underImg">
            <h5 className='title'>{photo.title} </h5>
            <h5 className='copyright'>Image Credit &amp; Copyright: <span className="copyrightSpan">{photo.copyright}</span></h5>
            <p className='explanation'><span className='explanSpan'>Explanation:</span> {photo.explanation}</p>
        </div>
        </>
    )
}

export default Container;