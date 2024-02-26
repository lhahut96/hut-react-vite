import App from './App.tsx';
import PortLink from './routes/portlink';

import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/portlink',
    element: <PortLink />,
  },
]);

export default router;
