import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useQuery, useInfiniteQuery } from "react-query";
import { addselectedArtist } from "./topArtistListSlice";
import ArtistCard from "../cards/ArtistCard";
import "./TopArtistList.css";

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "black",
};
// const fetchRepositories = async (page) => {
//   const response = await fetch(
//     `https://api.github.com/search/repositories?q=topic:react&per_page=${LIMIT}&page=${page}`
//   );
//   return response.json();
// };
const fetchData = async (page) => {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=175a1de9c96453bc9a9e31ff66934442&limit=10&page=1&format=json`
  );
  return response.json();
};

function TopArtistList() {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery("getTopArtist", () => fetchData());

  if (isLoading) {
    return (
      <main className="main">
        <div>Loading</div>
      </main>
    );
  } else {
    return (
      <main className="main">
        {data.artists.artist.map((item) => (
          <div key={item.mbid}>
            <Link
              onClick={() => dispatch(addselectedArtist(item.mbid))}
              to={`/${item.mbid}`}
              style={linkStyle}
            >
              <ArtistCard data={item} />
            </Link>
          </div>
        ))}
        <hr></hr>
      </main>
    );
  }
}

export default TopArtistList;
