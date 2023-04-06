import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: <h1>Home</h1>
  },
  {
    path: '/predict',
    element: <h1>Predict</h1>
  },
])