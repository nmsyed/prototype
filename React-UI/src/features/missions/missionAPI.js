import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.spacexdata.com/v3',
});

const getList = async () => {
  const { data } = await instance.get('/launches');
  return data;
};

export default getList;