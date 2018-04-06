const copyObjects = (data) => {
  if (typeof data !== 'object') {
    return data;
  }
  const string = JSON.stringify(data);
  return JSON.parse(string);
};

export default copyObjects;
