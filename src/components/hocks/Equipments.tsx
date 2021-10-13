import React, { createContext, useContext, useState } from 'react';
import { Equipment } from '../../@types/D&D';
import { NIE } from '../../utils/NIE';

interface EquipmentsContextType {
  weapons: Equipment[];
  setWeapons: (equipments: Equipment[]) => void;
  armor: Equipment[];
  setArmor: (equipments: Equipment[]) => void;
  adventuringGear: Equipment[];
  setAdventuringGear: (equipments: Equipment[]) => void;
}

const EquipmentsContext = createContext<EquipmentsContextType>({
  weapons: [],
  setWeapons: NIE,
  armor: [],
  setArmor: NIE,
  adventuringGear: [],
  setAdventuringGear: NIE,
});

export const EquipmentsProvider: React.FC = ({ children }) => {
  const [armor, setArmor] = useState<Equipment[]>([]);
  const [weapons, setWeapons] = useState<Equipment[]>([]);
  const [adventuringGear, setAdventuringGear] = useState<Equipment[]>([]);

  return (
    <EquipmentsContext.Provider
      value={{
        armor,
        setArmor,
        weapons,
        setWeapons,
        adventuringGear,
        setAdventuringGear,
      }}
    >
      {children}
    </EquipmentsContext.Provider>
  );
};

export const useEquipmentsContext = () => useContext(EquipmentsContext);
