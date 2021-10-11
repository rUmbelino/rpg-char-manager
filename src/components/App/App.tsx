import 'bootstrap/dist/css/bootstrap.min.css';
import { combineProviders } from 'react-combine-providers';
import { ItemsProvider } from '../hocks/Items';
import { CharacterPage } from '../../pages/character';
import { InventoryProvider } from '../hocks/Inventory';

const providers = combineProviders();

providers.push(ItemsProvider);
providers.push(InventoryProvider);

const MasterProvider = providers.master();

function App() {
  return (
    <div className="App container">
      <MasterProvider>
        <CharacterPage />
      </MasterProvider>
    </div>
  );
}

export default App;
