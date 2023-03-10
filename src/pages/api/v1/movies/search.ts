import type { NextApiRequest, NextApiResponse } from 'next';
import { movies } from './data';

export default function search(req: NextApiRequest, res: NextApiResponse) {
  const searchTerm = req.query.movie;
  const matchingMovies = movies.results.filter(movie => typeof searchTerm === 'string' && (movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || movie.title.toUpperCase().includes(searchTerm.toUpperCase())));
  res.json(matchingMovies);
}
