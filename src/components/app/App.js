import './App.css';
import Header from '../app-header/Header';
import CreateForm from '../create-note-form/CreateForm';
import NotesBlock from '../notes-block/NotesBlock';

function App() {
  return (
    <div className="App">
      <Header />
      <CreateForm />
      <NotesBlock />
    </div>
  );
}

export default App;
