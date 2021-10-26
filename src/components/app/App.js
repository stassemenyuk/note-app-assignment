import './App.css';
import Header from '../app-header/Header';
import MainPage from '../main-page/MainPage';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import NoteDetail from '../note-detail-view/NoteDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/:id">
            <NoteDetail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
