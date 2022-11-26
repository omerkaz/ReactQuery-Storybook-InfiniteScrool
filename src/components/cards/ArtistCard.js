import React from "react";
import "./ArtistCard.css";

function ArtistCard({ data, imageBackgroundColor, infoBackgroundColor, artistBackgroundColor, width }) {
  return (
    <div data-testid="firstEl" className="card" style={{ width: width }}>
      <div
        data-testid="secondEl" className="card-image" style={{ backgroundColor: imageBackgroundColor }}>
        <img alt={data.name} src={data.image[0]["#text"]} />
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
ArtistCard.defaultProps = {
  imageBackgroundColor: "purple",
  infoBackgroundColor: "orange",
  artistBackgroundColor: "yellow",
}
export default ArtistCard;
