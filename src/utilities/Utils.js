
 const  encodePath = (path) => {
  return btoa(path); 
};
 const decodePath = (encodedPath) => {
  return atob(encodedPath);
};

export {encodePath, decodePath}
