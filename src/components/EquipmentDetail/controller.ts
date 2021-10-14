import { axios } from '../../utils/axios';

export async function fetchData<T>(url: string) {
  try {
    const { data } = await axios.get<T>(url);

    return data;
  } catch (error) {
    console.log(error);
  }
}
