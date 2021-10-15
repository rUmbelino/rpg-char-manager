import 'bootstrap/dist/css/bootstrap.min.css';
import { combineProviders } from 'react-combine-providers';
import { EquipmentsProvider } from '../hocks/Equipments';
import { InventoryProvider } from '../hocks/Inventory';
import { CharacterProvider } from '../hocks/Character';
import { CharacterPage } from '../../pages/character';
import { ItemsProvider } from '../hocks/Items';

const providers = combineProviders();

providers.push(EquipmentsProvider);
providers.push(InventoryProvider);
providers.push(CharacterProvider);
providers.push(ItemsProvider);

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
