import { useRef, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useInfiniteQuery } from "react-query";
import { addselectedArtist } from "./topArtistListSlice";
import { v4 as uuidv4 } from "uuid";
import ArtistCard from "../cards/ArtistCard";
import "./TopArtistList.css";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};

const fetchData = async (page) => {
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=175a1de9c96453bc9a9e31ff66934442&limit=50&page=${page}&format=json`
  );
  return response.json();
};

function TopArtistList() {
  const observerElem = useRef(null);
  const dispatch = useDispatch();
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      "getTopArtist",
      ({ pageParam = 1 }) => fetchData(pageParam),
      {
        getNextPageParam: (lastPage, allPages) => {
          const nextPage = allPages.length + 1;
          console.log(allPages);
          console.log(nextPage);
          return lastPage.artists.length !== 0 ? nextPage : undefined;
        },
      }
    );

  const handleObserver = useCallback(
    (entries) => {
      const [target] = entries;
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const element = observerElem.current;
    const option = { threshold: 0 };

    const observer = new IntersectionObserver(handleObserver, option);
    observer.observe(element);
    return () => observer.unobserve(element);
  }, [fetchNextPage, hasNextPage, handleObserver]);

  return (
    <>
      <main className="main">
        {!isSuccess ? <div>Loading</div> : null}

        {isSuccess &&
          data.pages.map((filteredPage) =>
            filteredPage.artists.artist.map((item, index) => (
              <div style={{ display: "flex" }} key={uuidv4()}>
                <Link
                  onClick={() => dispatch(addselectedArtist(item))}
                  to={`/${item.mbid}`}
                  style={linkStyle}
                >
                  <ArtistCard data={item} imageBackgroundColor="purple" />
                </Link>
              </div>
            ))
          )}
      </main>
      <hr style={{ width: "20vw" }} ref={observerElem} />
    </>
  );
}

export default TopArtistList;
