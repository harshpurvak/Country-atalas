import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About"
import Country from "./pages/Country"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import AppLayout from "./components/Layout/AppLayout"
import ErrorPage from "./pages/ErrorPage"
import { CountryProvider } from "./context/CountryContext"



const router = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/country",
        element: <Country />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }

])

const App = () => {
  return (
    <CountryProvider>
      <RouterProvider router={router}></RouterProvider>
    </CountryProvider>
    
  )
}

export default App
