import { Equipment } from '../../@types/D&D';
import { axios } from '../../utils/axios';

interface EquipmentResponse {
  equipment: Equipment[];
  index: string;
  name: string;
  url: string;
}

interface FetchItemsParams {
  setEquipments: (equipments: Equipment[]) => void;
}

export const fetchItems = async ({ setEquipments }: FetchItemsParams) => {
  try {
    const { data } = await axios.get<EquipmentResponse>(
      '/equipment-categories/weapon'
    );

    setEquipments(data.equipment);
  } catch (error) {
    console.log(error);
  }
};
