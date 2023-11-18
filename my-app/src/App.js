import React from "react";
import ReactDOM from 'react-dom/client';
import Body from "./components/Body";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import RestaurantMenu from "./components/RestaurantMenu";
const App = () => {
  return (
    <div className="contanier">
      <div className="header">
        <Header />
      </div>
      
      <Outlet />
      <Footer />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
   path: '/',
   element:<App />,
   errorElement: <Error />,
   children:[
    {
      path: '/about',
     element: <About />
     },
     {
       path: '/contact',
      element: <Contact />
      },
      {
        path: '/',
        element:<Body />
      },
      {
        path:'restaurant/:id',
        element: <RestaurantMenu />
      }
   ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
