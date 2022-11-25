import React from "react";
import { useSelector } from "react-redux";
import { getSelecedArtist } from "../artist/topArtistListSlice";
import "./ArtistDetailCard.css";

function ArtistCardDetail() {
  const data = useSelector(getSelecedArtist);

  return (
    <div className="card">
      <div className="card-image" style={{ backgroundColor: "purple" }}>
        <img alt={data.name} src={data.image[0]["#text"]} />
      </div>
      <div className="card-body">
        <div className="card-info">
          <div
            className="card-artist-info"
            style={{ backgroundColor: "orange" }}
          >
            <span className="card-artist-info-text">
              listeners:<i>{data.listeners}</i>
            </span>
            <span className="card-artist-info-text">
              playcount:<i>{data.playcount}</i>
            </span>
          </div>
          <div className="card-artist" style={{ backgroundColor: "yellow" }}>
            <span className="card-artist-header">Artist</span>
            <hr style={{ width: "30%", marginRight: "90%", border: "1px solid purple" }}></hr>
            <span className="card-artist-name">{data.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCardDetail;
