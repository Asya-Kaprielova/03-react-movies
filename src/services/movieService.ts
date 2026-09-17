import axios from 'axios';
import type { Movie } from '../Components/types/movie';

// Тип для відповіді від TMDB API
interface FetchMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// Отримуємо токен/ключ із змінних середовища
const API_KEY = import.meta.env.VITE_TMDB_TOKEN;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<FetchMoviesResponse>(
    `${BASE_URL}/search/movie`,
    {
      params: {
        api_key: API_KEY,
        query: query,
      },
    }
  );

  return response.data.results;
};