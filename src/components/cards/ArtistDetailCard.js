import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getSelecedArtist } from "../artist/topArtistListSlice";
import './ArtistDetailCard.css'

function ArtistCardDetail() {
  const artist = useSelector(getSelecedArtist)

console.log(artist)
  return (
    // <div className="artist-CARD">
    //   <div className="image">
    //     <img src={artist.image[0]["#text"]} />
    //   </div>
    //   <div className="artistName">{artist.name}</div>
    //   <div className="artistInfo">zort</div>
    // </div>

    <div className="courses-container">
      <div className="course">
        <div className="course-preview">
          <img src={artist.image[0]["#text"]} />
        </div>
        <div className="course-info">
          <div className="progress-container">
            <p className="progress-text">{artist.listeners}</p>
            <p className="progress-text">{artist.playcount}</p>
          </div>
          <h4>Artist</h4>
          <h2>{artist.name}</h2>
        </div>
      </div>
    </div>
  );
}
{
  /* <div class="courses-container">
  <div class="course">
    <div class="course-preview">
      <img src={artist.image[0]["#text"]} />
    </div>
    <div class="course-info">
      <div class="progress-container">
        <p class="progress-text">6/9 Challenges</p>
        <p class="progress-text">6/9 Challenges</p>
      </div>
      <h6>Artist</h6>
      <h2>{artist.name}</h2>
    </div>
  </div>
</div>; */
}
export default ArtistCardDetail;
