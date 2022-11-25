import React from "react";
import "./AlbumAndTackCard.css";
function AlbumAndTrackCard({ data, width }) {
  console.log(data);
  return (
    <div className="album-track-card" style={{width: width ? width : undefined}}>
      <div className="album-track-card-image" style={{ backgroundColor: "purple" }}>
        <img alt={data.name} src={data.image[0]["#text"]} />
      </div>
      <div className="album-track-card-body">
        <div className="album-track-card-info">
          <div
            className="album-track-card-artist-info"
            style={{ backgroundColor: "orange" }}
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
          <div className="album-track-card-artist" style={{ backgroundColor: "yellow" }}>
            <span className="album-track-card-artist-name">{data.name}</span>
            <span className="album-track-card-artist-header">{data.artist.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlbumAndTrackCard;
