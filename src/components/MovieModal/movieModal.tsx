import  Movies  from '../Movies/Movies'
import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalCloseBtn,
  MovieDetails,
  MovieDetailsImg,
  MovieDetailsTitle,
  MovieDetailsMeta,
  MovieDetailsPlot
} from './MovieModalStyle';
interface ModalProps {
  movie: typeof Movies[]
  onClose: () => void
}

function Modal({ movie, onClose }: ModalProps) {
  return (
    <div className='modal'>
    <div className='modal-content'>
    <div className='modal-header'>
          <h2 className='movie-details-title'>{movie.title}</h2>
          <button className='modal-close-btn' onClick={onClose}>&times;</button>
        </div>
        <div className='movie-details'>
          <img className='movie-details-img'
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className='movie-details-meta'>
            {movie.release_date.substring(0, 4)} | Director: TODO | Genres:
            TODO
          </div>
          <div className='movie-details-plot'>{movie.overview}</div>
        </div>
      </div>
    </div>
  );
}
export default Modal;