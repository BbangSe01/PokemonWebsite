import movieInstance from "./instance/movie-instance";

const getPokeMovies = async () => {
  const keyWord = "포켓몬스터";
  const url = `/search/movie?query=${keyWord}&include_adult=false&language=ko&page=1`;
  try {
    const response = await movieInstance.get(url).then((res) => res.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default getPokeMovies;
