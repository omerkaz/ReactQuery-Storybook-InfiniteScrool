import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getDarkMode } from "./components/headerSlice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopArtistList from "./components/artist/TopArtistList";
import ArtistDetail from "./components/artist/ArtistDetail";
import NotFound from "./components/NotFound";

// console.log(document.body.classList);

function App() {
  const darkMode = useSelector(getDarkMode);
  const body = document.body
  if (darkMode) {
    body.classList.remove("light-mode")
    body.classList.add("dark-mode")
  } 
  if (!darkMode) {
    body.classList.remove("dark-mode")
    body.classList.add("light-mode")
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TopArtistList />} />
        <Route
          data-testid="lastEl"
          path="artist/:artistMbid"
          element={<ArtistDetail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer darkModeClass={darkMode ? "footer dark-mode-footer" : "footer"} />
    </>
  );
}

export default App;
