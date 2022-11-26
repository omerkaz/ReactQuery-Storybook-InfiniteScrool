import React from "react";
import "./AlbumAndTrackCard.css";
function AlbumAndTrackCard({ data, width, imageBackgroundColor, infoBackgroundColor, artistBackgroundColor }) {
  // console.log(data);
  return (
    <div data-testid="firstEl" className="album-track-card" style={{width: width}}>
      <div data-testid="secondEl" className="album-track-card-image" style={{ backgroundColor: imageBackgroundColor }}>
        <img alt={data.name} src={data.image[0]["#text"]} />
      </div>
      <div className="album-track-card-body">
        <div className="album-track-card-info">
          <div
            className="album-track-card-artist-info"
            style={{ backgroundColor: infoBackgroundColor }}
          >
            {data.listeners && (
              <span className="card-artist-info-text">
                listeners:<i>{data.listeners}</i>
              </span>
            )}
            <span className="card-artist-info-text">
              playcount:<i>{data.playcount}</i>
            </span>
          </div>
          <div className="album-track-card-artist" style={{ backgroundColor: artistBackgroundColor }}>
            <span className="album-track-card-artist-name">{data.name}</span>
            <span data-testid="artistName" className="album-track-card-artist-header">{data.artist.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

AlbumAndTrackCard.defaultProps = {
  width: "",
  imageBackgroundColor: "purple",
  infoBackgroundColor: "orange",
  artistBackgroundColor: "yellow",
}
export default AlbumAndTrackCard;
