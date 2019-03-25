const api = endpoint => async (): Promise<any> => {
  const url = `https://pyout-backend.herokuapp.com/api/${endpoint}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    return Promise.reject();
  }
};

export const genders = () => api("genders")().then(res => res.genders);
export const platforms = () => api("platforms")().then(res => res.platforms);
