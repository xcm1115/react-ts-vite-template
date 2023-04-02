// Dependencies
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Routes
import routes from '@/routes';

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
