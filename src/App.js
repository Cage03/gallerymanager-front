import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GalleryPage from './Pages/GalleryPage';
import AlbumPage from './Pages/AlbumPage';
import PhotoPage from './Pages/PhotoPage';
import NavBar from "./Component/Navbar";

function getCookie() {
    return true;
}

function App() {
    if (getCookie() === true) {
        return (
            <div className={"col-lg-12"}>
                <NavBar/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/Gallery" element={<GalleryPage/>}/>
                        <Route path="/Album" element={<AlbumPage/>}/>
                        <Route path="/Photo" element={<PhotoPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
