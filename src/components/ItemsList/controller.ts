import { Equipment } from '../../@types/D&D';
import { axios } from '../../utils/axios';

interface EquipmentResponse {
  equipment: Equipment[];
  index: string;
  name: string;
  url: string;
}

type EquipmentSetter = (equipments: Equipment[]) => void;

export const fetchEquipments = async (
  setEquipments: EquipmentSetter,
  URL: string
) => {
  try {
    const { data } = await axios.get<EquipmentResponse>(URL);

    setEquipments(data.equipment);
  } catch (error) {
    console.log(error);
  }
};
