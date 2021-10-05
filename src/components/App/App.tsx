import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemsProvider } from '../hocks/Items';
import { CharacterPage } from '../../pages/character';

function App() {
  return (
    <div className="App container">
      <ItemsProvider>
        <CharacterPage />
      </ItemsProvider>
    </div>
  );
}

export default App;
