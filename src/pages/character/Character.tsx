import { Character } from '../../components/Character';
import { Inventory } from '../../components/Inventory';
import { Items } from '../../components/Items';
import { ItemsList } from '../../components/ItemsList';

export const CharacterPage = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <Items />
        <Character />
        <ItemsList />
      </div>
      <Inventory />
    </>
  );
};
