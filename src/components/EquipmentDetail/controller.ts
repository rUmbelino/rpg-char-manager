import { axios } from '../../utils/axios';

export const fetchEquipmentDetail = async (index: string) => {
  try {
    const { data } = await axios.get(`/equipment/${index}`);

    return data;
  } catch (error) {
    console.log(error);
  }
};
