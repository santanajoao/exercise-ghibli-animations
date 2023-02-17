import { Route, Switch } from 'react-router-dom';
import FilmsProvider from './context/FilmsProvider';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  return (
    <FilmsProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/favorites" component={ Favorites } />
      </Switch>
    </FilmsProvider>
  );
}

export default App;
