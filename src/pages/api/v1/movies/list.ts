import type { NextApiRequest, NextApiResponse } from 'next';
import  {movies}  from './data';

const IMAGES_BASE_PATH = "https://image.tmdb.org/t/p/w500/";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  res.status(200).json(movies);
}
