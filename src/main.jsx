import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Quiz from './pages/quiz/Quiz.jsx';
import Letter from './pages/letter/Letter.jsx';

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quiz-bro",
    element: <Quiz />,
  },
  {
    path: "/this-is-my-letter-09-05-23",
    element: <Letter />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
