// * Axios * //
import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.github.com/users/',
});

export const userProfile = async (data) => {
  return api.get(data).then(function (res) {
    let data = res.data;
    return data;
  });
};

export const repository = async (data) => {
  return api.get(data + '/repos').then(function (res) {
    let data = res.data;
    return data;
  });
};

export const starred = async (data) => {
  return api.get(data + '/starred').then(function (res) {
    let data = res.data;
    return data;
  });
};
