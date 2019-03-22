const api = endpoint => async () => {
  const url = `https://pyout-backend.herokuapp.com/api/${endpoint}`;
  try {
    const response = await fetch(url);
    const text = await response.json();
    return text;
  } catch (e) {
    return null;
  }
};

export const genders = api("genders");
export const platforms = api("platforms");
