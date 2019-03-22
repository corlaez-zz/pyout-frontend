export const getTime = async () => {
  const url = `https://${location.host}/api/time.py`;
  try {
    const response = await fetch(url);
    const text = await response.text();
    return text;
  } catch (e) {
    return null;
  }
};

export const getGenders = async (): Promise<
  Array<{ id: string; name: string }>
> => {
  const url = "https://pyout-backend.herokuapp.com/api/genders";
  try {
    const response = await fetch(url);
    const json = (await response.json()) as Array<{ id: string; name: string }>;
    return json;
  } catch (e) {
    return null;
  }
};
