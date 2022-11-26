import React from "react";
import { useSelector } from "react-redux";
import { getSelecedArtist } from "../artist/topArtistListSlice";
import "./ArtistDetailCard.css";

function ArtistDetailCard({data, imageBackgroundColor, infoBackgroundColor, artistBackgroundColor }) {
  data = useSelector(getSelecedArtist)

  return (
    <div data-testid="firstEl" className="artist-detail-card">
      <div
        data-testid="secondEl"
        className="card-image"
        style={{ backgroundColor: imageBackgroundColor }}
      >
        <img alt={data?.name} src={data.image[0]["#text"]} />
      </div>
      <div className="card-body">
        <div className="card-info">
          <div
            className="card-artist-info"
            style={{ backgroundColor: infoBackgroundColor }}
          >
            <span className="card-artist-info-text">
              listeners: <i>{data.listeners}</i>
            </span>
            <span className="card-artist-info-text">
              playcount: <i>{data.playcount}</i>
            </span>
          </div>
          <div className="card-artist" style={{ backgroundColor: artistBackgroundColor }}>
            <span data-testid="artistHeader" className="card-artist-header">Artist</span>
            <hr className="card-artist-header-line"></hr>
            <span className="card-artist-name">{data.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

ArtistDetailCard.defaultProps = {
  imageBackgroundColor: "purple",
  infoBackgroundColor: "orange",
  artistBackgroundColor: "yellow",
}

export default ArtistDetailCard;
