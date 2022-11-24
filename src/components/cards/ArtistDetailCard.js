import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getselectedArtistByMbid } from "../artist/topArtistListSlice";
import './ArtistDetailCard.css'

function ArtistCardDetail() {
  const params = useParams();
  const artist = useSelector((state) =>
    getselectedArtistByMbid(state, params.artistMbid)
  )[0];
  return (
    // <div class="artist-CARD">
    //   <div class="image">
    //     <img src={artist.image[0]["#text"]} />
    //   </div>
    //   <div class="artistName">{artist.name}</div>
    //   <div class="artistInfo">zort</div>
    // </div>
    <div class="courses-container">
      <div class="course">
        <div class="course-preview">
          <img src={artist.image[0]["#text"]} />
        </div>
        <div class="course-info">
          <div class="progress-container">
            <p class="progress-text">6/9 Challenges</p>
            <p class="progress-text">6/9 Challenges</p>
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
