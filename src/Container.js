import React from "react";
import './index.css';
import styled from 'styled-components'

const Container = (props) => {

    const HeadingDiv = styled.div`
        text-align: center;

    a{
        font-weight: 800;
    margin-right: 10px;
    text-decoration: none;
    color:rgb(35, 218, 218);
    }
    `
    const ImageDiv = styled.div`
        width: 85%;
        margin: 0 auto;

        img{
            width: 100%;
            border-radius: 10%;
        }
    `

    const UnderImg = styled.div`
        text-align: center;

        h5{
            font-size: 1.1rem;
        }

        span{
            color:aqua;
        }

        p{
            line-height: 2;
            font-size: 1.2rem;
            margin: 50px auto;
            max-width: 100%;
            width: 80%;

            span{
                color:rgba(226, 21, 216, 0.986);
                font-weight: 900;
            }
        }
    `

    const {photo} = props
    // console.log(photo)
    return(
        <>
        <HeadingDiv>
            <h1>Astronomy Picture of the Day </h1>
            <p>
            <span>
                <a href="https://apod.nasa.gov/apod/archivepix.html">Discover the cosmos!</a></span>Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p>
            <p>{photo.date}</p>
        </HeadingDiv>
        <ImageDiv>
            <img src={photo.url} alt="Nasa-img"></img>
        </ImageDiv>
        <UnderImg>
            <h5>{photo.title} </h5>
            <h5>Image Credit &amp; Copyright: <span>{photo.copyright}</span>
            </h5>
            <p ><span>Explanation:</span> {photo.explanation}</p>
        </UnderImg>
        </>
    )
}

export default Container;