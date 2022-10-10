import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./Outlet/Main";
import Topics from "./components/Topics/Topics";
import Statics from "./components/Statics/Statics";
import Blog from "./components/Header/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import QuizItems from "./components/QuizItems/QuizItems";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        {
          path: "home",
          loader: async () =>
            fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Home></Home>,
        },
        { path: "topics", element: <Topics></Topics> },
        { path: "statics", element: <Statics></Statics> },
        { path: "blog", element: <Blog></Blog> },
        {
          path: "quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              ` https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <QuizItems></QuizItems>,
        },
      ],
    },
    { path: "*", element: <ErrorPage></ErrorPage> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
