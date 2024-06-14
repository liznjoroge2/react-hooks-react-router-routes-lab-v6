import HomePage from './components/HomePage';
import MoviePage from './components/MoviePage';

const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/movie/:id',
    element: <MoviePage />,
  },
];

export default routes;
