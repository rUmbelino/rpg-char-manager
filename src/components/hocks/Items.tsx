import React, { createContext, useContext, useState } from 'react';
import { Item } from '../../@types/Item';
import { getItemsFromStorage } from '../../utils/itemStorage';
import { NIE } from '../../utils/NIE';

interface ItemsContextType {
  items: Item[];
  setItems: (items: Item[]) => void;
}

const ItemsContext = createContext<ItemsContextType>({
  items: [],
  setItems: NIE,
});

export const ItemsProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<Item[]>(getItemsFromStorage());

  return (
    <ItemsContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export const useItemsContext = () => useContext(ItemsContext);
