import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LayoutPage from "./Pages/LayoutPage";
import Homepage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MoviesDetailsPage from "./Pages/MoviesDetailsPage";
import AddMoviePage from "./Pages/AddMovie";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { MovieProvider } from "./Context/MovieContext";


const router = createBrowserRouter([
  {path: "/", element: <LayoutPage />, children: [
      { index: true, element: <Homepage /> }, 
      { path: "movies", element: <MoviesPage /> },
      { path: "movies/:id", element: <MoviesDetailsPage /> },
      { path: "add-movie", element: <AddMoviePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegistrationPage /> },
    ],
  },
]);

function App() {
  return (
    <MovieProvider>
    <RouterProvider router={router} ></RouterProvider>
    </MovieProvider>
  );
}

export default App;
