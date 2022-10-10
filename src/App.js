import logo from "./logo.svg";
import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Main from "./Outlet/Main";
import Topics from "./components/Topics/Topics";
import Statics from "./components/Statics/Statics";
import Blog from "./components/Header/Blog/Blog";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "home", element: <Home></Home> },
        { path: "topics", element: <Topics></Topics> },
        { path: "statics", element: <Statics></Statics> },
        { path: "blog", element: <Blog></Blog> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
