import React, { createContext, useContext, useState } from 'react';
import { Equipment } from '../../@types/Item';
import { NIE } from '../../utils/NIE';

interface EquipmentsContextType {
  equipments: Equipment[];
  setEquipments: (equipments: Equipment[]) => void;
}

const EquipmentssContext = createContext<EquipmentsContextType>({
  equipments: [],
  setEquipments: NIE,
});

export const ItemsProvider: React.FC = ({ children }) => {
  const [equipments, setEquipments] = useState<Equipment[]>([]);

  return (
    <EquipmentssContext.Provider
      value={{
        equipments,
        setEquipments,
      }}
    >
      {children}
    </EquipmentssContext.Provider>
  );
};

export const useEquipmentssContext = () => useContext(EquipmentssContext);
