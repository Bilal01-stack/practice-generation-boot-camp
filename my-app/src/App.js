import React from "react";
import ReactDOM from 'react-dom/client';
import Body from "./components/Body";
import Header from "./components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact"
const App = () => {
  return (
    <div className="contanier">
      <div className="header">
        <Header />
      </div>
      <Body />
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
   path: '/',
   element: <App />,
   errorElement: <Error />,
   children:[
    {
      path: '/about',
     element: <About />
     },
     {
       path: '/contact',
      element: <Contact />
      }
   ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
