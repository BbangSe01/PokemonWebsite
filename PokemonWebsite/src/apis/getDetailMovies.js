import movieInstance from "./instance/movie-instance";

const getDetailMovies = async (movieId) => {
  const { data } = await movieInstance.get(`/movie/${movieId}?language=ko`);
  return data;
};

export default getDetailMovies;
