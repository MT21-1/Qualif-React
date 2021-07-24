import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListPage from "./pages/ListPage/ListPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import FavouritePage from "./pages/FavouritePage/FavouritePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ArtistPage from './pages/ArtistPage/ArtistPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/artist/:name">
          <ArtistPage/>
        </Route>
        <Route path="/search">
          {/* Disini kasih search page */}
          <SearchPage/>
        </Route>
        <Route path="/detail/:id">
            {/* Disini kasih detail */}
            <DetailPage/>
        </Route>
        <Route path="/Favourites">
            {/* Disini kasih favorite page */}
            <FavouritePage/>
        </Route>
        <Route path="/">
          {/* Disini kasih list page */}
          <ListPage/>
        </Route>
      </Switch>
    </Router>      
  );
}

export default App;
