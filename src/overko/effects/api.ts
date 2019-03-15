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
