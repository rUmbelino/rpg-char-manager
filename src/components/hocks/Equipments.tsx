import React, { createContext, useContext, useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { NIE } from '../../utils/NIE';

interface EquipmentsContextType {
  weapons: Equipment[];
  setWeapons: (weapons: Equipment[]) => void;
}

const EquipmentsContext = createContext<EquipmentsContextType>({
  weapons: [],
  setWeapons: NIE,
});

export const EquipmentsProvider: React.FC = ({ children }) => {
  const [weapons, setWeapons] = useState<Equipment[]>([]);

  return (
    <EquipmentsContext.Provider
      value={{
        weapons,
        setWeapons,
      }}
    >
      {children}
    </EquipmentsContext.Provider>
  );
};

export const useEquipmentsContext = () => useContext(EquipmentsContext);
