import { _apiBaseURL, _apiImageBaseUrl, apiKey } from "../constants";
import axios from "axios";

// Endpoints
const trendingMoviesEndPoint = `${_apiBaseURL}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndPoint = `${_apiBaseURL}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndPoint = `${_apiBaseURL}/movie/top_rated?api_key=${apiKey}`;

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params || {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(`Error:`, error.message);
    return {};
  }
};

// parameter based endpoints
const movieDetailsEndpoint = (movieID) =>
  `${_apiBaseURL}/movie/${movieID}?api_key=${apiKey}`;

const movieCreditEndpoint = (movieID) =>
  `${_apiBaseURL}/movie/${movieID}/credits?api_key=${apiKey}`;

const similarMoviesEndpoint = (movieID) =>
  `${_apiBaseURL}/movie/${movieID}/similar?api_key=${apiKey}`;

// Basic fetch Endpoints
export const fetchTrendingMovies = () => {
  return apiCall(trendingMoviesEndPoint);
};

export const fetchUpcomingMovies = () => {
  return apiCall(upcomingMoviesEndPoint);
};

export const fetchTopRatedMovies = () => {
  return apiCall(topRatedMoviesEndPoint);
};

export const fetchMovieDetails = (id) => {
  return apiCall(movieDetailsEndpoint(id));
};

export const fetchMovieCredits = (id) => {
  return apiCall(movieCreditEndpoint(id));
};

export const fetchSimilarMovies = (id) => {
  return apiCall(similarMoviesEndpoint(id));
};

// image width sizes
export const imageW500 = (path) =>
  path ? `${_apiImageBaseUrl}w500${path}` : "";
export const imageW342 = (path) =>
  path ? `${_apiImageBaseUrl}w342${path}` : "";
export const imageW185 = (path) =>
  path ? `${_apiImageBaseUrl}w185${path}` : "";

export const fallBackMoviePoster =
  "https://imagescdn.gettyimagesbank.com/500/19/211/976/0/1189639080.jpg";

export const fallBackPersonPoster =
  "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png";
