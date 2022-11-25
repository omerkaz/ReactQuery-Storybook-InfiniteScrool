import React from "react";
import "./ArtistCard.css";

function ArtistCard({ data, imageBackgroundColor, width }) {
  return (
    <div className="card" style={{width: width ? width : undefined}}>
      <div
        className="card-image"
        style={{ backgroundColor: imageBackgroundColor }}
      >
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
            <hr
              style={{
                width: "30%",
                marginRight: "90%",
                border: "1px solid black",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            ></hr>
            <span className="card-artist-name">{data.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistCard;
