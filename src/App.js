import './App.css';
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayPage from './pages/Play.page';
import MoviePage from './pages/Movie.page';
import HomePage from './pages/Home.page';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movie/:id' element={<MoviePage />} />
      <Route path='/plays' element={<PlayPage />} />
    </Routes>
  );
}

export default App;
