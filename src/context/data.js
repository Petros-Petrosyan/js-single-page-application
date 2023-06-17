let data = {
  post: {},
  posts: [],
};

export const getData = () => {
  return data;
};

export const setData = (params) => {
  const newData = { ...data, ...params };
  data = newData;
  return newData;
};
