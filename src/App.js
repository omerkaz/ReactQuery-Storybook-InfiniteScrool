import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopArtistList from "./components/artist/TopArtistList";
import ArtistDetail from "./components/artist/ArtistDetail";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TopArtistList />} />
        <Route data-testid="lastEl" path="artist/:artistMbid" element={<ArtistDetail />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
