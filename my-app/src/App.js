import React, { lazy,Suspense, useState } from "react";
import ReactDOM from 'react-dom/client';
import Body from "./components/Body";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import RestaurantMenu from "./components/RestaurantMenu";

import Shimmer from "./components/Shimmer";
//import Instamart from "./components/Instamart";
import userContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
const Instamrt = lazy(()=> import("./components/Instamart"));
const AboutUS = lazy(()=> import("./components/About"));


const App = () => {
  const [users, setUser]= useState({
    name: "Bilal",
    email: "bilal@gmial.com"
  });
  return (
    <Provider store={store}>
    <userContext.Provider value={{user:users}}>
    <div className="contanier">
      <div className="header">
        <Header />
      </div>
      
      <Outlet />
      <Footer />
    </div>
    </userContext.Provider>
    </Provider>
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
        path: '/instamart',
        element:<Suspense fallback={<Shimmer/>}><Instamrt /></Suspense>
      },
      {
        path:'restaurant/',
        element: <RestaurantMenu />
      }
   ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
