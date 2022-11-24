import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid'
import AlbumAndTrackCard from "../cards/AlbumAndTrackCard";
import ArtistDetailCard from "../cards/ArtistDetailCard";
import { getSelecedArtist } from "./topArtistListSlice";
import "./ArtistDetail.css";

function ArtistDetail() {
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

  if (topTracksApiResponse.isLoading || topAlbumsApiResponse.isLoading) {
    return <div>Loading</div>;
  } else {
    return (
      <main className="main">
        <div>
          <ArtistDetailCard />
        </div>
        <div>
          <div>
            {topAlbumsApiResponse.data.topalbums.album.map((item) => (
              <AlbumAndTrackCard key={uuidv4()} data={item} />
            ))}
          </div>
          <div>
            {topTracksApiResponse.data.toptracks.track.map((item) => (
              <AlbumAndTrackCard key={uuidv4()} data={item} />
            ))}
          </div>
        </div>
      </main>
    );
  }
}

export default ArtistDetail;
