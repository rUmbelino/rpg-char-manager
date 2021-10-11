import React, { createContext, useContext, useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { NIE } from '../../utils/NIE';

interface EquipmentsContextType {
  weapons: Equipment[];
  setWeapons: (weapons: Equipment[]) => void;
}

const EquipmentssContext = createContext<EquipmentsContextType>({
  weapons: [],
  setWeapons: NIE,
});

export const ItemsProvider: React.FC = ({ children }) => {
  const [weapons, setWeapons] = useState<Equipment[]>([]);

  return (
    <EquipmentssContext.Provider
      value={{
        weapons,
        setWeapons,
      }}
    >
      {children}
    </EquipmentssContext.Provider>
  );
};

export const useEquipmentsContext = () => useContext(EquipmentssContext);
