import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getDarkMode } from "../headerSlice";
import { getSelecedArtist } from "./topArtistListSlice";
import AlbumAndTrackCard from "../cards/AlbumAndTrackCard";
import ArtistDetailCard from "../cards/ArtistDetailCard";

import "./ArtistDetail.css";

function ArtistDetail() {
  const darkMode = useSelector(getDarkMode);
  const artist = useSelector(getSelecedArtist);

  const topAlbumsApiResponse = useQuery("getTopAlbum", () =>
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid=${artist.mbid}&api_key=175a1de9c96453bc9a9e31ff66934442&limit=5&format=json`
    ).then((res) => res.json())
  );
  const topTracksApiResponse = useQuery("getTopTracks", () =>
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&mbid=${artist.mbid}&api_key=175a1de9c96453bc9a9e31ff66934442&limit=5&format=json`
    ).then((res) => res.json())
  );

  if (topTracksApiResponse.isLoading || topAlbumsApiResponse.isLoading)
    return (
    <main className="main">
      <span data-testid="firstEl" className="loader"></span>
    </main>
    ) 

  return (
    <main className="main">
      <div className="top-section">
      <div className={darkMode ? "dark-mode-artist-detail-list" : null}>
        <ArtistDetailCard imageBackgroundColor={darkMode ? "black": "purple"} infoBackgroundColor={darkMode ? "black": "orange"} artistBackgroundColor={darkMode ? "black": "yellow"} />
        </div>
      </div>

      <div className="bottom-section">
        <div className="bottom-section-album">
        <h4 className="bottom-section-albums-header" style={{textAlign: "center"}}>Top Albums</h4>
        <hr className="bottom-section-albums-line"></hr>
          {topAlbumsApiResponse.data.topalbums.album.map((item) => (
            <div className={darkMode ? "dark-mode-artist-detail-list" : null}>
            <AlbumAndTrackCard imageBackgroundColor={darkMode ? "black": "purple"} infoBackgroundColor={darkMode ? "black": "orange"} artistBackgroundColor={darkMode ? "black": "yellow"} key={uuidv4()} data={item} />
            </div>
          ))}
        </div>
        <div className="bottom-section-tracks">
        <h4 className="bottom-section-tracks-header" style={{textAlign: "center"}}>Top Tracks</h4>
        <hr className="bottom-section-tracks-line"></hr>
          {topTracksApiResponse.data.toptracks.track.map((item) => (
            <div className={darkMode ? "dark-mode-artist-detail-list" : null}>
            <AlbumAndTrackCard imageBackgroundColor={darkMode ? "black": "purple"} infoBackgroundColor={darkMode ? "black": "orange"} artistBackgroundColor={darkMode ? "black": "yellow"} key={uuidv4()} data={item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ArtistDetail;
