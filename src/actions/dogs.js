export const fetchDogBreeds = () => {
  return fetch("https://dog.ceo/api/breeds/list/all").then(res => res.json());
};

export const fetchDogImages = breedName => {
  const url = `https://dog.ceo/api/breed/${breedName}/images`;
  return fetch(url).then(res => res.json());
};
