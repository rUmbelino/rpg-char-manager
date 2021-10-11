import { EquipmentProperty, Weapon } from '../../@types/D&D';
import { axios } from '../../utils/axios';

export const fetchEquipmentDetail = async (url: string) => {
  try {
    const { data } = await axios.get<Weapon>(url);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchEquipmentProperty = async (url: string) => {
  try {
    const { data } = await axios.get<EquipmentProperty>(url);

    return data;
  } catch (error) {
    console.log(error);
  }
};
