import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TopArtistList from "./components/artist/TopArtistList";
import ArtistDetail from "./components/artist/ArtistDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TopArtistList />} />
        <Route path="/:artistMbid" element={<ArtistDetail />} /> 
      </Routes>
      <Footer />
    </>
  );
}

export default App;
