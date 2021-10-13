import { createContext, useContext, useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { NIE } from '../../utils/NIE';

interface ItemsContextType {
  weapons: Equipment[];
  addToItemsWeapon: (weapon: Equipment) => void;
  removeFromItemsWeapon: (weapon: Equipment) => void;
  items: Equipment[];
  addToItems: (item: Equipment) => void;
  removeFromItems: (item: Equipment) => void;
}

const ItemsContext = createContext<ItemsContextType>({
  weapons: [],
  addToItemsWeapon: NIE,
  removeFromItemsWeapon: NIE,
  items: [],
  addToItems: NIE,
  removeFromItems: NIE,
});

export const ItemsProvider: React.FC = ({ children }) => {
  const [weapons, setWeapons] = useState<Equipment[]>([]);
  const [items, setItems] = useState<Equipment[]>([]);

  const addToItemsWeapon = (weapon: Equipment) => {
    setWeapons([...weapons, weapon]);
  };

  const removeFromItemsWeapon = (equipment: Equipment) => {
    const weaponsList = [...weapons];
    const indexOfItemToRemove = weaponsList.findIndex(
      (item) => item.index === equipment.index
    );
    weaponsList.splice(indexOfItemToRemove, 1);
    setWeapons(weaponsList);
  };

  const addToItems = (weapon: Equipment) => {
    setItems([...items, weapon]);
  };

  const removeFromItems = (equipment: Equipment) => {
    const itemsList = [...items];
    const indexOfItemToRemove = itemsList.findIndex(
      (item) => item.index === equipment.index
    );
    itemsList.splice(indexOfItemToRemove, 1);

    setItems(itemsList);
  };

  return (
    <ItemsContext.Provider
      value={{
        weapons,
        addToItemsWeapon,
        removeFromItemsWeapon,
        items,
        addToItems,
        removeFromItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => useContext(ItemsContext);
